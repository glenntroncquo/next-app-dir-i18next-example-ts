"use client";

import { useEffect, useRef, useState, useCallback } from "react";

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
  const [widgetReady, setWidgetReady] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Build the iframe URL with query parameters
  const buildWidgetUrl = useCallback((useRoot = false) => {
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
  }, [companyId, supabaseUrl, supabaseKey, widgetDomain]);

  const [widgetUrl, setWidgetUrl] = useState(buildWidgetUrl());
  const [triedRoot, setTriedRoot] = useState(false);
  const [retryKey, setRetryKey] = useState(0);

  const missingConfig =
    !companyId || !supabaseUrl || !supabaseKey;

  const handleRetry = useCallback(() => {
    setHasError(false);
    setErrorMessage(null);
    setIframeLoaded(false);
    setWidgetReady(false);
    setTriedRoot(false);
    setWidgetUrl(buildWidgetUrl());
    setRetryKey((k) => k + 1);
  }, [buildWidgetUrl]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Listen for widget ready event
      if (event.data.type === "salonify-widget-ready" && iframeRef.current) {
        console.log("✅ Widget ready! Sending theme configuration...");
        setHasError(false); // Clear any previous errors
        setWidgetReady(true);

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
      if (
        event.data.type === "salonify-widget-height" &&
        typeof event.data.height === "number"
      ) {
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
        setIframeLoaded(true);

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
                handleLoadError("Widget returned a 404 error page", true);
              }
            }
          } catch (e) {
            // Cross-origin restrictions - can't check content
            // This is normal for iframes from different domains
            console.log(
              "ℹ️ Cannot check iframe content (cross-origin) - this is normal",
            );
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

      const handleLoadError = (
        specificError?: string,
        isActualError: boolean = true,
      ) => {
        // Only log as error if it's an actual failure, not just missing communication
        if (isActualError) {
          console.error("❌ Failed to load widget from:", widgetUrl);
          if (specificError) {
            console.error("Specific error:", specificError);
          }
        } else {
          // Just a warning for missing communication - widget might still work
          console.warn(
            "⚠️ Widget communication issue:",
            specificError || "Widget did not send ready message",
          );
        }

        // Try root path as fallback if we haven't already
        if (!triedRoot && widgetUrl.includes("/widget")) {
          const rootUrl = buildWidgetUrl(true);
          console.log("🔄 Trying root path instead:", rootUrl);
          setWidgetUrl(rootUrl);
          setTriedRoot(true);
          setHasError(false);
          setIframeLoaded(false); // Reset for new URL
          setWidgetReady(false); // Reset ready state
        } else if (isActualError) {
          // Only set error state for actual failures
          setHasError(true);

          // Provide more specific error message based on what we know
          if (iframeLoaded && !widgetReady) {
            // This shouldn't happen with isActualError=true, but just in case
            setErrorMessage(
              `Widget iframe loaded but did not send ready message. This usually means:\n- The widget is not sending the "salonify-widget-ready" postMessage event\n- The widget version may be incompatible\n- Check browser console for CORS or X-Frame-Options errors\n\nWidget URL: ${widgetUrl}\n\nTry checking:\n1. Browser console for CORS/X-Frame-Options errors\n2. Network tab to verify the widget URL loads successfully\n3. Widget documentation for correct postMessage API`,
            );
          } else if (!iframeLoaded) {
            setErrorMessage(
              `Failed to load widget iframe from ${widgetDomain}. This could be due to:\n- CORS/X-Frame-Options blocking iframe embedding\n- Widget not deployed at this domain\n- Network connectivity issues\n- Invalid URL\n\nWidget URL: ${widgetUrl}\n\nPlease verify:\n1. The widget is accessible at the URL above\n2. The widget allows iframe embedding (no X-Frame-Options: DENY)\n3. Check browser console for detailed error messages`,
            );
          } else {
            setErrorMessage(
              `Failed to load widget from ${widgetDomain}. ${specificError || "Unknown error"}\n\nWidget URL: ${widgetUrl}\n\nPlease verify the widget is accessible and check the browser console for detailed errors.`,
            );
          }
        }
        // If isActualError is false, don't set error state - widget might still work
      };

      // Set a timeout to detect if widget never sends ready message
      const timeout = setTimeout(() => {
        // If iframe loaded but widget never sent ready message, it might be a communication issue
        if (iframeLoaded && !widgetReady) {
          console.warn(
            "⚠️ Iframe loaded but widget never sent ready message. Widget may be incompatible or not responding.",
          );
          console.warn(
            "⚠️ Widget may still be functional - the iframe loaded successfully.",
          );
          // Don't treat this as a hard error - widget might still work, just not communicating
          // Only try root path if we haven't already
          if (!triedRoot && widgetUrl.includes("/widget")) {
            console.log("🔄 Trying root path as fallback...");
            handleLoadError(
              "Widget loaded but did not send ready message - trying root path",
              false,
            );
          } else {
            // Widget loaded but not communicating - this is not necessarily a failure
            // The widget might work without the postMessage API
            console.log(
              "ℹ️ Widget iframe loaded successfully. It may work without postMessage communication.",
            );
            // Don't set error state - let the widget display even without ready message
          }
        } else if (!iframeLoaded) {
          // Iframe never loaded - this is a real error
          if (!triedRoot && widgetUrl.includes("/widget")) {
            handleLoadError("Iframe failed to load - trying root path", true);
          } else {
            handleLoadError("Iframe failed to load", true);
          }
        }
      }, 8000); // Increased timeout to 8 seconds to give widget more time

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
  }, [widgetUrl, triedRoot, widgetDomain, iframeLoaded, widgetReady, buildWidgetUrl]);

  if (missingConfig) {
    return (
      <div className="w-full border-2 border-amber-200 rounded-lg p-8 bg-amber-50">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-amber-900 mb-2">
            Booking widget not configured
          </h3>
          <p className="text-amber-800 text-sm mb-4">
            Add the following to <code className="bg-amber-100 px-1 rounded">.env.local</code> and restart the dev server:
          </p>
          <ul className="text-left text-sm text-amber-900 list-disc list-inside space-y-1 max-w-md mx-auto">
            {!companyId && <li><code>NEXT_PUBLIC_COMPANY_ID</code></li>}
            {!supabaseUrl && <li><code>NEXT_PUBLIC_SUPABASE_URL</code></li>}
            {!supabaseKey && <li><code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code></li>}
          </ul>
        </div>
      </div>
    );
  }

  if (hasError && errorMessage) {
    return (
      <div className="w-full border-2 border-red-200 rounded-lg p-8 bg-red-50">
        <div className="text-center">
          <div className="text-red-600 text-4xl mb-4">⚠️</div>
          <h3 className="text-lg font-semibold text-red-900 mb-2">
            Widget Failed to Load
          </h3>
          <p className="text-red-800 text-sm mb-4 whitespace-pre-line">
            {errorMessage}
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-4">
            <button
              type="button"
              onClick={handleRetry}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Retry
            </button>
            <a
              href={widgetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors inline-block"
            >
              Open widget in new tab
            </a>
          </div>
          <div className="bg-white p-4 rounded-lg text-left text-xs">
            <p className="font-semibold mb-2">Possible solutions:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>
                Use &quot;Open widget in new tab&quot; to see if the widget
                loads there (if it does, the issue may be iframe embedding).
              </li>
              <li>
                Verify the widget is deployed at:{" "}
                <code className="bg-gray-100 px-1 rounded">{widgetDomain}</code>
              </li>
              <li>
                Check that{" "}
                <code className="bg-gray-100 px-1 rounded">
                  NEXT_PUBLIC_COMPANY_ID
                </code>
                ,{" "}
                <code className="bg-gray-100 px-1 rounded">
                  NEXT_PUBLIC_SUPABASE_URL
                </code>
                , and{" "}
                <code className="bg-gray-100 px-1 rounded">
                  NEXT_PUBLIC_SUPABASE_ANON_KEY
                </code>{" "}
                are set in <code className="bg-gray-100 px-1 rounded">.env.local</code>.
              </li>
              <li>
                Ensure the widget supports the{" "}
                <code className="bg-gray-100 px-1 rounded">/widget</code> path
                or root path.
              </li>
              <li>Check browser console for CORS or X-Frame-Options errors.</li>
            </ul>
            <p className="mt-3 text-gray-600">
              <strong>Current URL:</strong>{" "}
              <code className="bg-gray-100 px-1 rounded break-all">
                {widgetUrl}
              </code>
            </p>
            <div className="mt-3 p-3 bg-blue-50 rounded border border-blue-200">
              <p className="text-xs text-blue-900">
                <strong>Tip:</strong> Set{" "}
                <code className="bg-blue-100 px-1 rounded">
                  NEXT_PUBLIC_WIDGET_DOMAIN
                </code>{" "}
                in <code className="bg-blue-100 px-1 rounded">.env.local</code>{" "}
                to point to your widget deployment.
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
        key={retryKey}
        ref={iframeRef}
        src={widgetUrl}
        width="100%"
        height={iframeHeight}
        style={{
          border: "none",
          borderRadius: "8px",
          minHeight: "600px",
          transition: "height 0.3s ease-in-out",
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
