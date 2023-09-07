import React from 'react';
import { useQuiz } from '../context/QuizContext';

export default function NextButton() {
	const { dispatch, answer, index, numQuestions } = useQuiz();
	if (answer === null) return;
	if (index + 1 < numQuestions)
		return (
			<button
				className='btn btn-ui'
				onClick={() => dispatch({ type: 'nextQuestion', payLoad: 1 })}
			>
				Next
			</button>
		);
	if (answer === null) return;
	if (index + 1 === numQuestions)
		return (
			<button
				className='btn btn-ui'
				onClick={() => dispatch({ type: 'finish' })}
			>
				Finish Quiz
			</button>
		);
}
