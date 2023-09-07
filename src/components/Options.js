import React from 'react';
import { useQuiz } from '../context/QuizContext';

export default function Options() {
	const { curQuestion, dispatch, answer } = useQuiz();
	const { options, correctOption } = curQuestion;
	const hasAnswered = answer !== null;
	return (
		<div className='options'>
			{options.map((option, i) => (
				<button
					className={`btn btn-option ${i === answer ? 'answer' : ''} ${
						hasAnswered ? (i === correctOption ? 'correct' : 'wrong') : ''
					}`}
					key={option}
					disabled={hasAnswered}
					onClick={() => dispatch({ type: 'newAnswer', payLoad: i })}
				>
					{option}
				</button>
			))}
		</div>
	);
}
