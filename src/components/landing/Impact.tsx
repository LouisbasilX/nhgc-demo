export default function Impact() {
  return (
    <section className="section-padding bg-[var(--color-base)] text-white dark-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-sm font-semibold tracking-wider uppercase text-[var(--color-accent)] mb-3">
              National Impact
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
              Building lasting capacity across Nigeria’s health logistics network
            </h2>
            <p className="mt-5 text-slate-300 leading-relaxed max-w-lg">
              From cold-chain integrity to last-mile inventory control, the platform delivers measurable competency gains that protect product quality and patient outcomes.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "5", label: "Core Workstreams", sub: "Design to Ownership" },
              { value: "WCAG 2.1", label: "Accessibility", sub: "Level AA Compliant" },
              { value: "SCORM", label: "Interoperability", sub: "xAPI & H5P Ready" },
              { value: "100%", label: "Gov Ownership", sub: "By March 2027" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <p className="text-2xl sm:text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-slate-200">{stat.label}</p>
                <p className="text-xs text-slate-400 mt-0.5">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
