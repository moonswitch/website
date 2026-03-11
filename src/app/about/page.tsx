import type { Metadata } from "next";

import { Hero } from "@/components/Hero";

export const metadata: Metadata = {
  title: "About Moonswitch",
  description:
    "At Moonswitch, we believe that cloud technology is the foundation for business growth and transformation.",
  openGraph: {
    title: "About Moonswitch",
    description:
      "At Moonswitch, we believe that cloud technology is the foundation for business growth and transformation.",
    images: ["/images/logo-color-wordmark.svg"],
  },
};

const values = [
  {
    title: "Expertise",
    description:
      "Our team of seasoned cloud professionals brings years of experience across diverse industries, ensuring top-notch solutions for your business.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-teal"
      >
        <path d="M20 6a8 8 0 0 1 5 14.28V24a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-3.72A8 8 0 0 1 20 6Z" />
        <line x1="16" y1="30" x2="24" y2="30" />
        <line x1="17" y1="34" x2="23" y2="34" />
      </svg>
    ),
  },
  {
    title: "Customized Solutions",
    description:
      "We understand that every business is unique. Our tailored services are designed to meet your specific requirements and goals.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-teal"
      >
        <path d="M18 8h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2Z" />
        <path d="M28 22h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2Z" />
        <path d="M20 14h2a2 2 0 0 1 2 2v2" />
        <path d="M18 26h-2a2 2 0 0 1-2-2v-2" />
      </svg>
    ),
  },
  {
    title: "Proven Track Record",
    description:
      "With a long history of successful cloud migrations and infrastructure optimizations, we have the expertise to deliver results.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-teal"
      >
        <path d="M20 6l4 8 9 1.5-6.5 6.5L28 31l-8-4-8 4 1.5-9L7 15.5l9-1.5Z" />
      </svg>
    ),
  },
  {
    title: "Partnership",
    description:
      "We view our clients as partners in success. Your goals are our goals, and we work closely with you every step of the way.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-teal"
      >
        <path d="M8 20l4-4 4 2 4-2 4 2 4-2 4 4" />
        <path d="M12 16l-4-4h6l2-4 2 4h6l-4 4" />
        <path d="M20 24v8" />
        <path d="M14 28h12" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description:
      "We continually explore new technologies, tools, and approaches to keep your cloud infrastructure at the cutting edge.",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-teal"
      >
        <path d="M20 4l3 8-3 4-3-4Z" />
        <path d="M20 16v12" />
        <path d="M14 34h12" />
        <path d="M16 34l-4-6h4" />
        <path d="M24 34l4-6h-4" />
        <path d="M12 10l5 3" />
        <path d="M28 10l-5 3" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Section 1: Hero */}
      <Hero title="About MOONSWITCH" />

      {/* Section 2: The Moonswitch Difference */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* Left column — copy */}
          <div>
            <h3 className="text-3xl font-semibold text-dark-grey">
              The Moonswitch Difference
            </h3>
            <h4 className="mt-4 text-xl text-teal">
              Cloud technology is the foundation for business growth and
              transformation
            </h4>
            <p className="mt-6 text-medium-grey leading-relaxed">
              At Moonswitch, our approach is built on a customer-centric
              philosophy, combined with deep technical expertise. We don&apos;t
              just implement solutions — we partner with you to understand your
              unique challenges and goals, crafting strategies that drive real
              results.
            </p>
            <p className="mt-6 font-semibold text-dark-grey">
              We empower businesses to harness the full potential of cloud
              technology.
            </p>
          </div>

          {/* Right column — decorative element */}
          <div className="relative hidden items-center justify-center lg:flex">
            <div className="flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-teal/10 to-dark-teal/10">
              <img
                src="/images/logo-white-icon.svg"
                alt=""
                className="h-48 w-48 opacity-[0.08]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why MOONSWITCH */}
      <section className="bg-light-grey py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mb-12 text-center">
            <h6 className="text-sm font-medium uppercase tracking-wider text-teal">
              Why
            </h6>
            <h2 className="mt-2 text-4xl font-semibold text-dark-grey">
              MOONSWITCH
            </h2>
          </div>

          {/* Value cards grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className={`rounded-xl bg-white p-8 shadow${
                  /* Center the last two cards on the last row */
                  values.indexOf(value) >= 3 ? " lg:col-span-1" : ""
                }`}
              >
                <div className="mb-4">{value.icon}</div>
                <h4 className="mb-3 text-xl font-medium text-dark-grey">
                  {value.title}
                </h4>
                <p className="text-medium-grey leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
