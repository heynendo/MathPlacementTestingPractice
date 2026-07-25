import ProgressBar from "@/components/practiceTest/ProgressBar";
import "@/style/topic-breakdown.css"

type Props = {
    subject: string;
    correct: number;
    total: number;
}

export default function TopicBreakdown({subject, correct, total}: Props){
    const percent = Math.round((correct / total) * 100);
    return(
        <div key={subject} className="topic-breakdown-card">
            <h3>{subject} </h3>
            <div className="score">
                <div className="container">
                    <span>{correct} / {total} </span>
                    <span className="percent">({percent}%)</span>
                </div>
                <ProgressBar
                    value={correct}
                    total={total}
                    label={false}
                    theme="light"
                />
            </div>
        </div>
    )
}