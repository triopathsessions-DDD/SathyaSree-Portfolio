import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-charcoal/10 bg-transparent backdrop-blur-md dark:border-cream/10 dark:bg-transparent"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10 lg:h-20 bg-transparent">
        {/* Brand - Left */}
        <Link
          to="/"
          className="rounded-[20px] border border-black p-2 font-display text-lg font-semibold tracking-tight text-charcoal transition-all duration-300 hover:p-[7px] hover:text-wine dark:border-white dark:text-cream dark:hover:text-terracotta md:text-xl"
        >
          {profile.logotitle}
        </Link>

        {/* Right side - Navigation + Theme */}
        <div className="flex items-center gap-4">
          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 ${
                    isActive
                      ? "text-wine dark:text-terracotta"
                      : "text-charcoal/70 hover:text-charcoal dark:text-cream/60 dark:hover:text-cream"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-4 right-4 h-px origin-left bg-wine transition-transform duration-300 dark:bg-terracotta ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop-only Contact Button */}
          <Link to="/contact" className="hidden lg:inline-block">
            <button className="rounded-md bg-wine px-4 py-1 text-sm font-medium text-white border border-transparent transition-colors duration-300 hover:bg-transparent hover:border-black/40 hover:text-charcoal dark:bg-terracotta dark:hover:bg-transparent dark:hover:border-cream/80 dark:hover:text-cream/60">
              Contact
            </button>
          </Link>

          {/* Theme toggle */}
          <ThemeToggle />

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-charcoal/15 text-charcoal transition-colors hover:border-wine hover:text-wine dark:border-cream/20 dark:text-cream dark:hover:border-terracotta dark:hover:text-terracotta lg:hidden"
          >
            {mobileOpen ? (
              <X size={16} strokeWidth={1.5} />
            ) : (
              <Menu size={16} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      <div
        className={`overflow-hidden border-t border-charcoal/10 bg-ivory/95 backdrop-blur-md transition-all duration-500 dark:border-cream/10 dark:bg-charcoal-deep/95 lg:hidden ${
          mobileOpen ? "max-h-[550px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-6">
          {navLinks.map((link, idx) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              style={{ animationDelay: `${idx * 50}ms` }}
              className={({ isActive }) =>
                `border-l-2 px-4 py-3 font-display text-xl transition-all duration-300 ${
                  isActive
                    ? "border-wine text-wine dark:border-terracotta dark:text-terracotta"
                    : "border-transparent text-charcoal/70 hover:border-wine/50 hover:text-charcoal dark:text-cream/60 dark:hover:border-terracotta/50 dark:hover:text-cream"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          {/* Mobile Menu Contact Button */}
          <div className="mt-4 pt-2">
            <Link to="/contact" className="block w-full">
              <button className="w-full rounded-lg bg-wine py-3 text-center text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 hover:bg-wine-deep dark:bg-terracotta dark:text-charcoal-deep">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}