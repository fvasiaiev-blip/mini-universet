interface Props {
  className?: string;
}

export function SineWave({ className = "" }: Props) {
  return (
    <div
      aria-hidden="true"
      className={`w-full text-center font-mono text-xs text-muted tracking-widest select-none py-8 ${className}`}
    >
      ∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿
    </div>
  );
}
