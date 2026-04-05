interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {label && (
        <p className="text-amber-700 text-sm font-semibold uppercase tracking-wider mb-2">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-stone-600 text-lg leading-relaxed ${
            centered ? "max-w-2xl mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
