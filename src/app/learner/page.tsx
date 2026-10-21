"use client";

import Navbar from "@/components/layout/Navbar";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { useToast } from "@/components/ui/Toast";

const pathways = [
  {
    title: "Cold Chain Management",
    progress: 68,
    modules: 12,
    completed: 8,
    status: "In Progress",
  },
  {
    title: "Supply Chain Procurement",
    progress: 42,
    modules: 10,
    completed: 4,
    status: "In Progress",
  },
  {
    title: "Inventory Control",
    progress: 100,
    modules: 8,
    completed: 8,
    status: "Completed",
  },
  {
    title: "Last-Mile Distribution",
    progress: 15,
    modules: 9,
    completed: 1,
    status: "Not Started",
  },
];

export default function LearnerPortal() {
  const { toast } = useToast();

  return (
    <>
      <Navbar />
      <main className="flex-1 pb-20 md:pb-0 bg-[var(--color-surface)]">
        {/* Header */}
        <div className="bg-[var(--color-base)] text-white dark-surface">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <p className="text-sm font-medium text-[var(--color-accent)] mb-2">Learner Portal</p>
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  My Learning Pathways
                </h1>
                <p className="mt-2 text-slate-300 max-w-xl">
                  Role-based training tracks tailored for health workers and field officers.
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => toast("Certificate vault opened. 1 verifiable certificate available for download.", "success")}
                  className="rounded-md border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
                >
                  Certificates
                </button>
                <button
                  onClick={() => toast("Continue last module: Cold Chain — Temperature Monitoring Protocols.", "info")}
                  className="rounded-md bg-[var(--color-accent)] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-accent-hover)] transition-colors"
                >
                  Continue Learning
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          {/* Quick continue card */}
          <div className="mb-10 rounded-xl border border-[var(--color-border)] bg-white p-5 md:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">Continue</p>
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                  Cold Chain — Temperature Monitoring
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">Module 9 of 12 · 14 min remaining</p>
              </div>
            </div>
            <button
              onClick={() => toast("Interactive course player launched (H5P + video simulation).", "success")}
              className="shrink-0 rounded-md bg-[var(--color-base)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-base-light)] transition-colors"
            >
              Resume Module
            </button>
          </div>

          {/* Pathways grid */}
          <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-6">Your Pathways</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {pathways.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-[var(--color-border)] bg-white p-5 shadow-sm card-lift"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-[var(--color-text-primary)]">{p.title}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)] mt-0.5">
                      {p.completed}/{p.modules} modules completed
                    </p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      p.status === "Completed"
                        ? "bg-emerald-50 text-emerald-700"
                        : p.status === "In Progress"
                        ? "bg-teal-50 text-teal-700"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {p.status}
                  </span>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-[var(--color-muted)] mb-1.5">
                    <span>Progress</span>
                    <span>{p.progress}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[var(--color-accent)] transition-all"
                      style={{ width: `${p.progress}%` }}
                    />
                  </div>
                </div>
                <button
                  onClick={() =>
                    toast(
                      p.status === "Completed"
                        ? `Certificate for ${p.title} is ready in your vault.`
                        : `Opening ${p.title} pathway dashboard.`,
                      p.status === "Completed" ? "success" : "info"
                    )
                  }
                  className="mt-4 w-full rounded-md border border-[var(--color-border)] py-2 text-sm font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-surface)] transition-colors"
                >
                  {p.status === "Completed" ? "View Certificate" : "Open Pathway"}
                </button>
              </div>
            ))}
          </div>

          {/* Small note */}
          <p className="mt-10 text-center text-sm text-[var(--color-muted)]">
            All learning records tracked via SCORM / xAPI · Certificates carry unique verification IDs
          </p>
        </div>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
