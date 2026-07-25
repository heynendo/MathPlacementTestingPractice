type Props = {
  value: number;
  total: number;
  label?: boolean;
  theme: string;
};

export default function ProgressBar({ value, total, label = true, theme = "dark" }: Props) {
  const percentage: number = Math.min((value / total) * 100, 100);

  return (
    <div className={`progress-bar ${theme}`}>
      <div className="progress-bar-track">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
      {label && (
        <span className="progress-bar-label light">
          {value}/{total} answered
        </span>
      )}
    </div>
  );
}
