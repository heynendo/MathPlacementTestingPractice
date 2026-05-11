type Props = {
  filled?: boolean;
  onClick?: () => void;
  size?: number;
};

export default function Star({ filled = false, onClick, size = 24 }: Props) {
  return (
    <button className="star" onClick={onClick} type="button">
      <svg
        width={size}
        height={size}
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transition: `all var(--transition)` }}
      >
        <path
          d="M11.2028 1.50893C11.6389 0.46322 13.1789 0.498188 13.5416 1.61342L15.7047 8.26967H22.7028C23.9135 8.26988 24.4167 9.81871 23.4371 10.5304L17.775 14.6437L19.9381 21.299C20.3123 22.4506 18.9939 23.4092 18.0143 22.6974L12.3531 18.5831L6.69202 22.6974C5.71237 23.4092 4.394 22.4506 4.76819 21.299L6.9303 14.6437L1.26917 10.5304C0.289585 9.8187 0.792817 8.26988 2.00354 8.26967H9.00159L11.1647 1.61342L11.2028 1.50893Z"
          stroke="var(--color-flag)"
          strokeWidth="1.5"
          fill="var(--color-flag)"
          fillOpacity={filled ? 1 : 0}
          style={{ transition: `fill-opacity var(--transition)` }}
        />
      </svg>
    </button>
  );
}
