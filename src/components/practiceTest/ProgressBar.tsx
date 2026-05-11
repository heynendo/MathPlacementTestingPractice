type Props = {
  value: number;
  total: number;
  label?: boolean;
};

export default function ProgressBar({ value, total, label = true }: Props) {
  const percentage: number = Math.min((value / total) * 100, 100);

  return (
    <div className="progress-bar">
      <div className="progress-bar-track">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
      {label && (
        <span className="progress-bar-label">
          {value}/{total} answered
        </span>
      )}
    </div>
  );
}
