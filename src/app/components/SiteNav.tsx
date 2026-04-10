"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

const isActivePath = (pathname: string, href: string) => {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
};

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="nav" aria-label="Primary">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={isActivePath(pathname, item.href) ? "is-active" : undefined}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
