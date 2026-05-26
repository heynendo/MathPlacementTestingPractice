import ProgressBar from "@/components/practiceTest/ProgressBar";
import QuestionList from "@/components/practiceTest/QuestionList";
import Button from "@/components/ui/Button";
import Timer from "@/components/ui/Timer";
import CurrentQuestion from "@/components/practiceTest/CurrentQuestion";
import Calculator from "@/components/Calculator";
import Notes from "@/components/Notes";
import Desmos from "@/components/Desmos";
import PracticeTestQuestions from "@/data/practice-test.json";
import { useState } from "react";

type QuestionState = {
  answer: string;
  flagged: boolean;
};

type TestViewProps = {
  currentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  selectedAnswers: Record<number, QuestionState>;
  setSelectedAnswers: React.Dispatch<
    React.SetStateAction<Record<number, QuestionState>>
  >;
  setShowResults: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function TestView({
  currentQuestion,
  setCurrentQuestion,
  selectedAnswers,
  setSelectedAnswers,
  setShowResults,
}: TestViewProps) {
  const [showDesmos, setShowDesmos] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  return (
    <div className="content test-view">
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
            Calculator
          </Button>
          <Button
            variant={showNotes ? "primary" : "secondary"}
            onClick={() => setShowNotes((x) => !x)}
          >
            Notepad
          </Button>
          <Button
            variant={showDesmos ? "primary" : "secondary"}
            onClick={() => setShowDesmos((x) => !x)}
          >
            Desmos Graphing
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
          <Button
            variant="alert"
            className="submit"
            onClick={() => setShowResults((x) => !x)}
          >
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
        {showCalculator && <Calculator />}
        {showNotes && <Notes />}
        {showDesmos && <Desmos />}
      </div>
    </div>
  );
}
