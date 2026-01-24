"use client";

import { useEffect, useRef, useState } from "react";

interface IframeWidgetProps {
  companyId?: string;
  supabaseUrl?: string;
  supabaseKey?: string;
  widgetDomain?: string;
}

// Salon theme matching the BookingClient component
const salonTheme = {
  primary: "#FF8FB2",
  primaryHover: "#FFBDD4",
  primaryLight: "#FFF0F7",
  secondary: "#FFBDD4",
  text: "#4A3F45",
  background: "white",
  buttonText: "white",
};

export default function IframeWidget({
  companyId,
  supabaseUrl,
  supabaseKey,
  widgetDomain = process.env.NEXT_PUBLIC_WIDGET_DOMAIN ||
    "https://booking-widget-nine.vercel.app",
}: IframeWidgetProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [iframeHeight, setIframeHeight] = useState<number>(800); // Default height, will be updated by widget

  // Build the iframe URL with query parameters
  const buildWidgetUrl = (useRoot = false) => {
    const params = new URLSearchParams();

    if (companyId) {
      params.append("companyId", companyId);
    }
    if (supabaseUrl) {
      params.append("supabaseUrl", supabaseUrl);
    }
    if (supabaseKey) {
      params.append("supabaseKey", supabaseKey);
    }

    // Try /widget path first, fallback to root if needed
    const path = useRoot ? "" : "/widget";
    return `${widgetDomain}${path}?${params.toString()}`;
  };

  const [widgetUrl, setWidgetUrl] = useState(buildWidgetUrl());
  const [triedRoot, setTriedRoot] = useState(false);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Listen for widget ready event
      if (event.data.type === "salonify-widget-ready" && iframeRef.current) {
        console.log("✅ Widget ready! Sending theme configuration...");
        setHasError(false); // Clear any previous errors

        // Widget is ready, send theme configuration via PostMessage
        iframeRef.current.contentWindow?.postMessage(
          {
            type: "widget-theme",
            theme: salonTheme,
          },
          "*",
        );

        // Request height update from widget
        iframeRef.current.contentWindow?.postMessage(
          {
            type: "widget-request-height",
          },
          "*",
        );

        console.log("📤 Theme sent:", salonTheme);
      }

      // Listen for height updates from the widget
      if (event.data.type === "salonify-widget-height" && typeof event.data.height === "number") {
        const newHeight = event.data.height;
        console.log("📏 Widget height update:", newHeight);
        setIframeHeight(newHeight);
      }

      // Listen to widget events
      if (event.data.type === "salonify-booking-event") {
        console.group("🎯 Widget Event");
        console.log("Event Type:", event.data.event);
        console.log("Event Data:", event.data.data);
        console.groupEnd();
      }
    };

    window.addEventListener("message", handleMessage);

    // Also send theme when iframe loads (fallback)
    const iframe = iframeRef.current;
    if (iframe) {
      let loadTimeout: NodeJS.Timeout;
      let errorCheckTimeout: NodeJS.Timeout;

      const handleLoad = () => {
        console.log("🔄 Iframe loaded, waiting for widget ready...");

        // Clear error state on successful load
        setHasError(false);

        // Check if widget actually loaded (not a 404 page)
        errorCheckTimeout = setTimeout(() => {
          try {
            // Try to access iframe content - if it's a 404, this might fail
            // or we can check for specific content
            if (iframe.contentDocument) {
              const bodyText = iframe.contentDocument.body?.innerText || "";
              // If we see common 404 indicators, treat as error
              if (bodyText.includes("404") || bodyText.includes("Not Found")) {
                handleLoadError();
              }
            }
          } catch (e) {
            // Cross-origin restrictions - can't check content
            // This is normal for iframes from different domains
            console.log("ℹ️ Cannot check iframe content (cross-origin)");
          }
        }, 2000);

        // Small delay to ensure widget is ready, then send theme
        loadTimeout = setTimeout(() => {
          if (iframe.contentWindow) {
            iframe.contentWindow.postMessage(
              {
                type: "widget-theme",
                theme: salonTheme,
              },
              "*",
            );
            // Request height update
            iframe.contentWindow.postMessage(
              {
                type: "widget-request-height",
              },
              "*",
            );
            console.log("📤 Theme sent (fallback):", salonTheme);
          }
        }, 500);
      };

      const handleLoadError = () => {
        console.error("❌ Failed to load widget from:", widgetUrl);

        // Try root path as fallback if we haven't already
        if (!triedRoot && widgetUrl.includes("/widget")) {
          const rootUrl = buildWidgetUrl(true);
          console.log("🔄 Trying root path instead:", rootUrl);
          setWidgetUrl(rootUrl);
          setTriedRoot(true);
          setHasError(false);
        } else {
          setHasError(true);
          setErrorMessage(
            `Failed to load widget from ${widgetDomain}. This could be due to:\n- CORS restrictions\n- Widget not deployed at this domain\n- Network connectivity issues\n\nPlease verify the widget is accessible and check the browser console for detailed errors.`,
          );
        }
      };

      // Set a timeout to detect if widget never loads
      const timeout = setTimeout(() => {
        // If we haven't received a ready message and haven't tried root, try root
        if (!triedRoot && widgetUrl.includes("/widget")) {
          handleLoadError();
        }
      }, 5000);

      iframe.addEventListener("load", handleLoad);

      return () => {
        window.removeEventListener("message", handleMessage);
        iframe.removeEventListener("load", handleLoad);
        clearTimeout(loadTimeout);
        clearTimeout(errorCheckTimeout);
        clearTimeout(timeout);
      };
    }

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [widgetUrl, triedRoot, widgetDomain]);

  if (hasError && errorMessage) {
    return (
      <div className="w-full border-2 border-red-200 rounded-lg p-8 bg-red-50">
        <div className="text-center">
          <div className="text-red-600 text-4xl mb-4">⚠️</div>
          <h3 className="text-lg font-semibold text-red-900 mb-2">
            Widget Failed to Load
          </h3>
          <p className="text-red-800 text-sm mb-4">{errorMessage}</p>
          <div className="bg-white p-4 rounded-lg text-left text-xs">
            <p className="font-semibold mb-2">Possible solutions:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>
                Verify the widget is deployed at:{" "}
                <code className="bg-gray-100 px-1 rounded">{widgetDomain}</code>
              </li>
              <li>
                Check if the widget domain is correct in your environment
                variables
              </li>
              <li>
                Ensure the widget supports the{" "}
                <code className="bg-gray-100 px-1 rounded">/widget</code> path
                or root path
              </li>
              <li>Check browser console for detailed error messages</li>
            </ul>
            <p className="mt-3 text-gray-600">
              <strong>Current URL:</strong>{" "}
              <code className="bg-gray-100 px-1 rounded break-all">
                {widgetUrl}
              </code>
            </p>
            <div className="mt-3 p-3 bg-blue-50 rounded border border-blue-200">
              <p className="text-xs text-blue-900">
                <strong>💡 Tip:</strong> Set{" "}
                <code className="bg-blue-100 px-1 rounded">
                  NEXT_PUBLIC_WIDGET_DOMAIN
                </code>{" "}
                environment variable to configure the widget domain.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <iframe
        ref={iframeRef}
        src={widgetUrl}
        width="100%"
        height={iframeHeight}
        style={{ 
          border: "none", 
          borderRadius: "8px",
          minHeight: "600px",
          transition: "height 0.3s ease-in-out"
        }}
        title="Booking Widget"
        allow="clipboard-read; clipboard-write"
        onError={() => {
          setHasError(true);
          setErrorMessage("Failed to load widget iframe");
        }}
      />
    </div>
  );
}
