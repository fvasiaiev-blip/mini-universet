interface Props {
  className?: string;
}

export function CircuitRule({ className = "" }: Props) {
  return (
    <div
      aria-hidden="true"
      className={`w-full text-center font-mono text-xs text-muted tracking-widest select-none ${className}`}
    >
      ────────────────┤├────────────────┤├────────────────
    </div>
  );
}
