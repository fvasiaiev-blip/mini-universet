import { CornerBrackets } from "@/components/ascii/CornerBrackets";

interface Props {
  title: string;
  number: string;
  className?: string;
}

export function SectionHeader({ title, number, className = "" }: Props) {
  return (
    <div className={`mb-16 ${className}`}>
      <p className="font-mono text-accent text-xs tracking-widest mb-4 select-none">
        [{number}]
      </p>
      <CornerBrackets accentTop>
        <h2 className="font-display text-4xl md:text-5xl text-text px-6 py-2">
          {title}
        </h2>
      </CornerBrackets>
    </div>
  );
}
