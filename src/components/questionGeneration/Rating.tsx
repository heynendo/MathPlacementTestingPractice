import Star from "@/components/ui/Star";

type Props = {
  value: number;
  onChange: (value: number) => void;
  label?: string;
};

export default function Rating({ value, onChange, label }: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      {label && <span className="input-label">{label}</span>}
      <div style={{ display: "flex", gap: "var(--space-xs)" }}>
        {[1, 2, 3, 4, 5].map((n) => (
          <Star key={n} filled={n <= value} onClick={() => onChange(n)} />
        ))}
      </div>
    </div>
  );
}
