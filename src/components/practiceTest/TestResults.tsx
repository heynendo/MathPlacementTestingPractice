import Card from "../ui/Card";
import TopicBreakdown from "../ui/testResults/TopicBreakdown";
import PracticeTestQuestions from "@/data/practice-test.json";
import "@/style/test-results.css"
import "@/style/topic-breakdown.css"
import Badge from "../ui/Badge";
import QuestionReview from "../ui/testResults/QuestionReview";

type QuestionState = {
  answer: string;
  flagged: boolean;
};

type Props = {
  selectedAnswers: Record<number, QuestionState>;
}


export default function TestResults({selectedAnswers}: Props){

    //calcuate test results
    const answersCorrect = PracticeTestQuestions.filter((question, index) => {
        const selected = selectedAnswers[index];
        return selected?.answer === String(question.answer);
    }).length;
    //calculate estimate ACT score
    const ActScore = Math.trunc((answersCorrect / PracticeTestQuestions.length) * 36)

    //rank performance (excellent, strong, average, needs improvement)
    const rankPerformance = ActScore > 30 ? "Excellent" 
                          : ActScore > 25 ? "Strong"
                          : ActScore > 18 ? "Average"
                          : "Needs Improvement"

    // group questions by subject and calculate percent correct per subject
    const topicBreakdown = PracticeTestQuestions.reduce((acc, question, index) => {
    const subject = question.subject;
    const isCorrect = selectedAnswers[index]?.answer === String(question.answer);

    if (!acc[subject]) {
        acc[subject] = { correct: 0, total: 0 };
    }

    acc[subject].total += 1;
    if (isCorrect) acc[subject].correct += 1;

    return acc;
    }, {} as Record<string, { correct: number; total: number }>);

    return(
        <div className="test-results">
            <Card
                title="Test Results"
                className="main-results"
            >
                <h2>{answersCorrect} / {PracticeTestQuestions.length}</h2>
                <Badge variant="lg">
                    <div>
                        <span>Estimate ACT Score:</span>
                        <span className="score">{ActScore - 1} - {ActScore + 1}</span>
                    </div>

                </Badge>
                <span>{rankPerformance}</span>
            </Card>
            <Card title="Topic Breakdown" className="topic-breakdown">
            {Object.entries(topicBreakdown).map(([subject, { correct, total }]) => 
                <TopicBreakdown 
                    subject={subject}
                    correct={correct}
                    total={total}
                />
            )}
            </Card>
            <Card
                title="Question Review"
                className="question-review"
            >
                <QuestionReview
                    selectedAnswers={selectedAnswers}
                />
                {/**
                 * loop through questions and add card question-review-card
                 */}
            </Card>
        </div>
    )
}