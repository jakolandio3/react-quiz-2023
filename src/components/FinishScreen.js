import React from 'react';
import { useQuiz } from '../context/QuizContext';

export default function FinishScreen() {
	const { points, totalScore, highScore, dispatch } = useQuiz();
	const percentage = (points / totalScore) * 100;

	let emoji;
	if (percentage === 100) emoji = '🏅';
	if (percentage >= 80 && percentage < 100) emoji = '🥳';
	if (percentage >= 50 && percentage < 80) emoji = '🥉';
	if (percentage > 0 && percentage < 50) emoji = '🙈';
	if (percentage === 0) emoji = '💩';
	return (
		<>
			<p className='result'>
				<span>{emoji} </span> You scored <strong> {points} </strong>/{' '}
				{totalScore} ({Math.ceil(percentage)}%)
			</p>
			<p className='highscore'>(highscore: {highScore} points)</p>
			<button
				className=' btn btn-ui'
				onClick={() => dispatch({ type: 'reset' })}
			>
				Restart Quiz?..
			</button>
		</>
	);
}
