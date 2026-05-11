import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { useState } from "react";
import "@/style/question-settings.css";

const DIFFICULTY_LEVELS = [1, 2, 3, 4, 5];
const TOPICS = [
  "Number & Quantity",
  "Algebra",
  "Functions",
  "Statistics & Probability",
  "Modeling",
];

export default function QuestionSettings() {
  const [questionTopics, setQuestionTopics] = useState<string[]>(TOPICS);
  const [questionDifficulty, setQuestionDifficulty] =
    useState<number[]>(DIFFICULTY_LEVELS);
  const [allTopics, setAllTopics] = useState(true);
  const [allDifficulty, setAllDifficulty] = useState(true);

  function handleTopicClick(topic: string) {
    if (topic === "all") {
      setQuestionTopics(TOPICS);
      setAllTopics(true);
      return;
    }
    if (allTopics) {
      setAllTopics(false);
      setQuestionTopics([topic]);
      return;
    }
    setAllTopics(false);
    setQuestionTopics((prev) => {
      const next = prev.includes(topic)
        ? prev.filter((t) => t !== topic)
        : [...prev, topic];
      return next.length === 0 ? TOPICS : next;
    });
  }

  function handleDifficultyClick(level: number) {
    if (level === -1) {
      setQuestionDifficulty(DIFFICULTY_LEVELS);
      setAllDifficulty(true);
      return;
    }
    if (allDifficulty) {
      setAllDifficulty(false);
      setQuestionDifficulty([level]);
      return;
    }
    setAllDifficulty(false);
    setQuestionDifficulty((prev) => {
      const next = prev.includes(level)
        ? prev.filter((d) => d !== level)
        : [...prev, level];
      return next.length === 0 ? DIFFICULTY_LEVELS : next;
    });
  }

  function SubmitQuestionData() {
    // ...
  }

  const topicOptions = TOPICS.map((topic) => (
    <button key={topic} onClick={() => handleTopicClick(topic)}>
      <Badge
        variant={
          !allTopics && questionTopics.includes(topic) ? "primary" : "secondary"
        }
      >
        {topic}
      </Badge>
    </button>
  ));

  const difficultyOptions = DIFFICULTY_LEVELS.map((level) => (
    <Button
      key={level}
      variant={
        !allDifficulty && questionDifficulty.includes(level)
          ? "primary"
          : "light"
      }
      onClick={() => handleDifficultyClick(level)}
    >
      {level}
    </Button>
  ));

  return (
    <Card
      className="question-settings"
      title="AI Question Generator Settings"
      footer={
        <Button variant="primary" onClick={() => SubmitQuestionData()}>
          Start Questions
        </Button>
      }
    >
      Select the topics and question difficulty you would like. You may select
      all, or individual topics, and any range of question difficulty.
      <div className="content">
        <div className="topics">
          Topics
          <div className="options">
            {topicOptions}
            <button onClick={() => handleTopicClick("all")}>
              <Badge variant={allTopics ? "primary" : "secondary"}>All</Badge>
            </button>
          </div>
        </div>
        <hr />
        <div className="difficulty">
          Question Difficulty
          <div className="options">
            {difficultyOptions}
            <Button
              variant={allDifficulty ? "primary" : "light"}
              onClick={() => handleDifficultyClick(-1)}
            >
              All
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
