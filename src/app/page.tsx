import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { CtaBanner } from "@/components/CtaBanner";
import { ServiceCard } from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Moonswitch - Cloud Strategy, DevOps, Managed Kubernetes",
  description:
    "We're passionate about automated deployments, 1-click environments, and x-ray vision into performance and health.",
  openGraph: {
    title: "Moonswitch - Cloud Strategy, DevOps, Managed Kubernetes",
    description:
      "We're passionate about automated deployments, 1-click environments, and x-ray vision into performance and health.",
    images: ["/images/logo-color-wordmark.svg"],
  },
};

const GearIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    stroke="#3A728B"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="20" cy="20" r="6" />
    <path d="M20 2v4M20 34v4M2 20h4M34 20h4M6.1 6.1l2.8 2.8M31.1 31.1l2.8 2.8M6.1 33.9l2.8-2.8M31.1 8.9l2.8-2.8" />
  </svg>
);

const CloudArrowIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    stroke="#3A728B"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 30a8 8 0 0 1-.5-16A10 10 0 0 1 29 12a7 7 0 0 1 1 14" />
    <path d="M20 20v12M16 24l4-4 4 4" />
  </svg>
);

const ContainerIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    stroke="#3A728B"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="6" y="8" width="28" height="24" rx="2" />
    <path d="M6 16h28M6 24h28M16 8v24M24 8v24" />
  </svg>
);

export default function Home() {
  return (
    <>
      <Hero
        showRocket={true}
        title="We Are Experts"
        subtitle="We're passionate about automated deployments, 1-click environments, and x-ray vision into performance and health. Our mission is to enable teams to deliver quickly and reliably."
      />

      <section className="bg-light-grey py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-dark-grey md:text-4xl">
            Our Services
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <ServiceCard
              title="DevOps Consulting"
              description="Optimize your software development lifecycle with expert DevOps consulting that increases efficiency, speed, and security."
              href="/services/devops-consulting"
              icon={<GearIcon />}
            />
            <ServiceCard
              title="Cloud Migration"
              description="Achieve the full benefits of the cloud with expert migration services that go beyond simply moving your infrastructure."
              href="/services/cloud-migration"
              icon={<CloudArrowIcon />}
            />
            <ServiceCard
              title="DevOps-as-a-Service"
              description="Deploy and scale containerized applications across hybrid, private, and public cloud environments with managed Kubernetes."
              href="/services/kubernetes"
              icon={<ContainerIcon />}
            />
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Are you ready to launch your team to the next level?"
        buttonText="Get Started"
        buttonHref="/about"
      />
    </>
  );
}
