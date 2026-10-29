
import { useState } from "react";
import { Link } from "react-router-dom";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Academics", to: "/academics" },
    { label: "Facilities", to: "/facilities" },
    { label: "Faculty", to: "/faculty" },
    { label: "Gallery", to: "/gallery" },
    { label: "Admission", to: "/admission" },
  ];

  return (
    <header className="sticky top-0 z-50">
      <nav className="border-b border-white/10 bg-navy text-white shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* School branding */}
          <Link to="/" className="flex min-w-0 items-center gap-3">
           <img
  src="/school-logo.png"
  alt="Maharishi Convent HR Sec School logo"
  className="size-12 shrink-0 rounded-full bg-white object-contain p-0.5"
/>

            <div className="min-w-0">
              <h1 className="truncate text-base font-bold leading-tight sm:text-lg">
                Maharishi Convent
              </h1>
              <p className="mt-1 text-[10px] font-semibold tracking-[0.18em] text-gold sm:text-xs">
                HR SEC SCHOOL
              </p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-5 lg:flex xl:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="whitespace-nowrap text-sm font-medium text-slate-200 transition hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              onClick={() =>
                setLanguage((current) => (current === "EN" ? "HI" : "EN"))
              }
              className="rounded-lg border border-white/20 px-3 py-2 text-xs font-semibold transition hover:border-gold hover:text-gold"
              aria-label="Switch language"
            >
              {language === "EN" ? "हिंदी" : "English"}
            </button>

            <a
              href="#contact"
              className="whitespace-nowrap rounded-lg bg-gold px-4 py-2.5 text-sm font-bold text-navy transition hover:bg-amber-300"
            >
              Contact Us
            </a>

            <Link
  to="/login"
  className="rounded-lg border-2 border-gold px-5 py-2 font-semibold text-white transition hover:bg-gold hover:text-navy"
>
  Login
</Link>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() =>
                setLanguage((current) => (current === "EN" ? "HI" : "EN"))
              }
              className="rounded-lg border border-white/20 px-2.5 py-2 text-xs font-semibold text-gold"
              aria-label="Switch language"
            >
              {language === "EN" ? "हिंदी" : "EN"}
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="flex size-10 items-center justify-center rounded-lg border border-white/20 transition hover:border-gold hover:text-gold"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg
                  viewBox="0 0 24 24"
                  className="size-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  className="size-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#10233D] px-4 pb-5 pt-3 lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-white/10 py-3 text-sm font-medium text-slate-200 transition hover:pl-2 hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 rounded-lg bg-gold px-4 py-3 text-center text-sm font-bold text-navy transition hover:bg-amber-300"
              >
                Contact Us
              </a>
              <Link
  to="/login"
  onClick={() => setMenuOpen(false)}
  className="mt-3 rounded-lg border-2 border-gold px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-gold hover:text-navy"
>
  Login
</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
