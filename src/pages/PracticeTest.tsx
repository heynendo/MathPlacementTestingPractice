import ProgressBar from "@/components/practiceTest/ProgressBar";
import QuestionList from "@/components/practiceTest/QuestionList";
import TestIntro from "@/components/practiceTest/TestIntro";
import Button from "@/components/ui/Button";
import "@/style/practice-test.css";
import { useState } from "react";
import PracticeTestQuestions from "@/data/practice-test.json";
import Timer from "@/components/ui/Timer";
import CurrentQuestion from "@/components/practiceTest/CurrentQuestion";

type QuestionState = {
  answer: string;
  flagged: boolean;
};

export default function PracticeTest() {
  const [startTest, setStartTest] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, QuestionState>
  >({});
  const [showDesmos, setShowDesmos] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  return (
    <div className="practice-test">
      {startTest ? (
        <div className="content">
          <div className="nav-content">
            <div className="content">
              <span className="light">
                Question {currentQuestion + 1} of {PracticeTestQuestions.length}
              </span>
              <QuestionList
                numQuestions={30}
                currentQuestion={currentQuestion}
                setCurrentQuestion={setCurrentQuestion}
                selectedAnswers={selectedAnswers}
              />
            </div>
            <div className="calc-options">
              <Button
                variant={showCalculator ? "primary" : "secondary"}
                onClick={() => setShowCalculator((x) => !x)}
              >
                Desmos Graphing
              </Button>
              <Button
                variant={showDesmos ? "primary" : "secondary"}
                onClick={() => setShowDesmos((x) => !x)}
              >
                Calculator
              </Button>
              <Button
                variant={showNotes ? "primary" : "secondary"}
                onClick={() => setShowNotes((x) => !x)}
              >
                Notepad
              </Button>
            </div>
            <div className="progress">
              <ProgressBar
                value={
                  Object.values(selectedAnswers).filter((q) => q.answer).length
                }
                total={PracticeTestQuestions.length}
              />
              <Timer timerLength={30} pause={false} />
              <Button variant="alert" className="submit">
                Submit Test
              </Button>
            </div>
          </div>
          <div className="main-content">
            <CurrentQuestion
              currentQuestion={currentQuestion}
              selectedAnswers={selectedAnswers}
              setCurrentQuestion={setCurrentQuestion}
              setSelectedAnswers={setSelectedAnswers}
            />
          </div>
        </div>
      ) : (
        <TestIntro />
      )}
    </div>
  );
}
