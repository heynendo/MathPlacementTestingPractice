import { useNavigate } from "react-router-dom";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Card from "../ui/Card";
import "@/style/test-intro.css";
import QuestionIndicator from "../ui/QuestionIndicator";

const TOPICS = [
  "Number & Quantity",
  "Algebra",
  "Functions",
  "Statistics & Probability",
  "Modeling",
];

type Props = {
  setStartTest: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function TestIntro({ setStartTest }: Props) {
  const navigate = useNavigate();

  const topicList = TOPICS.map((x) => <Badge>{x}</Badge>);

  return (
    <Card
      className="test-intro"
      title="About the Practice Test"
      footer={
        <div className="options">
          <Button variant="light" onClick={() => navigate("/")}>
            Back to Home
          </Button>
          <Button variant="primary" onClick={() => setStartTest(true)}>
            Start Now
          </Button>
        </div>
      }
    >
      <div className="content">
        This practice test is curated to help prepare you for an upcoming
        placement test like the ACT or SAT. The test will be 30 minutes long. Do
        not leave the page while taking the test, you may lose your progress and
        need to restart. This test covers each of the topics listed below. Click
        on any of them to learn more
        <div className="topics">{topicList}</div>
        After completing the test, you'll receive a full report with your
        scores, level or preparation in each subject, and question explanations.
        You'll have an option to download the full report or have it sent to
        your email.
      </div>
    </Card>
  );
}
