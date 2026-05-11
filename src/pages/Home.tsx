import { useNavigate } from "react-router-dom";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import "@/style/home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Math Placement Testing Practice</h1>
      <span>
        Master the ACT, SAT, and other standardized testing math sections with
        practice tests and AI powered question generation. Created for students
        to get extra practice and build high scores through repititon.
      </span>
      <div className="options">
        <Card
          title="Take A Practice Test"
          footer={
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate("/practice-test")}
            >
              Start Test
            </Button>
          }
        >
          Take a 30 question practice test and get a report with detailed
          question breakdowns and a rating in each category of questions.
        </Card>
        <Card
          title="AI Question Generator"
          footer={
            <Button
              variant="light"
              size="lg"
              onClick={() => navigate("/generate-questions")}
            >
              Generate Questions
            </Button>
          }
        >
          Generate custom practice questions tailored to specific topics,
          difficulty levels, and your learning goals.
        </Card>
      </div>
    </div>
  );
}
