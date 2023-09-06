import React from 'react';
import Question from './Question';

export default function Options({ curQuestion, dispatch, curAnswer }) {
	const { options, correctOption, points } = curQuestion;
	const hasAnswered = curAnswer !== null;
	return (
		<div className='options'>
			{options.map((option, i) => (
				<button
					className={`btn btn-option ${i === curAnswer ? 'answer' : ''} ${
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
