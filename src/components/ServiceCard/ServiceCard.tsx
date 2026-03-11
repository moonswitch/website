import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
};

export function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  const card = (
    <div className="rounded-xl border border-grey/30 bg-white p-8 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
      {icon && <div className="mb-4 text-teal">{icon}</div>}
      <h4 className="text-xl font-bold text-charcoal">{title}</h4>
      <p className="mt-3 text-medium-grey">{description}</p>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {card}
      </Link>
    );
  }

  return card;
}
