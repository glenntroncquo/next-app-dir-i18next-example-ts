import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { getImageUrl } from "../../../lib/imageUrl";
import Image from "next/image";

interface FooterProps {
  lng: string;
}

const Footer = ({ lng }: FooterProps) => {
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
              Your expert in Brazilian keratin and hair botox treatments in
              Merelbeke. Service for Gent, Oudenaarde and surrounding areas.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/dana.hair.official/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-soft transition-all hover:shadow-glow-pink"
              >
                <Instagram size={18} className="text-salon-pink" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61573622190842"
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
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`/${lng}`}
                  className="text-salon-text-medium hover:text-salon-pink transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-salon-pink rounded-full mr-2"></span>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="text-salon-text-medium hover:text-salon-pink transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-salon-pink rounded-full mr-2"></span>
                  About
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-salon-text-medium hover:text-salon-pink transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-salon-pink rounded-full mr-2"></span>
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="text-salon-text-medium hover:text-salon-pink transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-salon-pink rounded-full mr-2"></span>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`/${lng}/services#keratine`}
                  className="text-salon-text-medium hover:text-salon-pink transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-salon-pink rounded-full mr-2"></span>
                  Keratine Behandeling
                </a>
              </li>
              <li>
                <a
                  href={`/${lng}/services#botox`}
                  className="text-salon-text-medium hover:text-salon-pink transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-salon-pink rounded-full mr-2"></span>
                  Botox Behandeling
                </a>
              </li>
              <li>
                <a
                  href={`/${lng}/services#ritual`}
                  className="text-salon-text-medium hover:text-salon-pink transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-salon-pink rounded-full mr-2"></span>
                  Ritual Nutrition – Nuance Brazil + LED-lichttherapie
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-6">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin
                  size={18}
                  className="text-salon-pink mt-1 mr-3 flex-shrink-0"
                />
                <a
                  href="https://maps.app.goo.gl/UAiPgsyJk6HVdq51A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-salon-text-medium hover:text-salon-pink transition-colors"
                >
                  Hundelgemsesteenweg 73, 9820 Merelbeke-Melle
                </a>
              </li>
              <li className="flex items-center">
                <Phone
                  size={18}
                  className="text-salon-pink mr-3 flex-shrink-0"
                />
                <a
                  href="tel:+32477371071"
                  className="text-salon-text-medium hover:text-salon-pink transition-colors"
                >
                  +32 477 37 10 71
                </a>
              </li>
              <li className="flex items-center">
                <Mail
                  size={18}
                  className="text-salon-pink mr-3 flex-shrink-0"
                />
                <a
                  href="mailto:info.danahair@gmail.com"
                  className="text-salon-text-medium hover:text-salon-pink transition-colors"
                >
                  info.danahair@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock
                  size={18}
                  className="text-salon-pink mt-1 mr-3 flex-shrink-0"
                />
                <div>
                  <p className="text-salon-text-medium">Ma-Di: Gesloten</p>
                  <p className="text-salon-text-medium">Wo: 13:30 - 21:00</p>
                  <p className="text-salon-text-medium">Do: 17:00 - 21:00</p>
                  <p className="text-salon-text-medium">Vr-Za: 09:00 - 17:00</p>
                  <p className="text-salon-text-medium">Zo: Gesloten</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-salon-pink/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-salon-text-medium text-sm">
              © {new Date().getFullYear()} D&apos;Ana Hair. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-sm text-salon-text-medium hover:text-salon-pink transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-salon-text-medium hover:text-salon-pink transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm text-salon-text-medium hover:text-salon-pink transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
