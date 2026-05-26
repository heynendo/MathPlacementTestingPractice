type Props = {
  filled?: boolean;
  onClick?: () => void;
  size?: number;
};

export default function Flag({ filled = false, onClick, size = 15 }: Props) {
  return (
    <svg
      height={size}
      viewBox="0 0 13 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 16V1.75002C1 1.75002 1.6875 1 3.75 1C5.8125 1 7.1875 2.5 9.25 2.5C11.3125 2.5 12 1.75 12 1.75V10.75C12 10.75 11.3125 11.5 9.25 11.5C7.1875 11.5 5.8125 10 3.75 10C1.6875 10 1 10.75 1 10.75"
        stroke="#F0860A"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill={filled ? "#F0860A" : "none"}
      />
    </svg>
  );
}
