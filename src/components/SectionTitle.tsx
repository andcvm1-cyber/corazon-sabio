type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-berry">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold text-cacao sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-cacao/75">{description}</p>
      ) : null}
    </div>
  );
}
