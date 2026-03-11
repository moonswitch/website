import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "DevOps Consulting | Moonswitch",
  description:
    "DevOps increases the efficiency, speed, and security of the software development process. Moonswitch's DevOps consulting optimizes your software development lifecycle.",
  openGraph: {
    title: "DevOps Consulting | Moonswitch",
    description:
      "DevOps increases the efficiency, speed, and security of the software development process.",
    images: ["/images/logo-color-wordmark.svg"],
  },
};

const whyDevOpsItems = [
  {
    question: "DevOps improves collaboration",
    answer:
      "DevOps brings development and operations teams together, breaking down silos and fostering a culture of shared responsibility. This collaboration leads to faster problem resolution and more innovative solutions.",
  },
  {
    question: "DevOps leverages automation",
    answer:
      "By automating repetitive tasks like testing, deployment, and infrastructure provisioning, DevOps reduces human error and frees up teams to focus on higher-value work.",
  },
  {
    question: "DevOps enables continuous improvement",
    answer:
      "Through continuous integration and continuous delivery (CI/CD) pipelines, DevOps enables teams to iterate quickly, gather feedback, and continuously improve their software.",
  },
  {
    question: "DevOps focuses on customers",
    answer:
      "By shortening development cycles and improving deployment frequency, DevOps helps organizations respond faster to customer needs and deliver better user experiences.",
  },
];

const challenges = [
  {
    title: "Delayed Software Updates",
    icon: (
      <svg className="h-8 w-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
      </svg>
    ),
  },
  {
    title: "Slow IT Infrastructure Implementation",
    icon: (
      <svg className="h-8 w-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12l4-4m-4 4l4 4" />
      </svg>
    ),
  },
  {
    title: "Lack of Collaboration Across Production Environment",
    icon: (
      <svg className="h-8 w-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Delayed Bug Fixing",
    icon: (
      <svg className="h-8 w-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152-6.44c0-2.21.897-4.21 2.345-5.657a.75.75 0 00-1.12-.998A12.07 12.07 0 0012 6.75a12.07 12.07 0 00-8.28-5.655.75.75 0 00-1.12.998A7.97 7.97 0 014.945 7.75a23.91 23.91 0 01-1.152 6.44A24.108 24.108 0 0112 12.75z" />
      </svg>
    ),
  },
  {
    title: "Inefficient Testing Processes",
    icon: (
      <svg className="h-8 w-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Lack of Automation",
    icon: (
      <svg className="h-8 w-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12" />
      </svg>
    ),
  },
  {
    title: "Slow Software Delivery",
    icon: (
      <svg className="h-8 w-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.954l-7.108 4.061A1.125 1.125 0 013 16.811V8.69zm9.75 0c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.954l-7.108 4.061a1.125 1.125 0 01-1.683-.977V8.69z" />
      </svg>
    ),
  },
  {
    title: "Decreased Software Quality",
    icon: (
      <svg className="h-8 w-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Inferior User Experiences",
    icon: (
      <svg className="h-8 w-8 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
  },
];

const approachItems = [
  {
    question: "Initial Assessment",
    answer:
      "We begin by evaluating your current development and operations processes, identifying bottlenecks, inefficiencies, and areas for improvement.",
  },
  {
    question: "Roadmap and DevOps Implementation",
    answer:
      "Based on our assessment, we create a customized DevOps roadmap and begin implementing the tools, processes, and cultural changes needed for success.",
  },
  {
    question: "Optimization",
    answer:
      "We continuously monitor and optimize your DevOps pipeline, fine-tuning processes and introducing new tools as needed to maximize efficiency.",
  },
  {
    question: "Support",
    answer:
      "Our team provides ongoing support and guidance, ensuring your DevOps practices continue to evolve and deliver value over time.",
  },
];

const faqItems = [
  {
    question: "What are the main benefits of DevOps?",
    answer:
      "The main benefits include faster time to market, improved collaboration between teams, higher software quality, more reliable releases, and the ability to respond quickly to customer feedback and market changes.",
  },
  {
    question: "What is DevOps consulting?",
    answer:
      "DevOps consulting is a professional service that helps organizations adopt DevOps practices and tools. Consultants assess your current processes, recommend improvements, and help implement changes to streamline your software development lifecycle.",
  },
  {
    question: "What is the difference between Agile and DevOps?",
    answer:
      "Agile focuses on iterative development and collaboration within the development team, while DevOps extends these principles to include operations, emphasizing automation, continuous delivery, and the entire software lifecycle from development to deployment and monitoring.",
  },
];

export default function DevOpsConsultingPage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero
        title="DevOps Consulting"
        subtitle="DevOps increases the efficiency, speed, and security of the software development process. Moonswitch's DevOps consulting services can optimize your software development lifecycle."
      />

      {/* 2. Why DevOps */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold">
            DevOps is critical to successful software development
          </h3>
          <p className="mt-4 max-w-3xl text-medium-grey">
            DevOps bridges the gap between development and operations teams,
            creating a unified workflow that accelerates software delivery while
            maintaining quality and reliability. By fostering collaboration,
            automating processes, and enabling continuous feedback, DevOps
            transforms how organizations build, deploy, and maintain software.
          </p>
          <div className="mt-10">
            <FaqAccordion items={whyDevOpsItems} />
          </div>
        </div>
      </section>

      {/* 3. Challenges Grid */}
      <section className="bg-light-grey py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold">
            DevOps Consulting Services Address Multiple Challenges
          </h2>
          <p className="mt-4 max-w-3xl text-medium-grey">
            Organizations face numerous challenges in their software development
            lifecycle. DevOps consulting helps identify and overcome these
            obstacles, enabling teams to deliver better software faster.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {challenges.map((challenge) => (
              <div
                key={challenge.title}
                className="rounded-xl bg-white p-6 shadow"
              >
                <div className="mb-4">{challenge.icon}</div>
                <h4 className="font-bold">{challenge.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Approach */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold">The Moonswitch DevOps Approach</h2>
          <p className="mt-4 max-w-3xl text-medium-grey">
            Our comprehensive methodology ensures a smooth transition to DevOps
            practices. We work alongside your team to assess, implement,
            optimize, and support your DevOps journey every step of the way.
          </p>
          <div className="mt-10">
            <FaqAccordion items={approachItems} />
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="bg-light-grey py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="font-bold">DevOps Consulting FAQ</h3>
          <div className="mt-10">
            <FaqAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* 6. CTA Banner */}
      <CtaBanner
        heading="Maximize Your DevOps Strategy with Moonswitch"
        buttonText="Get Started"
        buttonHref="/about"
      />
    </>
  );
}
