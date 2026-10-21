"use client";

import Navbar from "@/components/layout/Navbar";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import Footer from "@/components/layout/Footer";
import { useToast } from "@/components/ui/Toast";

const regions = [
  { name: "North West", rate: 74 },
  { name: "North East", rate: 61 },
  { name: "North Central", rate: 79 },
  { name: "South West", rate: 88 },
  { name: "South East", rate: 82 },
  { name: "South South", rate: 71 },
];

export default function AdminPage() {
  const { toast } = useToast();

  return (
    <>
      <Navbar />
      <main className="flex-1 pb-20 md:pb-0 bg-[var(--color-surface)]">
        <div className="bg-[var(--color-base)] text-white dark-surface">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <p className="text-sm font-medium text-[var(--color-accent)] mb-2">
                  Administrator & Content Manager
                </p>
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  Command Center
                </h1>
                <p className="mt-2 text-slate-300 max-w-xl">
                  National analytics, competency insights, and content governance.
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => toast("Content Studio opened. Drag-and-drop SCORM upload ready.", "info")}
                  className="rounded-md border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
                >
                  Content Studio
                </button>
                <button
                  onClick={() => toast("Full national analytics export generated (CSV + PDF).", "success")}
                  className="rounded-md bg-[var(--color-accent)] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-accent-hover)] transition-colors"
                >
                  Export Report
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { label: "Active Learners", value: "8,942", delta: "+12% MoM" },
              { label: "Completion Rate", value: "76%", delta: "+4.2 pts" },
              { label: "Certificates Issued", value: "3,187", delta: "+289 this month" },
              { label: "Competency Gaps", value: "14", delta: "Priority regions: 3" },
            ].map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-xl border border-[var(--color-border)] bg-white p-5 shadow-sm"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
                  {kpi.label}
                </p>
                <p className="mt-2 text-2xl font-semibold text-[var(--color-text-primary)]">
                  {kpi.value}
                </p>
                <p className="mt-1 text-xs text-[var(--color-accent)]">{kpi.delta}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-[var(--color-border)] bg-white p-6 shadow-sm mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                Regional Completion Rates
              </h2>
              <button
                onClick={() => toast("Drill-down view for selected region would open here.", "info")}
                className="text-sm font-medium text-[var(--color-accent)] hover:underline"
              >
                View details
              </button>
            </div>
            <div className="space-y-4">
              {regions.map((r) => (
                <div key={r.name} className="flex items-center gap-4">
                  <span className="w-28 shrink-0 text-sm text-[var(--color-text-secondary)]">
                    {r.name}
                  </span>
                  <div className="flex-1 h-3 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[var(--color-accent)] transition-all duration-700"
                      style={{ width: `${r.rate}%` }}
                    />
                  </div>
                  <span className="w-12 text-right text-sm font-medium text-[var(--color-text-primary)]">
                    {r.rate}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-[var(--color-border)] bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-[var(--color-text-primary)] mb-4">
                Content Studio
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-5">
                Upload SCORM packages, update source materials, and govern editorial quality.
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => toast("SCORM package uploader opened. Supports 1.2 / 2004 & xAPI.", "info")}
                  className="w-full rounded-md bg-[var(--color-base)] py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-base-light)] transition-colors"
                >
                  Upload New Module
                </button>
                <button
                  onClick={() => toast("Source materials library opened for review.", "info")}
                  className="w-full rounded-md border border-[var(--color-border)] py-2.5 text-sm font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-surface)] transition-colors"
                >
                  Manage Source Materials
                </button>
              </div>
            </div>

            <div className="rounded-xl border border-[var(--color-border)] bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-[var(--color-text-primary)] mb-4">
                National Competency Gaps
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  { area: "Cold Chain Integrity", severity: "High", states: 4 },
                  { area: "LMIS Data Quality", severity: "Medium", states: 7 },
                  { area: "Procurement Compliance", severity: "Medium", states: 5 },
                ].map((g) => (
                  <li
                    key={g.area}
                    className="flex items-center justify-between py-2 border-b border-[var(--color-border)] last:border-0"
                  >
                    <span className="text-[var(--color-text-primary)]">{g.area}</span>
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded ${
                          g.severity === "High"
                            ? "bg-red-50 text-red-700"
                            : "bg-amber-50 text-amber-700"
                        }`}
                      >
                        {g.severity}
                      </span>
                      <span className="text-[var(--color-muted)]">{g.states} states</span>
                    </div>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => toast("Full competency gap analysis dashboard opened.", "info")}
                className="mt-5 w-full rounded-md border border-[var(--color-border)] py-2.5 text-sm font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-surface)] transition-colors"
              >
                Open Full Analysis
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
