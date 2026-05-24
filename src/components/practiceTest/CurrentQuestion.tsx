import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Radio from "../ui/Radio";
import PracticeTestQuestions from "@/data/practice-test.json";
import "@/style/current-question.css";

type QuestionState = {
  answer: string;
  flagged: boolean;
};

type Props = {
  currentQuestion: number;
  selectedAnswers: Record<number, QuestionState>;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  setSelectedAnswers: React.Dispatch<
    React.SetStateAction<Record<number, QuestionState>>
  >;
};

export default function CurrentQuestion({
  currentQuestion,
  selectedAnswers,
  setCurrentQuestion,
  setSelectedAnswers,
}: Props) {
  return (
    <Card
      className="current-question"
      title={
        <>
          {`Question ${currentQuestion + 1}`}
          <Badge>{PracticeTestQuestions[currentQuestion]?.subject}</Badge>
        </>
      }
      footer={
        <div className="options">
          <Button
            variant="light"
            onClick={() => setCurrentQuestion((x) => x - 1)}
          >
            Previous Question
          </Button>
          <Button
            variant="primary"
            onClick={() => setCurrentQuestion((x) => x + 1)}
          >
            Next Question
          </Button>
        </div>
      }
    >
      <div className="content">
        <span className="question">
          {PracticeTestQuestions[currentQuestion]?.question}
        </span>
        <Radio
          name={`question-${currentQuestion}`}
          options={
            PracticeTestQuestions[currentQuestion]?.options.map((opt, i) => ({
              label: opt,
              value: String(i),
            })) ?? []
          }
          value={selectedAnswers[currentQuestion]?.answer ?? ""}
          onChange={(val) =>
            setSelectedAnswers((prev) => ({
              ...prev,
              [currentQuestion]: {
                ...prev[currentQuestion],
                answer: val,
              },
            }))
          }
        />
      </div>
    </Card>
  );
}
