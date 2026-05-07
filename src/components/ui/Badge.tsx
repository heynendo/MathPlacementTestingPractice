type BadgeVariant = "primary" | "secondary" | "success" | "warning" | "danger";

type Props = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

export default function Badge({
  variant = "primary",
  className = "",
  children,
  ...props
}: Props) {
  return (
    <span className={`badge badge--${variant} ${className}`.trim()} {...props}>
      {children}
    </span>
  );
}
