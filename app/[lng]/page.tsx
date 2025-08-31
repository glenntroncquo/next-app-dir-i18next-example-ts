import { Link } from "./components/Link";
import { getImageUrl } from "../../lib/imageUrl";
import Navbar from "./components/Navbar";
import ServiceCard from "./components/ServiceCard";
import TestimonialCard from "./components/TestimonialCard";
import Footer from "./components/Footer";
import { getT } from "../i18n";
import {
  ChevronRight,
  Scissors,
  Paintbrush,
  Sparkles,
  Star,
  Heart,
} from "lucide-react";

export default async function Page({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = await params;
  const { t } = await getT();
  // Sample reviews data (this was hardcoded in the React app)
  const reviews = [
    {
      author_name: "Silke De Groote",
      author_url:
        "https://www.google.com/maps/contrib/118165338519284547002/reviews",
      language: "nl",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a/ACg8ocLYph1TZT2igLTPkjXNl7X0kilUywkbBWxr4z_OITQG8ugHyw=s128-c0x00000000-cc-rp-mo",
      rating: 5,
      relative_time_description: "een week geleden",
      text: "Zeer tevreden met mijn keratinebehandeling! Zowel moeder als dochter zijn enorm vriendelijk en professioneel. Mijn droge haar voelt gevoed en gezond aan. Het resultaat is prachtig: geen gedoe meer met de stijltang, enkel föhnen en mijn haar is perfect stijl. Zeker een aanrader!",
      time: 1743608320,
      height: "320px",
    },
    {
      author_name: "stefanie mussche",
      author_url:
        "https://www.google.com/maps/contrib/109242799356134697352/reviews",
      language: "nl",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a-/ALV-UjXZEwBmGukXCljizvrTkxn3lzPP24gy30TqcB2wvSoPlsh93R4=s128-c0x00000000-cc-rp-mo",
      rating: 5,
      relative_time_description: "8 maanden geleden",
      text: "Was al heel lang aan het twijfelen om een keratine behandeling te laten doen maar was nooit helemaal overtuigd of dit wel goed zou zijn voor mijn haar en het wel iets voor mij zou zijn. Toen ik resultaten zag van andere mensen heb ik toch een afspraak gemaakt. Wist nog altijd niet goed wat ik er van moest verwachten maar wauwwww!!!\nIk heb mijn haar 2 dagen nadien gewassen en gewoon los gedroogd met de haardroger en heb er niets van werk aan gehad. Voelde super zacht en glad aan. Alle krul eruit zonder moeite te moeten doen! Geweldig!\n\nBen echt meeega content! Super bedankt. Ik kom sowieso terug! 🤩",
      time: 1722885471,
    },
    {
      author_name: "Allisen Hoste",
      author_url:
        "https://www.google.com/maps/contrib/103706470601092772607/reviews",
      language: "nl",
      profile_photo_url:
        "https://lh3.googleusercontent.com/a-/ALV-UjU1ydb-HZW6xo1nH816_cbPUvszLEY4diwE1cUxaoLjxf4tyH4n=s128-c0x00000000-cc-rp-mo",
      rating: 5,
      relative_time_description: "3 maanden geleden",
      text: "Vorige week keratine behandeling laten doen. Super vriendelijk onthaald! Super lieve vrouw en doet haar werk met heel veel liefde, voel je ook aan mijn haar! Heb de shampoo + maskertje's + olie erbij gekocht (op aanraden van haar) en tot nu toe super content ermee, mij zie je zeker terug!! 🤍",
      time: 1736457445,
      height: "320px",
    },
  ];

  const rating = 5;
  const reviewCount = 37;

  return (
    <>
      {/* Head meta will be handled by Next.js metadata API in layout or generateMetadata */}

      <div className="min-h-screen overflow-hidden">
        {/* Critical LCP Image - Load immediately */}
        <img
          src={getImageUrl("/hero2.jpg")}
          alt="Two stylists in pink blazers with affirmations in the background"
          className="hidden"
          width="509"
          height="592"
        />

        <Navbar lng={lng} />

        {/* Hero Section - TODO: Port Hero component */}
        {/* <Hero rating={Number(rating).toFixed(1)} reviewCount={reviewCount} /> */}

        {/* Hero Section */}
        <div
          id="home"
          className="min-h-[85vh] relative overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-salon-softer-pink via-white to-salon-lavender/30 opacity-70 z-0"></div>
          <div className="absolute top-1/4 -left-10 w-56 h-56 bg-salon-light-pink rounded-full filter blur-3xl opacity-30 animate-pulse-soft"></div>
          <div
            className="absolute bottom-1/3 right-0 w-64 h-64 bg-salon-lavender rounded-full filter blur-3xl opacity-30 animate-pulse-soft"
            style={{ animationDelay: "1s" }}
          ></div>

          {/* Decorative Star Elements */}
          <div
            className="absolute top-1/4 left-1/4 animate-pulse-soft"
            style={{ animationDelay: "0.5s" }}
          >
            <Star size={24} className="text-salon-pink opacity-30" />
          </div>
          <div
            className="absolute top-1/3 right-1/3 animate-pulse-soft"
            style={{ animationDelay: "1.5s" }}
          >
            <Star size={16} className="text-salon-pink opacity-20" />
          </div>
          <div
            className="absolute bottom-1/4 left-1/3 animate-pulse-soft"
            style={{ animationDelay: "2s" }}
          >
            <Star size={20} className="text-salon-pink opacity-25" />
          </div>

          {/* Main Content */}
          <div className="section-container relative z-10 pt-24 md:pt-32 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
              <div className="inline-block mb-4 px-4 py-1.5 bg-white/70 backdrop-blur-md rounded-full shadow-soft">
                <div className="flex items-center">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={14}
                        fill="#FF8FB2"
                        className="text-salon-pink mr-0.5"
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm font-medium text-salon-text-dark">
                    {t("ourRating", { rating: rating.toFixed(1), count: reviewCount })}
                  </span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 tracking-tight">
                <span className="text-salon-text-dark">D&apos;Ana Hair,</span>
                <br />
                <span className="text-salon-pink">Radiant hair starts here</span>
              </h1>

              <p className="text-salon-text-medium text-md md:text-xl mb-8 md:max-w-md">
                For us, it&apos;s all about your hair and your story. Our Brazilian keratin and botox treatments give your hair the care it needs to truly shine again.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href="/appointment"
                  className="btn-primary"
                >
                  Book Appointment <ChevronRight size={18} />
                </Link>
                <Link href="/#services" className="btn-outline">
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="md:w-1/2 relative">
              <div className="relative z-10">
                {/* Main image with shadow and border */}
                <div className="rounded-2xl overflow-hidden border-4 border-white shadow-soft-lg bg-white h-[600px]">
                  <img
                    src={getImageUrl("/hero2.jpg")}
                    alt="Two stylists in pink blazers with affirmations in the background"
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    width="509"
                    height="592"
                  />
                </div>

                {/* Floating card elements */}
                <div className="absolute -top-5 -left-5 glass-card p-4 shadow-soft">
                  <div className="flex items-center space-x-2">
                    <div className="h-10 w-10 rounded-full bg-salon-pink flex items-center justify-center text-white">
                      <Heart size={16} fill="white" />
                    </div>
                    <div>
                      <p className="font-medium text-salon-text-dark text-sm">
                        {t("topRated")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-salon-lavender rounded-full filter blur-2xl opacity-30 z-0"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-salon-light-pink rounded-full filter blur-2xl opacity-40 z-0"></div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section className="relative" id="about">
          <div className="absolute top-0 right-0 w-64 h-64 bg-salon-lavender rounded-full filter blur-3xl opacity-20 z-0"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-salon-light-pink rounded-full filter blur-3xl opacity-20 z-0"></div>

          <div className="section-container relative z-10">
            <div className="flex flex-col-reverse md:flex-row items-center gap-12">
              <div className="md:w-1/2 relative">
                <div className="relative z-10">
                  <div className="rounded-2xl overflow-hidden border-4 border-white shadow-soft-lg">
                    <img
                      src={getImageUrl("/placeholdertest.jpg")}
                      alt="Hair salon stylists"
                      className="w-full max-h-[550px] h-auto object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="inline-block px-4 py-1 rounded-full bg-salon-light-pink text-salon-pink text-sm font-medium mb-4">
                  Our Story
                </div>

                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 leading-tight">
                  Our Roots <span className="text-salon-pink">Our Story</span>
                </h2>

                <p className="text-salon-text-medium mb-6">
                  The story begins in Brazil, where Daniela discovered her
                  passion for hair care at a young age. With her own difficult
                  hair, she learned how important good care is.
                </p>

                <p className="text-salon-text-medium mb-8">
                  In Belgium, I started my own business, supported by the
                  Brazilian brand Nuance. Today we work together as mother and
                  daughter, with a combination of experience and fresh ideas.
                </p>

                <p className="text-3xl md:text-2xl font-handwritten font-bold mb-6 leading-tight text-salon-pink">
                  Daniela & Ana Paula
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/wie-is-wie" className="btn-primary inline-flex">
              About Us <ChevronRight size={18} />
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="bg-salon-softer-pink py-20 mt-20 relative"
        >
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-salon-light-pink rounded-full filter blur-3xl opacity-30 z-0"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-salon-lavender rounded-full filter blur-3xl opacity-30 z-0"></div>

          <div className="section-container relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 rounded-full bg-white text-salon-pink text-sm font-medium mb-4">
                Our Services
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                <span className="text-salon-text-dark">Your Look</span>{" "}
                <span className="text-salon-pink">Our Passion</span>
              </h2>

              <p className="text-salon-text-medium max-w-2xl mx-auto">
                From Brazilian keratin treatments to hair botox, our services
                are designed to enhance your natural beauty.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                title="Keratin Treatment"
                description="Professional Brazilian keratin treatment for smooth, manageable hair."
                price="€150"
                imageSrc={getImageUrl("/keratine.webp")}
                iconSrc={<Scissors size={16} className="text-white" />}
                delay={0}
                link="/services#keratine"
                lng={lng}
              />

              <ServiceCard
                title="Hair Botox"
                description="Deep conditioning treatment that repairs and rejuvenates damaged hair."
                price="€150"
                imageSrc=""
                videoSrc={getImageUrl("/botox.mp4")}
                iconSrc={<Paintbrush size={16} className="text-white" />}
                delay={100}
                link="/services#botox"
                lng={lng}
              />

              <ServiceCard
                title="LED Ritual"
                description="Relaxing LED light therapy for scalp health and hair growth."
                price="€60"
                imageSrc={getImageUrl("/led.jpg")}
                iconSrc={<Sparkles size={16} className="text-white" />}
                delay={200}
                link="/services#ritual"
                lng={lng}
              />
            </div>

            <div className="text-center mt-12">
              <Link href="/appointment" className="btn-primary inline-flex">
                Book Appointment <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-salon-off-white relative py-20">
          <div className="absolute top-0 left-0 w-64 h-64 bg-salon-lavender rounded-full filter blur-3xl opacity-20 z-0"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-salon-light-pink rounded-full filter blur-3xl opacity-20 z-0"></div>

          <div className="section-container relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 rounded-full bg-salon-light-pink text-salon-pink text-sm font-medium mb-4">
                Client Testimonials
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                <span className="text-salon-text-dark">What Our Clients</span>{" "}
                <span className="text-salon-pink">Say</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.slice(0, 3).map((review, index) => (
                <TestimonialCard
                  key={index}
                  name={review.author_name}
                  text={review.text}
                  rating={review.rating}
                  imageSrc={review.profile_photo_url || "/default-avatar.jpg"}
                  delay={index * 100}
                  height={review.height}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-salon-softer-pink py-20 relative">
          <div className="section-container">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1 rounded-full bg-white text-salon-pink text-sm font-medium mb-4">
                Questions?
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight">
                <span className="text-salon-text-dark">
                  Ready to transform your look?{" "}
                </span>
                <span className="text-salon-pink">But have questions?</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information & Opening Hours */}
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Contact Information */}
                  <div>
                    <h4 className="font-display font-semibold text-xl mb-6 text-salon-pink">
                      Contact Information
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="h-8 w-8 rounded-full bg-salon-pink/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <svg
                            className="h-4 w-4 text-salon-pink"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-salon-text-dark">
                            Address
                          </p>
                          <p className="text-salon-text-medium">
                            Hundelgemsesteenweg 73, 9820 Merelbeke-Melle
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="h-8 w-8 rounded-full bg-salon-pink/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <svg
                            className="h-4 w-4 text-salon-pink"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-salon-text-dark">
                            Phone
                          </p>
                          <p className="text-salon-text-medium">
                            +32 477 37 10 71
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Opening Hours */}
                  <div>
                    <h4 className="font-display font-semibold text-xl mb-6 text-salon-pink">
                      Opening Hours
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-salon-pink/20">
                        <span className="text-salon-text-medium">Monday</span>
                        <span className="font-medium text-salon-text-dark">
                          Closed
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-salon-pink/20">
                        <span className="text-salon-text-medium">Tuesday</span>
                        <span className="font-medium text-salon-text-dark">
                          Closed
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-salon-pink/20">
                        <span className="text-salon-text-medium">
                          Wednesday
                        </span>
                        <span className="font-medium text-salon-text-dark">
                          13:30 - 21:00
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-salon-pink/20">
                        <span className="text-salon-text-medium">Friday</span>
                        <span className="font-medium text-salon-text-dark">
                          9:00 - 18:00
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-salon-pink/20">
                        <span className="text-salon-text-medium">Saturday</span>
                        <span className="font-medium text-salon-text-dark">
                          9:00 - 16:00
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6">
                <h4 className="font-display font-semibold text-xl mb-6 text-salon-pink">
                  Find Us
                </h4>
                <div className="rounded-lg overflow-hidden h-80 bg-salon-cream/20">
                  <iframe
                    src="https://maps.google.com/maps?q=51.01490464198777,3.7532758684587&hl=en&z=15&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="D'Ana Hair Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Instagram Feed Section */}
        <section className=" relative py-20">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                <span className="text-salon-text-dark">Follow Our</span>{" "}
                <span className="text-salon-pink">Creative Journey</span>
              </h2>

              <div className="flex flex-wrap justify-center gap-2">
                <div className="inline-block px-4 py-1 rounded-full bg-salon-light-pink text-salon-pink text-sm font-medium mb-4">
                  #IAmBeautiful
                </div>
                <div className="inline-block px-4 py-1 rounded-full bg-salon-light-pink text-salon-pink text-sm font-medium mb-4">
                  #IAmWorthy
                </div>
                <div className="inline-block px-4 py-1 rounded-full bg-salon-light-pink text-salon-pink text-sm font-medium mb-4">
                  #IAmAbundant
                </div>
                <div className="inline-block px-4 py-1 rounded-full bg-salon-light-pink text-salon-pink text-sm font-medium mb-4">
                  #IAmEnough
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-5">
              {[
                {
                  url: getImageUrl("/story5.jpg"),
                  instagram: "https://www.instagram.com/p/DGIe1VPNJns/?igsh=MTI2cXo5bGE3aGp5dw%3D%3D",
                },
                {
                  url: getImageUrl("/story4.mp4"),
                  instagram: "https://www.instagram.com/p/DLPhNfLtSWC/?igsh=bXlxZWpjOHNyc29r&img_index=1",
                },
                {
                  url: getImageUrl("/story1.jpg"),
                  instagram: "https://www.instagram.com/p/DNC_qWpMS9b/?img_index=1",
                },
                {
                  url: getImageUrl("/story2.mp4"),
                  instagram: "https://www.instagram.com/reel/DNQO2eXsVUL/?igsh=MTdybjFjbzA3aWlndg%3D%3D",
                },
                {
                  url: getImageUrl("/story3.jpg"),
                  instagram: "https://www.instagram.com/p/DMqQLpJMxmS/?igsh=MTFsZGw0cWw5a2VrbA%3D%3D",
                },
              ].map((image, index) => {
                const isVideo = (url: string) => {
                  const videoExtensions = ["mp4", "webm", "ogg", "mov"];
                  const extension = url.split(".").pop()?.toLowerCase();
                  return videoExtensions.includes(extension || "");
                };
                const isVideoFile = isVideo(image.url);

                return (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-lg aspect-square shadow-soft"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <a
                      href={image.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {isVideoFile ? (
                        <video
                          src={image.url}
                          poster={image.url.replace(/\.(mp4|webm|ogg|mov)$/i, ".jpg")}
                          className="w-full h-full object-cover transition-transform duration-700 ease-bounce-soft group-hover:scale-110"
                          muted
                          loop
                          autoPlay
                          playsInline
                        />
                      ) : (
                        <img
                          src={image.url}
                          alt={`Instagram post ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 ease-bounce-soft group-hover:scale-110"
                          loading="lazy"
                          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                        />
                      )}

                      {/* Heart icon overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-3 text-white">
                          <div className="flex items-center text-xs">
                            <Heart size={12} fill="white" className="mr-1" />
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <a
                href="https://www.instagram.com/dana.hair.official/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex"
              >
                Follow us on Instagram
              </a>
            </div>
          </div>
        </section>

        <Footer lng={lng} />
      </div>
    </>
  );
}
