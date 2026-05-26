import TestIntro from "@/components/practiceTest/TestIntro";
import "@/style/practice-test.css";
import { useState } from "react";
import TestResults from "@/components/practiceTest/TestResults";
import TestView from "@/components/practiceTest/TestView";

type QuestionState = {
  answer: string;
  flagged: boolean;
};

export default function PracticeTest() {
  const [startTest, setStartTest] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, QuestionState>
  >({});

  return (
    <div className="practice-test">
      {showResults ? (
        <TestResults selectedAnswers={selectedAnswers} />
      ) : startTest ? (
        <TestView
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
          setShowResults={setShowResults}
        />
      ) : (
        <TestIntro setStartTest={setStartTest} />
      )}
    </div>
  );
}
