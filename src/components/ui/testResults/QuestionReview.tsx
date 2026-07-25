import PracticeTest from "@/data/practice-test.json"
import "@/style/question-review.css"
import { Arrow1 } from "icons-by-heynendo";
import QuestionIndicator from "../QuestionIndicator";
import { useState } from "react";

type QuestionState = {
  answer: string;
  flagged: boolean;
};

type Props = {
    selectedAnswers: Record<number, QuestionState>;
}

export default function QuestionReview({selectedAnswers}: Props){

    const [showDetails, setShowDetails] = useState(false)

    const questionCards = PracticeTest.map((question, index) =>{
        return(
            <div className={`question-review-card ${showDetails}`}>
                <div className="card-header"
                    onClick={() => setShowDetails(x => !x)}
                >
                    <div className="title">
                        <QuestionIndicator 
                            correct = {true}
                        />
                        <h3>Question {index+1}</h3>
                        <span className="topic">{question.subject}</span>
                    </div>
                    <div className="dropdown">
                        <Arrow1 
                            className="arrow"
                        />
                    </div>
                </div>
                {showDetails &&
                <div className="card-body">
                    <span>{question.question}</span>
                </div>
                }
            </div>
        )
    })

    return(
        <div className="question-review">
            {questionCards}
        </div>
    )
}