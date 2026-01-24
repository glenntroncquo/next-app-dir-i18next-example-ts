import { Metadata } from "next";
import { notFound } from "next/navigation";
import { languages } from "../../i18n/settings";
import { getT } from "../../i18n";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { companyId } from "../../../lib/company_id";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "../../../lib/supabase";
import IframeWidget from "./IframeWidget";

interface PageProps {
  params: Promise<{ lng: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lng } = await params;
  const { t } = await getT();

  return {
    title: `Widget Test - D'Ana Hair Merelbeke`,
    description: `Test page for the booking widget integration`,
  };
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function WidgetTestPage({ params }: PageProps) {
  const { lng } = await params;

  if (!languages.includes(lng)) {
    notFound();
  }

  const { t } = await getT();

  const widgetDomain =
    process.env.NEXT_PUBLIC_WIDGET_DOMAIN ||
    "https://booking-widget-nine.vercel.app";

  return (
    <div className="min-h-screen bg-gradient-to-b from-salon-off-white to-salon-softer-pink">
      <Navbar currentLng={lng} />
      <div className="section-container pt-20 lg:pt-32">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h1 className="text-3xl font-bold text-salon-text-dark mb-4">
              Salonify Booking Widget Test Page
            </h1>
            <p className="text-gray-600 mb-6">
              Test and explore different configurations of the iframe-embeddable
              booking widget.
            </p>

            {/* Configuration Info */}
            <div className="mb-6 space-y-3 text-sm">
              <h3 className="font-semibold text-salon-text-dark mb-3">
                Current Configuration
              </h3>
              <div className="space-y-2 text-gray-600 bg-gray-50 p-4 rounded-lg">
                <p>
                  <strong className="text-salon-text-dark">
                    Widget Domain:
                  </strong>{" "}
                  <code className="bg-white px-2 py-1 rounded text-xs">
                    {widgetDomain}
                  </code>
                </p>
                <p>
                  <strong className="text-salon-text-dark">Company ID:</strong>{" "}
                  <code className="bg-white px-2 py-1 rounded text-xs">
                    {companyId || "Not set"}
                  </code>
                </p>
                <p>
                  <strong className="text-salon-text-dark">
                    Supabase URL:
                  </strong>{" "}
                  <code className="bg-white px-2 py-1 rounded text-xs break-all">
                    {SUPABASE_URL || "Not set"}
                  </code>
                </p>
                <p>
                  <strong className="text-salon-text-dark">
                    Supabase Key:
                  </strong>{" "}
                  <code className="bg-white px-2 py-1 rounded text-xs">
                    {SUPABASE_ANON_KEY
                      ? `${SUPABASE_ANON_KEY.substring(0, 20)}...`
                      : "Not set"}
                  </code>
                </p>
              </div>

              {/* Widget Domain Configuration */}
              {!process.env.NEXT_PUBLIC_WIDGET_DOMAIN && (
                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h3 className="font-semibold text-yellow-900 mb-2">
                    ⚠️ Widget Domain Configuration
                  </h3>
                  <p className="text-yellow-800 text-xs mb-2">
                    The widget domain is currently hardcoded. To configure it
                    via environment variable, add:
                  </p>
                  <code className="text-xs text-yellow-900 font-mono bg-yellow-100 p-2 rounded block">
                    NEXT_PUBLIC_WIDGET_DOMAIN=https://your-widget-domain.com
                  </code>
                </div>
              )}

              {/* PostMessage API Info */}
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">
                  PostMessage API Configuration
                </h3>
                <p className="text-blue-800 text-xs mb-2">
                  Theme is configured via PostMessage API (recommended method).
                  Check browser console for widget events.
                </p>
                <div className="text-xs text-blue-700 font-mono bg-blue-100 p-2 rounded">
                  <div>Event Flow: salonify-widget-ready → widget-theme</div>
                  <div className="mt-1">
                    Theme: Primary: #FF8FB2 | Hover: #FFBDD4 | Text: #4A3F45
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Widget Example */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-salon-text-dark mb-2">
              Main Widget Example
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              This widget uses PostMessage API for theme configuration. Open the
              browser console to see widget events.
            </p>
            <IframeWidget
              companyId={companyId || undefined}
              supabaseUrl={SUPABASE_URL || undefined}
              supabaseKey={SUPABASE_ANON_KEY || undefined}
              widgetDomain={widgetDomain}
            />
          </div>
        </div>
      </div>
      <Footer lng={lng} />
    </div>
  );
}
