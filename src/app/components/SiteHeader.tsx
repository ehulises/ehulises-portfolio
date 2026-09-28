"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/work", label: "Work" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/resume", label: "Resume" },
];

const isActivePath = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

export default function SiteHeader() {
  const pathname = usePathname();
  // Tracks the path the menu was opened on, so navigating closes it without an effect.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const close = () => setOpenOn(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenOn(null);
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.classList.add("menu-open");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("menu-open");
    };
  }, [open]);

  const linkProps = (href: string) => ({
    href,
    "aria-current": isActivePath(pathname, href) ? ("page" as const) : undefined,
  });

  return (
    <header className="site-header" data-open={open ? "" : undefined}>
      <div className="container site-header__inner">
        <Link href="/" className="brand" onClick={close}>
          Ehulises Rodriguez
        </Link>

        <nav className="nav" aria-label="Primary">
          <ul className="nav__list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className="nav__link" {...linkProps(item.href)}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="nav__cta" {...linkProps("/contact")}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpenOn(open ? null : pathname)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="nav-toggle__bar" aria-hidden="true" />
          <span className="nav-toggle__bar" aria-hidden="true" />
        </button>
      </div>

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <nav aria-label="Mobile">
          <ul className="container mobile-menu__list">
            {[{ href: "/", label: "Home" }, ...navItems, { href: "/contact", label: "Contact" }].map(
              (item) => (
                <li key={item.href}>
                  <Link className="mobile-menu__link" onClick={close} {...linkProps(item.href)}>
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
