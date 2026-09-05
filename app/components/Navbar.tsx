"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { getImageUrl } from "../../lib/imageUrl";
import Image from "next/image";
import { ROUTES } from "../../lib/site";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
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

  const isHome = pathname === "/";
  const isOverOns = pathname.startsWith("/over-ons");
  const isDiensten = pathname.startsWith("/diensten");
  const isContact = pathname.startsWith("/contact");

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
          <Link href={ROUTES.home} className="flex items-center space-x-2 group">
            <Image
              src={getImageUrl("/logo.svg")}
              alt="D'Ana Hair logo"
              className="w-40 h-20 absolute hidden lg:block"
              width={160}
              height={80}
              priority
            />
            <Image
              src={getImageUrl("/logo-no-text.svg")}
              alt="D'Ana Hair logo"
              className="w-14 h-14 absolute lg:hidden"
              width={56}
              height={56}
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href={ROUTES.home}
              className={`highlight-link font-medium cursor-pointer ${
                isHome
                  ? "text-salon-pink"
                  : "text-salon-text-dark hover:text-salon-text-medium transition-colors"
              }`}
            >
              Home
            </Link>
            <Link
              href={ROUTES.overOns}
              className={`highlight-link font-medium ${
                isOverOns
                  ? "text-salon-pink"
                  : "text-salon-text-dark hover:text-salon-text-medium transition-colors"
              }`}
            >
              Over ons
            </Link>
            <Link
              href={ROUTES.diensten}
              className={`highlight-link font-medium cursor-pointer ${
                isDiensten
                  ? "text-salon-pink"
                  : "text-salon-text-dark hover:text-salon-text-medium transition-colors"
              }`}
            >
              Diensten
            </Link>
            <Link
              href={ROUTES.contact}
              className={`highlight-link font-medium cursor-pointer ${
                isContact
                  ? "text-salon-pink"
                  : "text-salon-text-dark hover:text-salon-text-medium transition-colors"
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link href={ROUTES.afspraak} className="btn-primary">
              Afspraak maken
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button
              className="p-2 rounded-full bg-white/80 shadow-soft"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Menu sluiten" : "Menu openen"}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

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
          <Link
            href={ROUTES.home}
            className={`py-2 px-4 rounded-lg cursor-pointer ${
              isHome
                ? "bg-salon-softer-pink text-salon-pink"
                : "text-salon-text-dark"
            }`}
          >
            Home
          </Link>
          <Link
            href={ROUTES.overOns}
            className={`py-2 px-4 rounded-lg ${
              isOverOns
                ? "bg-salon-softer-pink text-salon-pink"
                : "text-salon-text-dark"
            }`}
          >
            Over ons
          </Link>
          <Link
            href={ROUTES.diensten}
            className={`py-2 px-4 rounded-lg cursor-pointer ${
              isDiensten
                ? "bg-salon-softer-pink text-salon-pink"
                : "text-salon-text-dark"
            }`}
          >
            Diensten
          </Link>
          <Link
            href={ROUTES.contact}
            className={`py-2 px-4 rounded-lg cursor-pointer ${
              isContact
                ? "bg-salon-softer-pink text-salon-pink"
                : "text-salon-text-dark"
            }`}
          >
            Contact
          </Link>
          <Link href={ROUTES.afspraak} className="btn-primary mt-2 w-full">
            Afspraak maken
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
