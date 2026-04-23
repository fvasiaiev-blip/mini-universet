import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  accentTop?: boolean;
}

export function CornerBrackets({ children, className = "", accentTop = false }: Props) {
  const cornerColor = accentTop ? "text-accent" : "text-muted";
  return (
    <div className={`relative inline-block ${className}`}>
      <span
        aria-hidden="true"
        className={`absolute -top-3 -left-3 font-mono text-xs select-none ${cornerColor} leading-none`}
      >
        ┌─
      </span>
      <span
        aria-hidden="true"
        className={`absolute -top-3 -right-3 font-mono text-xs select-none ${cornerColor} leading-none`}
      >
        ─┐
      </span>
      {children}
      <span
        aria-hidden="true"
        className="absolute -bottom-3 -left-3 font-mono text-xs select-none text-muted leading-none"
      >
        └─
      </span>
      <span
        aria-hidden="true"
        className="absolute -bottom-3 -right-3 font-mono text-xs select-none text-muted leading-none"
      >
        ─┘
      </span>
    </div>
  );
}
