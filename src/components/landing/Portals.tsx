import Link from "next/link";
import adminPortalImage from "@/assets/images.jpg";

const portals = [
  {
    id: "learner",
    title: "Learner Portal",
    subtitle: "Health Workers & Field Officers",
    description:
      "Role-based training pathways, interactive modules, real-time progress, and verifiable certificates.",
    href: "/learner",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    features: ["My Pathways", "Interactive Modules", "Certificates"],
  },
  {
    id: "library",
    title: "Digital E-Library",
    subtitle: "Knowledge Repository",
    description:
      "Smart taxonomy search across SOPs, guidelines, manuals, and reports with secure access controls.",
    href: "/library",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
    features: ["Smart Search", "Resource Preview", "Access Control"],
  },
  {
    id: "admin",
    title: "Command Center",
    subtitle: "Administrators & Content Managers",
    description:
      "National analytics, competency gap insights, and drag-and-drop content governance tools.",
    href: "/admin",
    image: adminPortalImage.src,
    features: ["National Analytics", "Content Studio", "Role Governance"],
  },
];

export default function Portals() {
  return (
    <section className="section-padding bg-[var(--color-surface)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold tracking-wider uppercase text-[var(--color-accent)] mb-3">
            Three Role-Tailored Portals
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[var(--color-text-primary)] tracking-tight">
            Designed for absolute clarity and ease of use
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {portals.map((portal) => (
            <article
              key={portal.id}
              className="group flex flex-col overflow-hidden rounded-xl bg-white border border-[var(--color-border)] shadow-sm card-lift"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={portal.image}
                  alt={portal.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute bottom-3 left-4 text-xs font-medium text-white/90 tracking-wide">
                  {portal.subtitle}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                  {portal.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-text-secondary)] leading-relaxed flex-1">
                  {portal.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {portal.features.map((f) => (
                    <li
                      key={f}
                      className="rounded-full bg-[var(--color-surface)] px-3 py-1 text-xs font-medium text-[var(--color-text-secondary)]"
                    >
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={portal.href}
                  className="mt-6 inline-flex items-center justify-center rounded-md bg-[var(--color-base)] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-base-light)] transition-colors"
                >
                  Access Portal
                  <svg className="ml-2 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
