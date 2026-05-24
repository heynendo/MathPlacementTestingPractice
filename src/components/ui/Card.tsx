type Props = Omit<React.HTMLAttributes<HTMLDivElement>, "title"> & {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  footer?: React.ReactNode;
  flat?: boolean;
};

export default function Card({
  title,
  subtitle,
  footer,
  flat = false,
  className = "",
  children,
  ...props
}: Props) {
  return (
    <div
      className={`card ${flat ? "card--flat" : ""} ${className}`.trim()}
      {...props}
    >
      {(title || subtitle) && (
        <div className="card__header">
          {title && <div className="card__title">{title}</div>}
          {subtitle && <div className="card__subtitle">{subtitle}</div>}
        </div>
      )}
      <div className="card__body">{children}</div>
      {footer && <div className="card__footer">{footer}</div>}
    </div>
  );
}
