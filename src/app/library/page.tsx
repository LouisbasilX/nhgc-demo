"use client";

import Navbar from "@/components/layout/Navbar";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import Footer from "@/components/layout/Footer";
import { useState } from "react";
import { useToast } from "@/components/ui/Toast";

const resources = [
  {
    title: "National Cold Chain Standard Operating Procedures",
    type: "SOP",
    category: "Cold Chain",
    updated: "Sep 2025",
    pages: 48,
  },
  {
    title: "Procurement Guidelines for Essential Medicines",
    type: "Guideline",
    category: "Procurement",
    updated: "Jul 2025",
    pages: 62,
  },
  {
    title: "Inventory Management Training Manual — LMIS",
    type: "Manual",
    category: "Inventory",
    updated: "Aug 2025",
    pages: 95,
  },
  {
    title: "Vaccine Logistics Assessment Tool (vLAT)",
    type: "Tool",
    category: "Cold Chain",
    updated: "Jun 2025",
    pages: 12,
  },
  {
    title: "2024 National Supply Chain Performance Report",
    type: "Report",
    category: "Analytics",
    updated: "Mar 2025",
    pages: 78,
  },
  {
    title: "Last-Mile Delivery Protocols for Health Commodities",
    type: "SOP",
    category: "Distribution",
    updated: "Oct 2025",
    pages: 34,
  },
];

const filters = ["All", "SOP", "Guideline", "Manual", "Tool", "Report"];

export default function LibraryPage() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");
  const { toast } = useToast();

  const filtered = resources.filter((r) => {
    const matchType = active === "All" || r.type === active;
    const matchQuery =
      !query ||
      r.title.toLowerCase().includes(query.toLowerCase()) ||
      r.category.toLowerCase().includes(query.toLowerCase());
    return matchType && matchQuery;
  });

  return (
    <>
      <Navbar />
      <main className="flex-1 pb-20 md:pb-0 bg-[var(--color-surface)]">
        <div className="bg-[var(--color-base)] text-white dark-surface">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
            <p className="text-sm font-medium text-[var(--color-accent)] mb-2">Digital E-Library</p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Knowledge Repository
            </h1>
            <p className="mt-2 text-slate-300 max-w-xl">
              Instant search across SOPs, guidelines, manuals, tools, and national reports.
            </p>

            {/* Search */}
            <div className="mt-8 max-w-2xl">
              <div className="relative">
                <svg
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search SOPs, guidelines, manuals..."
                  className="w-full rounded-lg border-0 bg-white/10 py-3.5 pl-11 pr-4 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-[var(--color-accent)] focus:outline-none backdrop-blur-sm"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  active === f
                    ? "bg-[var(--color-base)] text-white"
                    : "bg-white border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-slate-300"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Results */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((r) => (
              <article
                key={r.title}
                className="rounded-xl border border-[var(--color-border)] bg-white p-5 shadow-sm card-lift flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="rounded bg-[var(--color-accent-soft)] px-2 py-0.5 text-xs font-semibold text-[var(--color-accent)]">
                    {r.type}
                  </span>
                  <span className="text-xs text-[var(--color-muted)]">{r.category}</span>
                </div>
                <h3 className="font-semibold text-[var(--color-text-primary)] leading-snug flex-1">
                  {r.title}
                </h3>
                <div className="mt-4 flex items-center justify-between text-xs text-[var(--color-muted)]">
                  <span>Updated {r.updated}</span>
                  <span>{r.pages} pages</span>
                </div>
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => toast(`Preview opened: ${r.title}`, "info")}
                    className="flex-1 rounded-md border border-[var(--color-border)] py-2 text-sm font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-surface)] transition-colors"
                  >
                    Preview
                  </button>
                  <button
                    onClick={() => toast(`Secure download initiated for ${r.title}. Access logged.`, "success")}
                    className="flex-1 rounded-md bg-[var(--color-base)] py-2 text-sm font-semibold text-white hover:bg-[var(--color-base-light)] transition-colors"
                  >
                    Download
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-[var(--color-muted)] py-12">No resources match your filters.</p>
          )}
        </div>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
