import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Instagram, ChevronRight, Send } from "lucide-react";
import { languages } from "../../i18n/settings";
import { getT } from "../../i18n";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface PageProps {
  params: Promise<{ lng: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lng } = await params;
  const { t } = await getT();

  return {
    title: `${t("contact")} - D'Ana Hair Merelbeke | ${t("phone")} & ${t("address")}`,
    description: `Contact D'Ana Hair salon in Merelbeke. Book your keratin or botox treatment appointment. ${t("address")}: Hundelgemsesteenweg 1A, 9820 Merelbeke. Call +32 9 222 00 00`,
    keywords: `contact hair salon Merelbeke, D'Ana Hair contact, hair salon Ghent contact, keratin treatment appointment, hair salon phone number Merelbeke, ${t("seoKeywords")}`,
    openGraph: {
      title: `Contact D'Ana Hair Merelbeke - Book Your Appointment`,
      description: `Get in touch with D'Ana Hair salon for Brazilian keratin treatments in Merelbeke, Ghent & Oudenaarde. Professional hair care services.`,
      siteName: t("siteName"),
      locale: lng,
      type: "website",
    },
    alternates: {
      canonical: `https://danahair.be/${lng}/contact`,
    },
  };
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function ContactPage({ params }: PageProps) {
  const { lng } = await params;

  if (!languages.includes(lng)) {
    notFound();
  }

  const { t } = await getT();

  // Structured Data for Local Business
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "name": "D'Ana Hair",
    "description": t("heroDesc"),
    "url": `https://danahair.be/${lng}`,
    "telephone": "+32 9 222 00 00",
    "email": "info@danahair.be",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hundelgemsesteenweg 1A",
      "addressLocality": "Merelbeke",
      "postalCode": "9820",
      "addressCountry": "BE",
      "addressRegion": "East Flanders"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.9967",
      "longitude": "3.7434"
    },
    "openingHours": [
      "Tu-Fr 09:00-18:00",
      "Sa 09:00-17:00"
    ],
    "areaServed": [
      "Merelbeke",
      "Ghent", 
      "Oudenaarde",
      "Melle",
      "East Flanders",
      "Belgium"
    ],
    "priceRange": "€€",
    "paymentAccepted": ["Cash", "Credit Card"],
    "hasMap": "https://goo.gl/maps/xyz",
    "sameAs": [
      "https://www.instagram.com/danahair",
      "https://www.facebook.com/danahair"
    ]
  };

  const openingHours = [
    { day: t("monday"), hours: t("closed") },
    { day: t("tuesday"), hours: "09:00 - 18:00" },
    { day: t("wednesday"), hours: "09:00 - 18:00" },
    { day: t("thursday"), hours: "09:00 - 18:00" },
    { day: t("friday"), hours: "09:00 - 18:00" },
    { day: t("saturday"), hours: "09:00 - 17:00" },
    { day: t("sunday"), hours: t("closed") },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-salon-off-white to-white">
        <Navbar currentLng={lng} />

        {/* Hero Section */}
        <section className="relative md:pt-32 pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-salon-pink/10 via-salon-rose/5 to-salon-lavender/10"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-salon-light-pink/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-salon-lavender/15 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-salon-pink to-salon-rose text-white px-6 py-3 rounded-full shadow-glow-pink mb-8">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Visit Our Salon</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-salon-text-dark mb-6 leading-tight">
              {t("contact")}
            </h1>
            <h2 className="text-xl md:text-2xl text-salon-pink mb-8 font-medium">
              Get in Touch for Your Hair Transformation
            </h2>
            <p className="text-xl text-salon-text-medium leading-relaxed max-w-2xl mx-auto">
              Ready to transform your hair with our Brazilian keratin and botox treatments? 
              Contact us to book your appointment or ask any questions.
            </p>
          </div>
        </section>

        {/* Contact Information - Homepage Style */}
        <section className="bg-salon-softer-pink py-20 relative">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1 rounded-full bg-white text-salon-pink text-sm font-medium mb-4">
                Get in Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-6">
                <span className="text-salon-text-dark">Ready to transform your look? </span>
                <span className="text-salon-pink">Let&apos;s connect!</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information & Opening Hours */}
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Contact Information */}
                  <div>
                    <h3 className="font-display font-semibold text-xl mb-6 text-salon-pink">
                      {t("contactInformation")}
                    </h3>
                    <address className="space-y-4 not-italic">
                      <div className="flex items-start space-x-3">
                        <div className="h-8 w-8 rounded-full bg-salon-pink/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <MapPin className="h-4 w-4 text-salon-pink" />
                        </div>
                        <div>
                          <p className="font-medium text-salon-text-dark">
                            {t("address")}
                          </p>
                          <p className="text-salon-text-medium">
                            Hundelgemsesteenweg 1A<br />
                            9820 Merelbeke, Belgium
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="h-8 w-8 rounded-full bg-salon-pink/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <Phone className="h-4 w-4 text-salon-pink" />
                        </div>
                        <div>
                          <p className="font-medium text-salon-text-dark">
                            {t("phone")}
                          </p>
                          <p className="text-salon-text-medium">
                            <a
                              href="tel:+3292220000"
                              className="hover:text-salon-pink transition-colors"
                            >
                              +32 9 222 00 00
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="h-8 w-8 rounded-full bg-salon-pink/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <Mail className="h-4 w-4 text-salon-pink" />
                        </div>
                        <div>
                          <p className="font-medium text-salon-text-dark">
                            {t("email")}
                          </p>
                          <p className="text-salon-text-medium">
                            <a
                              href="mailto:info@danahair.be"
                              className="hover:text-salon-pink transition-colors"
                            >
                              info@danahair.be
                            </a>
                          </p>
                        </div>
                      </div>
                    </address>
                  </div>

                  {/* Opening Hours */}
                  <div>
                    <h3 className="font-display font-semibold text-xl mb-6 text-salon-pink">
                      {t("openingHours")}
                    </h3>
                    <div className="space-y-3">
                      {openingHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center py-2">
                          <span className="text-salon-text-dark font-medium">{schedule.day}</span>
                          <span className="text-salon-text-medium">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center">
                  <Phone className="w-12 h-12 text-salon-pink mx-auto mb-4" />
                  <h3 className="font-display font-semibold text-xl mb-3 text-salon-text-dark">
                    Call for Immediate Booking
                  </h3>
                  <p className="text-salon-text-medium mb-6">
                    Speak directly with our team to schedule your appointment
                  </p>
                  <a
                    href="tel:+3292220000"
                    className="btn-primary inline-flex items-center px-6 py-3"
                  >
                    <Phone size={20} className="mr-2" />
                    Call Now
                  </a>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center">
                  <MapPin className="w-12 h-12 text-salon-pink mx-auto mb-4" />
                  <h3 className="font-display font-semibold text-xl mb-3 text-salon-text-dark">
                    Visit Our Salon
                  </h3>
                  <p className="text-salon-text-medium mb-6">
                    Located in the heart of Merelbeke with free parking
                  </p>
                  <a
                    href="https://maps.google.com/?q=Hundelgemsesteenweg+1A,+9820+Merelbeke,+Belgium"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline inline-flex items-center px-6 py-3"
                  >
                    <MapPin size={20} className="mr-2" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-salon-text-dark mb-4">
                Send Us a Message
              </h2>
              <p className="text-lg text-salon-text-medium">
                Have questions about our treatments? We&apos;d love to hear from you!
              </p>
            </div>
            
            <form className="bg-white rounded-3xl p-8 md:p-12 shadow-soft">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-salon-text-dark font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-salon-light-pink rounded-xl focus:outline-none focus:ring-2 focus:ring-salon-pink focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-salon-text-dark font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-salon-light-pink rounded-xl focus:outline-none focus:ring-2 focus:ring-salon-pink focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-salon-text-dark font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-salon-light-pink rounded-xl focus:outline-none focus:ring-2 focus:ring-salon-pink focus:border-transparent transition-all duration-200"
                    placeholder="+32 xxx xxx xxx"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-salon-text-dark font-semibold mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-salon-light-pink rounded-xl focus:outline-none focus:ring-2 focus:ring-salon-pink focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a service</option>
                    <option value="keratin">{t("serviceKeratinTitle")}</option>
                    <option value="botox">{t("serviceBotoxTitle")}</option>
                    <option value="ritual">{t("serviceRitualTitle")}</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-8">
                <label htmlFor="message" className="block text-salon-text-dark font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-salon-light-pink rounded-xl focus:outline-none focus:ring-2 focus:ring-salon-pink focus:border-transparent transition-all duration-200"
                  placeholder="Tell us about your hair goals or any questions you have..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="btn-primary inline-flex items-center px-8 py-4 text-lg"
                >
                  Send Message
                  <Send size={24} className="ml-2" />
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Map & Directions */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-salon-text-dark mb-6">
                {t("findUs")}
              </h2>
              <p className="text-xl text-salon-text-medium">
                Located in the heart of Merelbeke, easily accessible from Ghent and surrounding areas
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Map placeholder */}
              <div className="bg-salon-off-white rounded-3xl p-8 text-center">
                <MapPin className="w-16 h-16 text-salon-pink mx-auto mb-6" />
                <h3 className="text-2xl font-display font-bold text-salon-text-dark mb-4">Interactive Map</h3>
                <p className="text-salon-text-medium mb-6">
                  Click the button below to view our location on Google Maps and get directions.
                </p>
                <a 
                  href="https://maps.google.com/?q=Hundelgemsesteenweg+1A,+9820+Merelbeke,+Belgium"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center"
                >
                  View on Google Maps
                  <ChevronRight size={20} className="ml-2" />
                </a>
              </div>
              
              {/* Directions & Parking */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-display font-bold text-salon-text-dark mb-4">
                    Getting Here
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-salon-pink rounded-full mt-3"></div>
                      <p className="text-salon-text-medium">
                        <strong>From Ghent:</strong> Take the N60 towards Merelbeke. Our salon is on Hundelgemsesteenweg, easily accessible by car or public transport.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-salon-pink rounded-full mt-3"></div>
                      <p className="text-salon-text-medium">
                        <strong>Parking:</strong> Free parking available directly in front of the salon.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-salon-pink rounded-full mt-3"></div>
                      <p className="text-salon-text-medium">
                        <strong>Public Transport:</strong> Accessible via local bus routes from Ghent and surrounding areas.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-salon-off-white to-salon-cream rounded-2xl p-6">
                  <h4 className="text-lg font-display font-bold text-salon-text-dark mb-3">
                    Serving These Areas
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="text-salon-text-medium">• Merelbeke</span>
                    <span className="text-salon-text-medium">• Ghent</span>
                    <span className="text-salon-text-medium">• Oudenaarde</span>
                    <span className="text-salon-text-medium">• Melle</span>
                    <span className="text-salon-text-medium">• Schellebelle</span>
                    <span className="text-salon-text-medium">• Wetteren</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-salon-pink via-salon-rose to-salon-lavender text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Book Your Appointment?
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              Don&apos;t wait to start your hair transformation journey. Contact us today to schedule your consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:+3292220000"
                className="bg-white text-salon-pink px-8 py-4 rounded-full font-semibold hover:bg-salon-off-white transition-colors duration-200 inline-flex items-center justify-center text-lg shadow-lg"
              >
                <Phone size={24} className="mr-2" />
                Call Now
              </a>
              <Link
                href={`/${lng}/services`}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-salon-pink transition-colors duration-200 text-lg"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>

        <Footer lng={lng} />
      </div>
    </>
  );
}