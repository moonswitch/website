import Image from "next/image";

type HeroProps = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  showRocket?: boolean;
};

export function Hero({ title, subtitle, children, showRocket }: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-dark-teal to-charcoal">
      <div className="mx-auto flex max-w-7xl items-center px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        {/* Text content */}
        <div className={showRocket ? "flex-1" : "w-full"}>
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>

        {/* Rocket image */}
        {showRocket && (
          <div className="relative hidden flex-shrink-0 md:block md:w-64 lg:w-80">
            <Image
              src="/images/rocket-brand-color.png"
              alt="Moonswitch rocket"
              width={320}
              height={400}
              className="object-contain"
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
}
