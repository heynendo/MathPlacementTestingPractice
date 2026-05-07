import { motion } from "motion/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function MotionWrapper({ children }: Props) {
  const pageMotion = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  return <motion.div {...pageMotion}>{children}</motion.div>;
}
