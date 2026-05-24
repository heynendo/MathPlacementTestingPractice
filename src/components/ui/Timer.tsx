import { useState, useEffect, useRef } from "react";

type Props = {
  timerLength: number;
  pause: boolean;
};

export default function Timer({ timerLength, pause }: Props) {
  const [secondsLeft, setSecondsLeft] = useState(timerLength * 60);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (pause) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [pause]);

  const minutes = Math.floor(secondsLeft / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (secondsLeft % 60).toString().padStart(2, "0");
  const isLow = secondsLeft <= 60;

  return (
    <div className="timer">
      <span className="light">Time Left</span>
      <div className="content">
        <span className={`time ${isLow ? "low" : ""} light`}>
          <h2>
            {minutes}:{seconds}
          </h2>{" "}
          / {timerLength} mins
        </span>
      </div>
    </div>
  );
}
