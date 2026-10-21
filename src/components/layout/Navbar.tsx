"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useToast } from "@/components/ui/Toast";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/learner", label: "Learner Portal" },
  { href: "/library", label: "E-Library" },
  { href: "/admin", label: "Command Center" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-base)]/95 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[var(--color-accent)] text-white font-bold text-sm tracking-tight">
              NH
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-white leading-tight group-hover:text-[var(--color-accent-soft)] transition-colors">
                National Health Supply Chain
              </p>
              <p className="text-[11px] text-slate-400 tracking-wide">
                Digital Knowledge Platform
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                    active
                      ? "bg-white/10 text-white"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() =>
                toast("Secure authentication simulated. SSO / Government ID login would open here.", "info")
              }
              className="hidden sm:inline-flex items-center rounded-md bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[var(--color-accent-hover)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            >
              Sign In
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-300 hover:bg-white/10 hover:text-white"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden border-t border-white/10 py-3 space-y-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-2.5 rounded-md text-sm font-medium ${
                    active ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <button
              onClick={() => {
                setOpen(false);
                toast("Secure authentication simulated. SSO / Government ID login would open here.", "info");
              }}
              className="w-full mt-2 rounded-md bg-[var(--color-accent)] px-3 py-2.5 text-sm font-semibold text-white"
            >
              Sign In
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
