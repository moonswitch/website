import type { Metadata } from "next";

import { Hero } from "@/components/Hero";
import { CtaBanner } from "@/components/CtaBanner";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Cloud Migration Services | Moonswitch",
  description:
    "Moonswitch helps you achieve the benefits of the cloud with expert migration services that go beyond simply moving your infrastructure.",
  openGraph: {
    title: "Cloud Migration Services | Moonswitch",
    description:
      "Moonswitch helps you achieve the benefits of the cloud with expert migration services that go beyond simply moving your infrastructure.",
    images: ["/images/logo-color-wordmark.svg"],
  },
};

const benefits = [
  {
    title: "Improved Performance and Security",
    description:
      "Cloud platforms offer enterprise-grade security features, automatic updates, and globally distributed infrastructure that improve both performance and security posture.",
    icon: (
      <svg
        className="h-10 w-10 text-teal"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    title: "Lowered Costs",
    description:
      "Migrate to a pay-as-you-go model that eliminates the need for expensive on-premises hardware and reduces ongoing maintenance costs.",
    icon: (
      <svg
        className="h-10 w-10 text-teal"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Better Interoperability",
    description:
      "Cloud services are designed to work together seamlessly, enabling better integration between your applications, data sources, and third-party services.",
    icon: (
      <svg
        className="h-10 w-10 text-teal"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.04a4.5 4.5 0 00-1.242-7.244l-4.5-4.5a4.5 4.5 0 00-6.364 6.364L4.34 8.798"
        />
      </svg>
    ),
  },
  {
    title: "Easy Scalability",
    description:
      "Scale your infrastructure up or down instantly based on demand, without the delays and costs of provisioning physical hardware.",
    icon: (
      <svg
        className="h-10 w-10 text-teal"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
        />
      </svg>
    ),
  },
];

const approachSteps = [
  {
    number: "01",
    title: "Assessment",
    description:
      "We evaluate your existing infrastructure, applications, and business requirements to develop a comprehensive migration plan that minimizes risk and maximizes value.",
  },
  {
    number: "02",
    title: "Development",
    description:
      "Our team designs and builds the cloud architecture, rearchitecting applications as needed for cloud-native performance and implementing infrastructure as code.",
  },
  {
    number: "03",
    title: "Deployment and Testing",
    description:
      "We execute the migration with rigorous testing at every stage, ensuring zero data loss, minimal downtime, and a smooth transition for your users.",
  },
];

const faqItems = [
  {
    question: "Is my data secure in the cloud?",
    answer:
      "Yes. Major cloud providers invest billions in security infrastructure, offering encryption at rest and in transit, identity management, compliance certifications, and advanced threat detection that often exceeds what organizations can achieve on-premises.",
  },
  {
    question: "Should my entire system be moved to the cloud?",
    answer:
      "Not necessarily. We evaluate each component to determine the best approach — some applications benefit from full migration, while others may work better in a hybrid configuration. Our assessment phase helps you make informed decisions.",
  },
  {
    question: "Is it possible to migrate without losing transactions?",
    answer:
      "Yes. We use proven migration strategies including parallel running, staged cutover, and data synchronization techniques to ensure zero transaction loss during the migration process.",
  },
  {
    question: "What are the advantages of Kubernetes for CI/CD?",
    answer:
      "Kubernetes provides consistent environments across development, staging, and production, enabling reliable CI/CD pipelines. Features like rolling updates, canary deployments, and automated rollbacks make continuous delivery safer and more efficient.",
  },
];

export default function CloudMigrationPage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero
        title="Cloud Migration Services"
        subtitle="Achieve the full benefits of the cloud with expert migration services that go beyond simply moving your infrastructure."
      />

      {/* 2. Strategy Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-dark-grey font-bold">
            Strategic cloud migration is more than just a moving service
          </h3>
          <p className="mt-6 max-w-3xl text-medium-grey">
            When you partner with Moonswitch for cloud migration, we go beyond a
            simple lift-and-shift approach. We analyze your existing
            infrastructure, applications, and workflows to develop a migration
            strategy that optimizes for performance, cost, and scalability.
          </p>
          <p className="mt-4 max-w-3xl text-medium-grey">
            Our team helps you rearchitect applications for cloud-native
            environments, ensuring you get the full benefits of the cloud — not
            just a replica of your on-premises setup in a different location.
          </p>
        </div>
      </section>

      {/* 3. AWS Partner Badge */}
      <section className="bg-light-grey py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-xl border border-grey/30 bg-white p-8 text-center shadow-sm md:p-12">
            <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-teal" />
            <h4 className="font-bold text-dark-grey">
              Moonswitch | An AWS Select Tier Partner
            </h4>
            <p className="mt-4 text-medium-grey">
              Amazon recognizes organizations with proven technical expertise and
              customer success in helping businesses migrate to and optimize on
              AWS. As an AWS Select Tier Partner, Moonswitch brings validated
              cloud expertise to every engagement.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Benefits Grid */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-dark-grey">
            Benefits of Strategic Cloud Migration Services
          </h2>
          <p className="mt-4 max-w-3xl text-medium-grey">
            A well-planned cloud migration delivers far more than a change of
            hosting. It transforms how your organization operates, scales, and
            competes.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl bg-light-grey p-8 shadow-sm"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h4 className="font-bold text-dark-grey">{benefit.title}</h4>
                <p className="mt-3 text-medium-grey">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Approach Section */}
      <section className="bg-light-grey py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-dark-grey">
            The Moonswitch Approach to Cloud Migration
          </h3>
          <p className="mt-4 max-w-3xl text-medium-grey">
            Our proven three-phase approach ensures a smooth, low-risk migration
            that delivers real business value from day one.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {approachSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-xl bg-white p-8 shadow-sm"
              >
                <span className="text-3xl font-bold text-teal">
                  {step.number}
                </span>
                <h4 className="mt-4 font-bold text-dark-grey">{step.title}</h4>
                <p className="mt-3 text-medium-grey">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold text-dark-grey">
            Cloud Migration Services FAQ
          </h3>
          <div className="mt-8 max-w-3xl">
            <FaqAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* 7. CTA Banner */}
      <CtaBanner
        heading="Ready to start maximizing the benefits of the cloud?"
        buttonText="Get Started"
        buttonHref="/about"
      />
    </>
  );
}
