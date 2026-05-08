type ButtonVariant = "primary" | "secondary" | "light" | "alert" | "success" | "flag" ;
type ButtonSize = "square" | "md" | "lg";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: Props) {
  const sizeClass = size !== "md" ? `btn--${size}` : "";

  return (
    <button
      className={`btn btn--${variant} ${sizeClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
