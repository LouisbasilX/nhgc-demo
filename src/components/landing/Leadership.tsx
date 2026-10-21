const leaders = [
  {
    name: "Federal Ministry of Health",
    role: "Policy Oversight",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "NPSCMP Leadership",
    role: "National Coordination",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "GHSC-PSM Nigeria",
    role: "Technical Partnership",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "State Logistics Officers",
    role: "Field Implementation",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Leadership() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold tracking-wider uppercase text-[var(--color-accent)] mb-3">
            Institutional Partners
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--color-text-primary)] tracking-tight">
            Anchored in national leadership
          </h2>
          <p className="mt-4 text-[var(--color-text-secondary)]">
            Designed in close collaboration with the institutions responsible for Nigeria’s health commodity security.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {leaders.map((person) => (
            <div key={person.name} className="text-center group">
              <div className="relative mx-auto h-28 w-28 md:h-36 md:w-36 overflow-hidden rounded-full border-4 border-[var(--color-surface)] shadow-md">
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-sm md:text-base font-semibold text-[var(--color-text-primary)]">
                {person.name}
              </h3>
              <p className="text-xs md:text-sm text-[var(--color-text-secondary)]">{person.role}</p>
            </div>
          ))}
        </div>

        {/* Partner logos bar */}
        <div className="mt-16 pt-10 border-t border-[var(--color-border)]">
          <p className="text-center text-xs font-medium uppercase tracking-wider text-[var(--color-muted)] mb-6">
            Supported by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-80">
            <div className="text-sm font-semibold text-[var(--color-slate)] tracking-tight">
              Federal Ministry of Health
            </div>
            <div className="h-4 w-px bg-[var(--color-border)] hidden sm:block" />
            <div className="text-sm font-semibold text-[var(--color-slate)] tracking-tight">
              NPSCMP
            </div>
            <div className="h-4 w-px bg-[var(--color-border)] hidden sm:block" />
            <div className="text-sm font-semibold text-[var(--color-slate)] tracking-tight">
              GHSC-PSM
            </div>
            <div className="h-4 w-px bg-[var(--color-border)] hidden sm:block" />
            <div className="text-sm font-semibold text-[var(--color-slate)] tracking-tight">
              U.S. Department of State
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
