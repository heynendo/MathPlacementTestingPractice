
type Props = {
    correct: boolean;
}

export default function QuestionIndicator({correct = true}: Props){
    return (
        <div className={`question-indicator ${correct}`}>
            {correct ? 
            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.698242 2.966L4.5444 6.716L10.6982 0.716003" stroke="#1C9818" stroke-width="2"/>
            </svg>
            :
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.707031 0.707092L8.70703 8.70709M0.707031 8.70709L8.70703 0.707092" stroke="#BF0000" stroke-width="2"/>
            </svg>
            }
        </div>
    )
}