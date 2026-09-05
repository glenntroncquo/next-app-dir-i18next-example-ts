"use client";

import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { getImageUrl } from "../../lib/imageUrl";
import Image from "next/image";
import Link from "next/link";
import { NAP, ROUTES, WEEKDAY_HOURS, fullAddress } from "../../lib/site";

const Footer = () => {
  return (
    <footer className="border-t border-stone/40 bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src={getImageUrl("/logo.svg")}
              alt="D'Ana Hair"
              className="mb-6 w-[180px] brightness-0 invert"
              width={180}
              height={54}
            />
            <p className="mb-6 text-sm leading-relaxed text-cream/70">
              Specialist in Braziliaanse keratine- en haarbotoxbehandelingen in
              Merelbeke. Ongeveer 15 minuten van Gent.
            </p>
            <div className="flex gap-3">
              <a
                href={NAP.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-stone/50 p-2 text-cream hover:border-cream"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href={NAP.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-stone/50 p-2 text-cream hover:border-cream"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="eyebrow mb-6 text-stone">Navigatie</h3>
            <ul className="space-y-3 text-sm">
              {[
                { href: ROUTES.home, label: "Home" },
                { href: ROUTES.overOns, label: "Over ons" },
                { href: ROUTES.diensten, label: "Diensten" },
                { href: ROUTES.contact, label: "Contact" },
                { href: ROUTES.afspraak, label: "Afspraak maken" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-cream/75 hover:text-cream">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-6 text-stone">Diensten</h3>
            <ul className="space-y-3 text-sm">
              {[
                { href: ROUTES.keratine, label: "Keratinebehandeling" },
                { href: ROUTES.haarbotox, label: "Haarbotox" },
                { href: ROUTES.ritual, label: "Ritual Nutrition + LED" },
                { href: ROUTES.diensten, label: "Alle diensten" },
                { href: ROUTES.keratineMerelbeke, label: "Keratine in Merelbeke" },
                { href: ROUTES.keratineGent, label: "Keratine nabij Gent" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-cream/75 hover:text-cream">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-6 text-stone">Contact</h3>
            <ul className="space-y-4 text-sm text-cream/75">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-stone" />
                <a href={NAP.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cream">
                  {fullAddress()}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-stone" />
                <a href={`tel:${NAP.telephoneHref}`} className="hover:text-cream">
                  {NAP.telephone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-stone" />
                <a href={`mailto:${NAP.email}`} className="hover:text-cream">
                  {NAP.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="mt-0.5 shrink-0 text-stone" />
                <div>
                  {WEEKDAY_HOURS.map((row) => (
                    <p key={row.labelNl}>
                      {row.labelNl}: {row.display}
                    </p>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-stone/30 pt-8 text-xs text-cream/55 md:flex-row">
          <div>
            <p>© {new Date().getFullYear()} D&apos;Ana Hair. Alle rechten voorbehouden.</p>
            <p className="mt-1">BTW: {NAP.vat}</p>
          </div>
          <div className="flex gap-6 uppercase tracking-[0.16em]">
            <Link href={ROUTES.privacy} className="hover:text-cream">
              Privacy
            </Link>
            <Link href={ROUTES.voorwaarden} className="hover:text-cream">
              Voorwaarden
            </Link>
            <Link href={ROUTES.cookies} className="hover:text-cream">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
