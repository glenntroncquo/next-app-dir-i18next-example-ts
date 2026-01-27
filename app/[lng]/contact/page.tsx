// import { Metadata } from "next";
// import { notFound, redirect } from "next/navigation";
// import Link from "next/link";
// import {
//   MapPin,
//   Phone,
//   Mail,
//   Clock,
//   Instagram,
//   ChevronRight,
//   Send,
// } from "lucide-react";
// import { languages } from "../../i18n/settings";
// import { getT } from "../../i18n";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// interface PageProps {
//   params: Promise<{ lng: string }>;
// }

// export async function generateMetadata({
//   params,
// }: PageProps): Promise<Metadata> {
//   const { lng } = await params;
//   const { t } = await getT();

//   return {
//     title: `${t("contact")} - D'Ana Hair Merelbeke | ${t("phone")} & ${t(
//       "address"
//     )}`,
//     description: `${t("contactPageDesc")} ${t(
//       "address"
//     )}: Hundelgemsesteenweg 73, 9820 Merelbeke-Melle. ${t("callPhone")} +32 477 37 10 71`,
//     keywords: `${t("contactSeoKeywords")}, ${t(
//       "seoKeywords"
//     )}`,
//     openGraph: {
//       title: `${t("contact")} D'Ana Hair Merelbeke - ${t("bookAppointment")}`,
//       description: `${t("openGraphContactDesc")}`,
//       siteName: t("siteName"),
//       locale: lng,
//       type: "website",
//     },
//     alternates: {
//       canonical: `https://danahair.be/${lng}/contact`,
//     },
//   };
// }

// export async function generateStaticParams() {
//   return languages.map((lng) => ({ lng }));
// }

// export default async function ContactPage({ params }: PageProps) {
//   const { lng } = await params;

//   if (!languages.includes(lng)) {
//     notFound();
//   }

//   // Redirect to homepage with #contact hash to scroll to contact section
//   redirect(`/${lng}#contact`);

//   // Structured Data for Local Business
//   const structuredData = {
//     "@context": "https://schema.org",
//     "@type": "HairSalon",
//     name: "D'Ana Hair",
//     description: t("heroDesc"),
//     url: `https://danahair.be/${lng}`,
//     telephone: "+32 477 37 10 71",
//     email: "info@danahair.be",
//     address: {
//       "@type": "PostalAddress",
//       streetAddress: "Hundelgemsesteenweg 73",
//       addressLocality: "Merelbeke-Melle",
//       postalCode: "9820",
//       addressCountry: "BE",
//       addressRegion: "East Flanders",
//     },
//     geo: {
//       "@type": "GeoCoordinates",
//       latitude: "51.01490464198777",
//       longitude: "3.7532758684587",
//     },
//     openingHours: ["We 13:30-21:00", "Fr 09:00-18:00", "Sa 09:00-16:00"],
//     areaServed: [
//       "Merelbeke",
//       "Ghent",
//       "Oudenaarde",
//       "Melle",
//       "East Flanders",
//       "Belgium",
//     ],
//     priceRange: "€€",
//     paymentAccepted: ["Cash", "Credit Card"],
//     hasMap: "https://maps.google.com/?q=51.01490464198777,3.7532758684587",
//     sameAs: [
//       "https://www.instagram.com/danahair",
//       "https://www.facebook.com/danahair",
//     ],
//   };

//   return (
//     <>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
//       />

//       <div className="min-h-screen bg-gradient-to-b from-salon-off-white to-white">
//         <Navbar currentLng={lng} />

//         {/* Hero Section */}
//         <section className="relative md:pt-32 pt-24 pb-16 overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-br from-salon-pink/10 via-salon-rose/5 to-salon-lavender/10"></div>
//           <div className="absolute top-20 right-10 w-72 h-72 bg-salon-light-pink/20 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-20 left-10 w-96 h-96 bg-salon-lavender/15 rounded-full blur-3xl"></div>

//           <div className="relative max-w-4xl mx-auto px-6 text-center">
//             <div className="inline-flex items-center gap-2 bg-gradient-to-r from-salon-pink to-salon-rose text-white px-6 py-3 rounded-full shadow-glow-pink mb-8">
//               <MapPin className="w-5 h-5" />
//               <span className="font-medium">{t("visitOurSalon")}</span>
//             </div>

//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-salon-text-dark mb-6 leading-tight">
//               {t("contact")}
//             </h1>
//             <h2 className="text-xl md:text-2xl text-salon-pink mb-8 font-medium">
//               {t("getInTouchTransformation")}
//             </h2>
//             <p className="text-xl text-salon-text-medium leading-relaxed max-w-2xl mx-auto">
//               {t("readyToTransformDesc")}
//             </p>
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section
//           id="contact"
//           className="bg-salon-softer-pink py-20 relative"
//           aria-labelledby="contact-heading"
//         >
//           <div className="section-container">
//             <div className="text-center mb-12">
//               <div className="inline-block px-4 py-1 rounded-full bg-white text-salon-pink text-sm font-medium mb-4">
//                 {t("questions")}
//               </div>
//               <h2
//                 id="contact-heading"
//                 className="text-3xl md:text-4xl font-display font-bold leading-tight"
//               >
//                 <span className="text-salon-text-dark">
//                   {t("readyToTransformYourLook")}{" "}
//                 </span>
//                 <span className="text-salon-pink">{t("butQuestions")}</span>
//               </h2>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//               {/* Contact Information & Opening Hours */}
//               <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                   {/* Contact Information */}
//                   <div>
//                     <h3 className="font-display font-semibold text-xl mb-6 text-salon-pink">
//                       {t("contactInformation")}
//                     </h3>
//                     <address className="space-y-4 not-italic">
//                       <div className="flex items-start space-x-3">
//                         <div className="h-8 w-8 rounded-full bg-salon-pink/20 flex items-center justify-center flex-shrink-0 mt-1">
//                           <svg
//                             className="h-4 w-4 text-salon-pink"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                             aria-hidden="true"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                             />
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                             />
//                           </svg>
//                         </div>
//                         <div>
//                           <p className="font-medium text-salon-text-dark">
//                             {t("address")}
//                           </p>
//                           <p className="text-salon-text-medium">
//                             Hundelgemsesteenweg 73, 9820 Merelbeke-Melle
//                           </p>
//                         </div>
//                       </div>
//                       <div className="flex items-start space-x-3">
//                         <div className="h-8 w-8 rounded-full bg-salon-pink/20 flex items-center justify-center flex-shrink-0 mt-1">
//                           <svg
//                             className="h-4 w-4 text-salon-pink"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                             aria-hidden="true"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                             />
//                           </svg>
//                         </div>
//                         <div>
//                           <p className="font-medium text-salon-text-dark">
//                             {t("phone")}
//                           </p>
//                           <p className="text-salon-text-medium">
//                             <a
//                               href="tel:+32477371071"
//                               className="hover:text-salon-pink transition-colors"
//                             >
//                               +32 477 37 10 71
//                             </a>
//                           </p>
//                         </div>
//                       </div>
//                       <div className="flex items-start space-x-3">
//                         <div className="h-8 w-8 rounded-full bg-salon-pink/20 flex items-center justify-center flex-shrink-0 mt-1">
//                           <svg
//                             className="h-4 w-4 text-salon-pink"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                             aria-hidden="true"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                             />
//                           </svg>
//                         </div>
//                         <div>
//                           <p className="font-medium text-salon-text-dark">
//                             {t("email")}
//                           </p>
//                           <p className="text-salon-text-medium">
//                             <a
//                               href="mailto:info@danahair.be"
//                               className="hover:text-salon-pink transition-colors"
//                             >
//                               info@danahair.be
//                             </a>
//                           </p>
//                         </div>
//                       </div>
//                     </address>
//                   </div>

//                   {/* Opening Hours */}
//                   <div>
//                     <h3 className="font-display font-semibold text-xl mb-6 text-salon-pink">
//                       {t("openingHours")}
//                     </h3>
//                     <dl className="space-y-3">
//                       <div className="flex justify-between items-center py-2 border-b border-salon-pink/20">
//                         <dt className="text-salon-text-medium">
//                           {t("monday")}
//                         </dt>
//                         <dd className="font-medium text-salon-text-dark">
//                           {t("closed")}
//                         </dd>
//                       </div>
//                       <div className="flex justify-between items-center py-2 border-b border-salon-pink/20">
//                         <dt className="text-salon-text-medium">
//                           {t("tuesday")}
//                         </dt>
//                         <dd className="font-medium text-salon-text-dark">
//                           {t("closed")}
//                         </dd>
//                       </div>
//                       <div className="flex justify-between items-center py-2 border-b border-salon-pink/20">
//                         <dt className="text-salon-text-medium">
//                           {t("wednesday")}
//                         </dt>
//                         <dd className="font-medium text-salon-text-dark">
//                           13:30 - 21:00
//                         </dd>
//                       </div>
//                       <div className="flex justify-between items-center py-2 border-b border-salon-pink/20">
//                         <dt className="text-salon-text-medium">
//                           {t("friday")}
//                         </dt>
//                         <dd className="font-medium text-salon-text-dark">
//                           9:00 - 18:00
//                         </dd>
//                       </div>
//                       <div className="flex justify-between items-center py-2 border-b border-salon-pink/20">
//                         <dt className="text-salon-text-medium">
//                           {t("saturday")}
//                         </dt>
//                         <dd className="font-medium text-salon-text-dark">
//                           9:00 - 16:00
//                         </dd>
//                       </div>
//                     </dl>
//                   </div>
//                 </div>
//               </div>

//               {/* Google Maps */}
//               <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6">
//                 <h3 className="font-display font-semibold text-xl mb-6 text-salon-pink">
//                   {t("findUs")}
//                 </h3>
//                 <div className="rounded-lg overflow-hidden h-80 bg-salon-cream/20">
//                   <iframe
//                     src="https://maps.google.com/maps?q=51.01490464198777,3.7532758684587&hl=en&z=15&output=embed"
//                     width="100%"
//                     height="100%"
//                     style={{ border: 0 }}
//                     allowFullScreen
//                     loading="lazy"
//                     title="D'Ana Hair Salon Location - Hundelgemsesteenweg 73, 9820 Merelbeke-Melle"
//                     aria-label="Interactive map showing D'Ana Hair Salon location"
//                   ></iframe>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Map & Directions */}
//         <section className="py-20 bg-white">
//           <div className="max-w-6xl mx-auto px-6">
//             <div className="text-center mb-16">
//               <h2 className="text-4xl md:text-5xl font-display font-bold text-salon-text-dark mb-6">
//                 {t("findUs")}
//               </h2>
//               <p className="text-xl text-salon-text-medium">
//                 {t("locationDesc")}
//               </p>
//             </div>

//             <div className="grid lg:grid-cols-2 gap-12 items-start">
//               {/* Map placeholder */}
//               <div className="bg-salon-off-white rounded-3xl p-8 text-center">
//                 <MapPin className="w-16 h-16 text-salon-pink mx-auto mb-6" />
//                 <h3 className="text-2xl font-display font-bold text-salon-text-dark mb-4">
//                   {t("interactiveMap")}
//                 </h3>
//                 <p className="text-salon-text-medium mb-6">
//                   {t("clickForDirections")}
//                 </p>
//                 <a
//                   href="https://maps.google.com/?q=Hundelgemsesteenweg+73,+9820+Merelbeke-Melle,+Belgium"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="btn-primary inline-flex items-center"
//                 >
//                   {t("viewOnGoogleMaps")}
//                   <ChevronRight size={20} className="ml-2" />
//                 </a>
//               </div>

//               {/* Directions & Parking */}
//               <div className="space-y-8">
//                 <div>
//                   <h3 className="text-2xl font-display font-bold text-salon-text-dark mb-4">
//                     {t("gettingHere")}
//                   </h3>
//                   <div className="space-y-4">
//                     <div className="flex items-start gap-3">
//                       <div className="w-2 h-2 bg-salon-pink rounded-full mt-3"></div>
//                       <p className="text-salon-text-medium">
//                         <strong>{t("fromGhent")}:</strong> {t("directionsFromGhent")}
//                       </p>
//                     </div>
//                     <div className="flex items-start gap-3">
//                       <div className="w-2 h-2 bg-salon-pink rounded-full mt-3"></div>
//                       <p className="text-salon-text-medium">
//                         <strong>{t("parking")}:</strong> {t("parkingInfo")}
//                       </p>
//                     </div>
//                     <div className="flex items-start gap-3">
//                       <div className="w-2 h-2 bg-salon-pink rounded-full mt-3"></div>
//                       <p className="text-salon-text-medium">
//                         <strong>{t("publicTransport")}:</strong> {t("publicTransportInfo")}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="bg-gradient-to-br from-salon-off-white to-salon-cream rounded-2xl p-6">
//                   <h4 className="text-lg font-display font-bold text-salon-text-dark mb-3">
//                     {t("servingTheseAreas")}
//                   </h4>
//                   <div className="grid grid-cols-2 gap-2">
//                     <span className="text-salon-text-medium">• Merelbeke</span>
//                     <span className="text-salon-text-medium">• Ghent</span>
//                     <span className="text-salon-text-medium">• Oudenaarde</span>
//                     <span className="text-salon-text-medium">• Melle</span>
//                     <span className="text-salon-text-medium">
//                       • Schellebelle
//                     </span>
//                     <span className="text-salon-text-medium">• Wetteren</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-20 bg-gradient-to-r from-salon-pink via-salon-rose to-salon-lavender text-white">
//           <div className="max-w-4xl mx-auto px-6 text-center">
//             <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
//               {t("readyToBookAppointment")}
//             </h2>
//             <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
//               {t("dontWaitToStart")}
//             </p>
//             <div className="flex flex-col sm:flex-row gap-6 justify-center">
//               <a
//                 href="tel:+32477371071"
//                 className="bg-white text-salon-pink px-8 py-4 rounded-full font-semibold hover:bg-salon-off-white transition-colors duration-200 inline-flex items-center justify-center text-lg shadow-lg"
//               >
//                 <Phone size={24} className="mr-2" />
//                 {t("callNow")}
//               </a>
//               <Link
//                 href={`/${lng}/services`}
//                 className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-salon-pink transition-colors duration-200 text-lg"
//               >
//                 {t("viewOurServices")}
//               </Link>
//             </div>
//           </div>
//         </section>

//         <Footer lng={lng} />
//       </div>
//     </>
//   );
// }
