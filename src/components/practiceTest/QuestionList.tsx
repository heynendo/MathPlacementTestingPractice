import Button from "../ui/Button";

type QuestionState = {
  answer: string;
  flagged: boolean;
};

type Props = {
  numQuestions: number;
  currentQuestion: number;
  setCurrentQuestion: Function;
  selectedAnswers: Record<number, QuestionState>;
};

export default function QuestionList({
  numQuestions,
  currentQuestion,
  setCurrentQuestion,
  selectedAnswers,
}: Props) {
  return (
    <div className="question-list">
      {Array.from({ length: numQuestions }, (_, index) => (
        <Button
          size="square"
          variant={
            index === currentQuestion
              ? "light"
              : selectedAnswers[index]?.answer
                ? "primary"
                : "secondary"
          }
          key={index}
          onClick={() => setCurrentQuestion(index)}
        >
          {index + 1}
        </Button>
      ))}
    </div>
  );
}
