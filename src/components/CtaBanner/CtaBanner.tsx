import { Button } from "@/components/Button";

type CtaBannerProps = {
  heading: string;
  buttonText?: string;
  buttonHref?: string;
};

export function CtaBanner({ heading, buttonText, buttonHref }: CtaBannerProps) {
  return (
    <section className="bg-teal py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          {heading}
        </h2>
        {buttonText && buttonHref && (
          <div className="mt-8">
            <Button variant="primary" href={buttonHref}>
              {buttonText}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
