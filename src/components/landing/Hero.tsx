"use client";

import Link from "next/link";
import flag from "@/assets/flag.webp";

export default function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-center bg-no-repeat py-5 sm:py-7"
      style={{
        backgroundImage: `url("${flag.src}")`,
        backgroundSize: "100% 360%",
      }}
    >
      <div className="absolute inset-0 z-0 bg-black/10" />

      <div className="dark-surface relative z-10 mx-auto max-w-7xl bg-[var(--color-base)] px-6 py-10 text-white shadow-2xl shadow-black/30 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-teal-200">
            Nigeria’s Health Supply Chain
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Stronger supply chains. Healthier communities.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Practical learning and trusted resources for health workers across Nigeria.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/learner"
              className="inline-flex items-center justify-center rounded-md bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            >
              Explore learning
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/library"
              className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Browse the e-library
            </Link>
          </div>

          <div className="mt-9 grid grid-cols-3 gap-4 border-t border-white/10 pt-6 sm:max-w-2xl sm:gap-8">
            <div>
              <p className="text-xl font-semibold text-white sm:text-2xl">12,400+</p>
              <p className="mt-1 text-xs text-slate-400 sm:text-sm">Workers targeted</p>
            </div>
            <div>
              <p className="text-xl font-semibold text-white sm:text-2xl">36 + FCT</p>
              <p className="mt-1 text-xs text-slate-400 sm:text-sm">National reach</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-white sm:text-2xl">March 2027</p>
              <p className="mt-1 text-xs text-slate-400 sm:text-sm">Government ownership</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
