import Image from "next/image";
import Link from "next/link";

const services = [
  { label: "DevOps Consulting", href: "/services/devops-consulting" },
  { label: "Managed Kubernetes", href: "/services/kubernetes" },
  { label: "Cloud Migration", href: "/services/cloud-migration" },
];

export const Footer = () => {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Column 1: Logo, address, AWS badge */}
          <div className="space-y-4">
            <Image
              src="/images/logo-white-wordmark.svg"
              alt="Moonswitch"
              width={180}
              height={40}
            />
            <address className="text-sm not-italic leading-relaxed text-white/80">
              2420 Springer Drive, Suite 218
              <br />
              Norman, OK 73069
            </address>
            <p className="text-sm font-medium text-white/90">
              AWS Select Tier Partner
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social */}
          <div>
            <a
              href="https://www.linkedin.com/company/moonswitch"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-block text-white/80 transition-colors hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-4 text-sm text-white/60 sm:flex-row lg:px-8">
          <div className="flex gap-4">
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms of Use
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} Moonswitch Software, LLC</p>
        </div>
      </div>
    </footer>
  );
};
