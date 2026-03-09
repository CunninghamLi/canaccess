import { useEffect, useRef, useState } from "react";

function Header({ lang, onLangChange }) {
  const isFr = lang === "fr";
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      // Ignore tiny scroll jitter to keep the header stable.
      if (Math.abs(delta) < 6) {
        return;
      }

      if (currentY <= 40) {
        setIsHidden(false);
      } else if (delta > 0) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const topLinks = [
    { label: isFr ? "Accueil" : "Home", href: "#home" },
    { label: isFr ? "À Propos" : "About", href: "#about" },
    { label: isFr ? "Forum" : "Forum", href: "#" },
    { label: isFr ? "Nouvelles" : "News", href: "#" },
    { label: isFr ? "Portail Client" : "Client Portal", href: "#" },
    { label: isFr ? "Contact" : "Contact", href: "#contact" },
    { label: "Advertise", href: "#" },
  ];

  const primaryLinks = [
    { label: isFr ? "Évaluation gratuite" : "Free Assessment", href: "#contact" },
    { label: isFr ? "Immigration" : "Immigrate", href: "#" },
    { label: isFr ? "Travail" : "Work", href: "#" },
    { label: isFr ? "Parrainage" : "Sponsor", href: "#" },
    { label: isFr ? "Études" : "Study", href: "#" },
    { label: isFr ? "Citoyenneté" : "Citizenship", href: "#" },
    { label: isFr ? "Inadmissibilité" : "Inadmissibility", href: "#" },
    { label: isFr ? "Aide légale" : "Legal Help", href: "#" },
    { label: isFr ? "Entreprise" : "Business", href: "#" },
    { label: isFr ? "Vie au Canada" : "Life in Canada", href: "#" },
  ];

  return (
    <header className={`header ${isHidden ? "header-hidden" : "header-visible"}`}>
      <div className="header-top">
        <div className="container header-top-content">
          <nav className="top-nav" aria-label={isFr ? "Navigation secondaire" : "Secondary navigation"}>
            {topLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header-top-actions">
            <div className="lang-switch" role="group" aria-label="Language switch">
              <button
                type="button"
                className={`lang-option ${isFr ? "active" : ""}`}
                onClick={() => onLangChange("fr")}
                aria-pressed={isFr}
              >
                FR
              </button>
              <button
                type="button"
                className={`lang-option ${!isFr ? "active" : ""}`}
                onClick={() => onLangChange("en")}
                aria-pressed={!isFr}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="container header-main-content">
          <a className="logo" href="#home">
            <img
              src="/logo_noir.png"
              alt={
                isFr
                  ? "Cabinet d'immigration Can Access"
                  : "Can Access Immigration Firm"
              }
              className="logo-image"
            />
          </a>

          <nav className="main-nav" aria-label={isFr ? "Navigation principale" : "Main navigation"}>
            {primaryLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;