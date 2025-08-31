"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { languages } from "../../i18n/settings";

type Language = "nl" | "en" | "fr" | "pt";

interface LanguageConfig {
  code: Language;
  name: string;
  flag: string;
}

const LanguageSwitcher = ({ currentLng }: { currentLng: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const languageConfigs: LanguageConfig[] = [
    { code: "nl", name: "Nederlands", flag: "🇳🇱" },
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "pt", name: "Português", flag: "🇧🇷" },
  ];

  const currentLanguage = languageConfigs.find(
    (lang) => lang.code === currentLng
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lang: Language) => {
    const newPathname = pathname.replace(`/${currentLng}`, `/${lang}`);
    router.push(newPathname);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/70 backdrop-blur-sm shadow-soft transition-all duration-300 hover:shadow-md"
        aria-label="Change Language"
      >
        <span className="font-medium text-sm">
          {currentLanguage?.flag} {currentLanguage?.code.toUpperCase()}
        </span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute mt-2 right-0 w-40 bg-white/90 backdrop-blur-md rounded-lg shadow-soft z-50">
            <ul className="py-2">
              {languageConfigs.map((lang) => (
                <li key={lang.code}>
                  <button
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full text-left px-4 py-2 hover:bg-salon-softer-pink flex items-center gap-2 ${
                      currentLng === lang.code
                        ? "bg-salon-softer-pink text-salon-pink"
                        : "text-salon-text-dark"
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;