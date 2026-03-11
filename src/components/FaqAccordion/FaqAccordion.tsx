type FaqAccordionProps = {
  items: Array<{ question: string; answer: string }>;
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <div className="divide-y divide-grey/30">
      {items.map((item, index) => (
        <details key={index} className="group">
          <summary className="flex cursor-pointer items-center justify-between py-5 text-lg font-bold text-charcoal marker:content-none [&::-webkit-details-marker]:hidden">
            <span>{item.question}</span>
            <svg
              className="h-5 w-5 flex-shrink-0 text-medium-grey transition-transform group-open:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <div className="pb-5 text-medium-grey">{item.answer}</div>
        </details>
      ))}
    </div>
  );
}
