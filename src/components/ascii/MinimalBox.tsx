interface Props {
  label: string;
  className?: string;
}

export function MinimalBox({ label, className = "" }: Props) {
  return (
    <span
      aria-hidden="true"
      className={`font-mono text-xs text-muted select-none ${className}`}
    >
      └── {label} ──┘
    </span>
  );
}
