import Image from "next/image";

type HeroProps = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  showRocket?: boolean;
};

export function Hero({ title, subtitle, children, showRocket }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-dark-teal to-charcoal">
      {/* Rocket background image — spans full hero, dimmed, rocket to the right */}
      {showRocket && (
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/rocket-brand-color.png"
            alt=""
            fill
            className="object-cover opacity-30"
            style={{ objectPosition: "right -15vw top -25vw" }}
            priority
            sizes="100vw"
          />
          {/* Gradient overlay: solid on the left fading to transparent on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark-teal from-10% via-dark-teal/80 via-40% to-transparent" />
        </div>
      )}

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        {/* Text content */}
        <div className={showRocket ? "max-w-2xl" : "w-full"}>
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
      </div>
    </section>
  );
}
