import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-base-dark)] text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[var(--color-accent)] text-white font-bold text-sm">
                NH
              </div>
              <div>
                <p className="text-sm font-semibold text-white">National Health Supply Chain</p>
                <p className="text-xs text-slate-500">Digital Knowledge & Learning Platform</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-md">
              An enterprise-grade Integrated Learning Management System and Digital E-Library delivering verified competencies for Nigeria’s health supply chain workforce. Full government ownership by March 2027.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Portals
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/learner" className="hover:text-white transition-colors">
                  Learner Portal
                </Link>
              </li>
              <li>
                <Link href="/library" className="hover:text-white transition-colors">
                  Digital E-Library
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-white transition-colors">
                  Command Center
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>Moodle LMS Core</li>
              <li>Next.js Frontend</li>
              <li>DSpace Repository</li>
              <li>WCAG 2.1 AA</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 National Product Supply Chain Management Programme. Confidential.</p>
          <p className="text-slate-500">
            Technical Proposal · U.S. Department of State EOI · Government Ownership Delivered by March 2027
          </p>
        </div>
      </div>
    </footer>
  );
}
