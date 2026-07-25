type BadgeVariant = "primary" | "secondary" | "success" | "flag" | "alert" | "lg";

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
