"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const servicesLinks = [
  { label: "DevOps Consulting", href: "/services/devops-consulting" },
  { label: "Managed Kubernetes", href: "/services/kubernetes" },
  { label: "Cloud Migration", href: "/services/cloud-migration" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on route-like interactions
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-dark-teal">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              src="/images/logo-white-wordmark.svg"
              alt="Moonswitch"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {/* Services dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-light text-white transition-colors hover:text-gray-300"
              >
                Services
                <svg
                  className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesOpen && (
                <div className="absolute left-0 top-full w-56 pt-2">
                  <div className="rounded-md bg-dark-teal/95 py-2 shadow-lg ring-1 ring-black/10 backdrop-blur-sm">
                    {servicesLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 text-sm font-light text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="text-sm font-light text-white transition-colors hover:text-gray-300"
            >
              About
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-white/10 bg-dark-teal md:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-4 pb-4 pt-2">
            <p className="px-2 pt-2 text-xs font-medium uppercase tracking-wider text-white/60">
              Services
            </p>
            {servicesLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-md px-2 py-2 text-sm font-light text-white hover:bg-white/10"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/about"
              className="block rounded-md px-2 py-2 text-sm font-light text-white hover:bg-white/10"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
