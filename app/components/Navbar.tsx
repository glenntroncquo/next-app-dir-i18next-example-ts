"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { getImageUrl } from "../../lib/imageUrl";
import Image from "next/image";
import { ROUTES } from "../../lib/site";

const LINKS = [
  { href: ROUTES.home, label: "Home", match: (p: string) => p === "/" },
  {
    href: ROUTES.overOns,
    label: "Over ons",
    match: (p: string) => p.startsWith("/over-ons"),
  },
  {
    href: ROUTES.diensten,
    label: "Diensten",
    match: (p: string) => p.startsWith("/diensten"),
  },
  {
    href: ROUTES.contact,
    label: "Contact",
    match: (p: string) => p.startsWith("/contact"),
  },
];

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        isScrolled
          ? "border-stone/50 bg-cream/95"
          : "border-transparent bg-cream"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href={ROUTES.home} className="relative z-10 flex items-center">
          <Image
            src={getImageUrl("/logo.svg")}
            alt="D'Ana Hair logo"
            className="hidden h-14 w-36 lg:block"
            width={160}
            height={56}
            priority
          />
          <Image
            src={getImageUrl("/logo-no-text.svg")}
            alt="D'Ana Hair logo"
            className="h-12 w-12 lg:hidden"
            width={48}
            height={48}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => {
            const active = link.match(pathname);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`highlight-link text-[0.68rem] uppercase tracking-[0.22em] ${
                  active ? "text-ink" : "text-ink/70 hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link href={ROUTES.afspraak} className="btn-outline">
            Afspraak
          </Link>
        </div>

        <button
          className="border border-ink p-2 text-ink md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Menu sluiten" : "Menu openen"}
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div
        className={`border-t border-stone/40 bg-cream md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-6">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-3 text-[0.7rem] uppercase tracking-[0.2em] ${
                link.match(pathname) ? "text-ink" : "text-ink/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href={ROUTES.afspraak} className="btn-outline mt-4 w-full">
            Afspraak
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
