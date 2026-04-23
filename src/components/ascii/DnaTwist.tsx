interface Props {
  height?: number;
  className?: string;
}

export function DnaTwist({ height = 14, className = "" }: Props) {
  const rows = Array.from({ length: height }, (_, i) =>
    i % 2 === 0 ? "/ \\" : "\\ /"
  );

  return (
    <pre
      aria-hidden="true"
      className={`font-mono text-xs text-muted select-none leading-5 ${className}`}
    >
      {rows.join("\n")}
    </pre>
  );
}
