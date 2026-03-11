import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { CtaBanner } from "@/components/CtaBanner";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Managed Kubernetes Services | Moonswitch",
  description:
    "Deploy and scale applications across hybrid, private, and public cloud environments with Moonswitch's expert Kubernetes management.",
  openGraph: {
    title: "Managed Kubernetes Services | Moonswitch",
    description:
      "Deploy and scale applications across hybrid, private, and public cloud environments with Moonswitch's expert Kubernetes management.",
    images: ["/images/logo-color-wordmark.svg"],
  },
};

const capabilities = [
  {
    title: "Lifecycle Management",
    description:
      "End-to-end management of your Kubernetes clusters, from initial setup and configuration to ongoing maintenance and upgrades.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10 text-teal">
        <path
          d="M4 4h16v16H4V4zm2 2v12h12V6H6zm3 3h6v2H9V9zm0 4h6v2H9v-2z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Auto-scaling",
    description:
      "Automatically scale your applications up or down based on demand, ensuring optimal performance and cost efficiency.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10 text-teal">
        <path
          d="M3 17h2v-7H3v7zm4 0h2V7H7v10zm4 0h2V4h-2v13zm4 0h2v-4h-2v4zm4 0h2v-9h-2v9z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Resilience and Self-Healing",
    description:
      "Built-in self-healing capabilities automatically restart failed containers, replace unhealthy nodes, and maintain your desired state.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10 text-teal">
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l5.59-5.59L18 10l-7 7z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Persistent Storage",
    description:
      "Reliable persistent storage solutions that ensure your data survives pod restarts and cluster changes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10 text-teal">
        <path
          d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
          fill="currentColor"
        />
        <circle cx="4" cy="7" r="1.5" fill="currentColor" />
        <circle cx="4" cy="12" r="1.5" fill="currentColor" />
        <circle cx="4" cy="17" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Declarative Model",
    description:
      "Define your desired infrastructure state using declarative configuration, and Kubernetes ensures reality matches your specifications.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10 text-teal">
        <path
          d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Load Balancing",
    description:
      "Intelligent traffic distribution across your services, ensuring high availability and optimal response times for your users.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10 text-teal">
        <path
          d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.18L18 8v8l-6 3.82L6 16V8l6-3.82z"
          fill="currentColor"
        />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
      </svg>
    ),
  },
];

const faqItems = [
  {
    question: "What enterprises are a good fit for managed Kubernetes?",
    answer:
      "Organizations running microservices architectures, those with multiple development teams, companies requiring high availability and scalability, and businesses looking to standardize their container orchestration across cloud providers.",
  },
  {
    question: "What cloud providers does Moonswitch support?",
    answer:
      "We support all major cloud providers including Google Kubernetes Engine (GKE), Azure Kubernetes Service (AKS), and Amazon Elastic Kubernetes Service (EKS), as well as on-premises and hybrid deployments.",
  },
  {
    question: "What are the advantages of Kubernetes for CI/CD?",
    answer:
      "Kubernetes provides consistent environments across development, staging, and production, enabling reliable CI/CD pipelines. Features like rolling updates, canary deployments, and automated rollbacks make continuous delivery safer and more efficient.",
  },
];

export default function KubernetesPage() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="Managed Kubernetes Services"
        subtitle="Deploy and scale containerized applications across hybrid, private, and public cloud environments with Moonswitch's expert Kubernetes management."
      />

      {/* Key Capabilities */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center">
            Kubernetes is the leading open-source solution for automating the
            deployment, scaling, and management of containerized applications
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-center text-medium-grey">
            While Kubernetes offers unmatched flexibility and power, its
            complexity can be overwhelming. Managing clusters, ensuring
            security, maintaining uptime, and keeping up with the rapid pace of
            updates requires deep expertise and dedicated resources.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-center text-medium-grey">
            Moonswitch brings years of hands-on Kubernetes experience to your
            organization, letting you harness the full potential of container
            orchestration without the operational burden.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="rounded-xl bg-white p-8 shadow-md"
              >
                <div className="mb-4">{cap.icon}</div>
                <h4 className="mb-3 font-semibold">{cap.title}</h4>
                <p className="text-medium-grey">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Managed Services Detail */}
      <section className="bg-light-grey py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left column */}
            <div>
              <h3>
                We Take Care of Kubernetes So You Can Focus on Development
              </h3>
              <p className="mt-6 text-medium-grey">
                Offload the complexity of Kubernetes operations to
                Moonswitch&apos;s team of certified engineers. We handle
                cluster provisioning, security hardening, performance tuning,
                and day-to-day management so your developers can focus on
                building great applications.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6 flex-shrink-0 text-teal"
                  >
                    <path
                      d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="text-dark-grey">
                    Remote Monitoring 24/7
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6 flex-shrink-0 text-teal"
                  >
                    <path
                      d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="text-dark-grey">
                    Expert Issue Resolution
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6 flex-shrink-0 text-teal"
                  >
                    <path
                      d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="text-dark-grey">
                    Automated Troubleshooting
                  </span>
                </li>
              </ul>
            </div>

            {/* Right column — decorative element */}
            <div className="flex items-center justify-center">
              <div className="flex h-64 w-full items-center justify-center rounded-2xl bg-gradient-to-br from-teal/20 to-dark-teal/20 lg:h-full">
                <svg
                  viewBox="0 0 200 200"
                  fill="none"
                  className="h-40 w-40 text-teal/30"
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="60"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="30"
                    fill="currentColor"
                    opacity="0.4"
                  />
                  <line
                    x1="100"
                    y1="10"
                    x2="100"
                    y2="190"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="10"
                    y1="100"
                    x2="190"
                    y2="100"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h3 className="mb-8 text-center">Managed Kubernetes FAQ</h3>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner
        heading="Maximize the Benefits of Kubernetes with Expert Managed Services"
        buttonText="Get Started"
        buttonHref="/about"
      />
    </>
  );
}
