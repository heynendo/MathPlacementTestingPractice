import { ClipLoader } from "react-spinners";

type Props = {
  size?: number;
  color?: string;
};

export default function Spinner({
  size = 24,
  color = "var(--color-primary)",
}: Props) {
  return <ClipLoader size={size} color={color} />;
}
