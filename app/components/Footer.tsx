"use client";

import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { getImageUrl } from "../../lib/imageUrl";
import Image from "next/image";
import Link from "next/link";
import { NAP, ROUTES, WEEKDAY_HOURS, fullAddress } from "../../lib/site";

const Footer = () => {
  return (
    <footer className="bg-salon-softer-pink pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Image
                src={getImageUrl("/logo.svg")}
                alt="D'Ana Hair"
                className="w-[200px]"
                width={200}
                height={60}
                priority
              />
            </div>
            <p className="text-salon-text-medium mb-6">
              Jouw specialist in Braziliaanse keratine- en haarbotoxbehandelingen
              in Merelbeke. Ongeveer 15 minuten van Gent.
            </p>
            <div className="flex space-x-4">
              <a
                href={NAP.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-soft transition-all hover:shadow-glow-pink"
              >
                <Instagram size={18} className="text-salon-pink" />
              </a>
              <a
                href={NAP.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-soft transition-all hover:shadow-glow-pink"
              >
                <Facebook size={18} className="text-salon-pink" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-6">
              Snelle links
            </h3>
            <ul className="space-y-3">
              {[
                { href: ROUTES.home, label: "Home" },
                { href: ROUTES.overOns, label: "Over ons" },
                { href: ROUTES.diensten, label: "Diensten" },
                { href: ROUTES.contact, label: "Contact" },
                { href: ROUTES.afspraak, label: "Afspraak maken" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-salon-text-medium hover:text-salon-pink transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-salon-pink rounded-full mr-2"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-6">
              Diensten
            </h3>
            <ul className="space-y-3">
              {[
                { href: ROUTES.keratine, label: "Keratinebehandeling" },
                { href: ROUTES.haarbotox, label: "Haarbotox" },
                { href: ROUTES.ritual, label: "Ritual Nutrition + LED" },
                { href: ROUTES.kleuren, label: "Kleuren" },
                { href: ROUTES.diensten, label: "Alle diensten" },
                {
                  href: ROUTES.keratineMerelbeke,
                  label: "Keratine in Merelbeke",
                },
                { href: ROUTES.keratineGent, label: "Keratine nabij Gent" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-salon-text-medium hover:text-salon-pink transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-salon-pink rounded-full mr-2"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-6">
              Contactgegevens
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin
                  size={18}
                  className="text-salon-pink mt-1 mr-3 flex-shrink-0"
                />
                <a
                  href={NAP.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-salon-text-medium hover:text-salon-pink transition-colors"
                >
                  {fullAddress()}
                </a>
              </li>
              <li className="flex items-center">
                <Phone
                  size={18}
                  className="text-salon-pink mr-3 flex-shrink-0"
                />
                <a
                  href={`tel:${NAP.telephoneHref}`}
                  className="text-salon-text-medium hover:text-salon-pink transition-colors"
                >
                  {NAP.telephone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail
                  size={18}
                  className="text-salon-pink mr-3 flex-shrink-0"
                />
                <a
                  href={`mailto:${NAP.email}`}
                  className="text-salon-text-medium hover:text-salon-pink transition-colors"
                >
                  {NAP.email}
                </a>
              </li>
              <li className="flex items-start">
                <Clock
                  size={18}
                  className="text-salon-pink mt-1 mr-3 flex-shrink-0"
                />
                <div>
                  {WEEKDAY_HOURS.map((row) => (
                    <p key={row.labelNl} className="text-salon-text-medium">
                      {row.labelNl}: {row.display}
                    </p>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-salon-pink/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <p className="text-salon-text-medium text-sm">
                © {new Date().getFullYear()} D&apos;Ana Hair. Alle rechten
                voorbehouden.
              </p>
              <p className="text-salon-text-medium text-sm mt-1">
                BTW: {NAP.vat}
              </p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href={ROUTES.privacy}
                className="text-sm text-salon-text-medium hover:text-salon-pink transition-colors"
              >
                Privacybeleid
              </Link>
              <Link
                href={ROUTES.voorwaarden}
                className="text-sm text-salon-text-medium hover:text-salon-pink transition-colors"
              >
                Algemene voorwaarden
              </Link>
              <Link
                href={ROUTES.cookies}
                className="text-sm text-salon-text-medium hover:text-salon-pink transition-colors"
              >
                Cookiebeleid
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
