import { useEffect, useState } from "react";

const Game = ({onCorrectAnswer}) => {
    const [question, setQuestion] = useState({});

    const makeNewQuestion = () => { 
        const value1 = Math.floor(Math.random() * 100);
        const value2 = Math.floor(Math.random() * 100);
        const value3 = Math.floor(Math.random() * 100);
        return {
            value1: Math.floor(Math.random() * 100),
            value2: Math.floor(Math.random() * 100),
            value3: Math.floor(Math.random() * 100),
            proposedAnswer: Math.floor(Math.random() * 3) + value1 + value2 + value3
        }
    }

    useEffect ( () => { console.log('aici1');
        setQuestion(makeNewQuestion());
    }, [])

    const refresh = () => { console.log('aici2');
        setQuestion(makeNewQuestion());
    }

    const evaluateAnswer = (givenAnswer) => {
        const correctAnswer = question.value1 + question.value2 + question.value3;
        return (
            (correctAnswer === question.proposedAnswer && givenAnswer === 'true') ||
            (correctAnswer !== question.proposedAnswer && givenAnswer === 'false') 
        )
    }

    const handleAnswer = (event) => {
        const correct = evaluateAnswer(event.target.name);
        correct ? onCorrectAnswer(true) : onCorrectAnswer(false);
        refresh();
    }


    return (
        <div>
            <div className="equation">
                <p className="text">{`${question.value1} + ${question.value2} + ${question.value3} = ${question.proposedAnswer}`}</p>
            </div>
            <button onClick={handleAnswer} name='true'>True</button>
            <button onClick={handleAnswer} name='false'>False</button>
        </div>
    )
}

export default Game;