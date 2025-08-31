"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { getImageUrl } from "../../../lib/imageUrl";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavbarProps {
  lng: string;
}

const Navbar = ({ lng }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (window.scrollY > 50) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) => {
    return pathname.includes(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm supports-[backdrop-filter]:bg-white/80"
          : "bg-transparent"
      }`}
      style={{
        WebkitBackdropFilter: isScrolled ? "blur(12px)" : "none",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        willChange: "backdrop-filter, background-color",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          <a href={`/${lng}`} className="flex items-center space-x-2 group">
            <img
              src={getImageUrl("/logo.svg")}
              alt="D'Ana Hair logo"
              className="w-40 h-20 absolute hidden lg:block"
            />
            <img
              src={getImageUrl("/logo-no-text.svg")}
              alt="D'Ana Hair logo"
              className="w-14 h-14 absolute lg:hidden"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/#home"
              className={`highlight-link font-medium ${
                isActive("/")
                  ? "text-salon-pink"
                  : "text-salon-text-dark hover:text-salon-text-medium transition-colors"
              }`}
            >
              Home
            </a>
            <a
              href={`/${lng}/wie-is-wie`}
              className={`highlight-link font-medium ${
                isActive("/wie-is-wie")
                  ? "text-salon-pink"
                  : "text-salon-text-dark hover:text-salon-text-medium transition-colors"
              }`}
            >
              About
            </a>
            <a
              href="/#services"
              className={`highlight-link font-medium ${
                isActive("/services")
                  ? "text-salon-pink"
                  : "text-salon-text-dark hover:text-salon-text-medium transition-colors"
              }`}
            >
              Services
            </a>
            <a
              href="/#contact"
              className={`highlight-link font-medium ${
                isActive("/contact")
                  ? "text-salon-pink"
                  : "text-salon-text-dark hover:text-salon-text-medium transition-colors"
              }`}
            >
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher currentLng={lng} />
            <a
              href={`/${lng}/appointment`}
              className="btn-primary"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher currentLng={lng} />
            <button
              className="p-2 rounded-full bg-white/80 shadow-soft"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-x-0 bg-white/90 backdrop-blur-sm shadow-soft transition-all duration-300 ease-bounce-soft ${
          isMenuOpen
            ? "-translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
        style={{
          top: "70px",
          zIndex: 40,
        }}
      >
        <nav className="flex flex-col space-y-3 p-6 w-full">
          <a
            href="/#home"
            className={`py-2 px-4 rounded-lg ${
              isActive("/") ? "text-salon-text-dark" : "text-salon-text-dark "
            }`}
          >
            Home
          </a>
          <a
            href={`/${lng}/wie-is-wie`}
            className={`py-2 px-4 rounded-lg ${
              isActive("/about")
                ? "bg-salon-softer-pink text-salon-pink"
                : "text-salon-text-dark"
            }`}
          >
            About
          </a>
          <a
            href="/#services"
            className={`py-2 px-4 rounded-lg ${
              isActive("/services")
                ? "bg-salon-softer-pink text-salon-pink"
                : "text-salon-text-dark"
            }`}
          >
            Services
          </a>
          <a
            href="/#contact"
            className={`py-2 px-4 rounded-lg ${
              isActive("/contact")
                ? "bg-salon-softer-pink text-salon-pink"
                : "text-salon-text-dark"
            }`}
          >
            Contact
          </a>
          <a
            href={`/${lng}/appointment`}
            className="btn-primary mt-2 w-full"
          >
            Book Appointment
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;