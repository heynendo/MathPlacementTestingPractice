/*import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Button from '@/components/ui/Button'

type ButtonVariant = 'primary' | 'secondary' | 'light' | 'alert' | 'success' | 'flag'

export default function Nav() {
  const location = useLocation()
  const navigate = useNavigate()

  const practiceVariant: ButtonVariant = location.pathname === '/practice-test' ? 'primary' : 'secondary'
  const generateVariant: ButtonVariant = location.pathname === '/generate-questions' ? 'primary' : 'secondary'

  return (
      <AnimatePresence>
        <motion.nav
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.75, ease: 'easeInOut' }}
        >
          <div className='content'>
            <Link to="/" className="nav-title">
              <h2>Math Placement Testing Practice</h2>
            </Link>
            <div className="nav-links">
              <Button
                variant={practiceVariant}
                onClick={() => navigate('/practice-test')}
              >
                Practice Test
              </Button>
              <Button
                variant={generateVariant}
                onClick={() => navigate('/generate-questions')}
              >
                Question Generator
              </Button>
            </div>
          </div>
        </motion.nav>
      </AnimatePresence>
  )
}*/

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/components/ui/Button";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "light"
  | "alert"
  | "success"
  | "flag";

export default function Nav() {
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";
  const practiceVariant: ButtonVariant =
    location.pathname === "/practice-test" ? "primary" : "secondary";
  const generateVariant: ButtonVariant =
    location.pathname === "/generate-questions" ? "primary" : "secondary";

  return (
    <AnimatePresence>
      {!isHome && (
        <motion.nav
          key="nav"
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.5, ease: "easeInOut", delay: 0.15 },
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div
            className="content"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{
              y: "-100%",
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
          >
            <Link to="/" className="nav-title">
              <h2>Math Placement Testing Practice</h2>
            </Link>
            <div className="nav-links">
              <Button
                variant={practiceVariant}
                onClick={() => navigate("/practice-test")}
              >
                Practice Test
              </Button>
              <Button
                variant={generateVariant}
                onClick={() => navigate("/generate-questions")}
              >
                Question Generator
              </Button>
            </div>
          </motion.div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
