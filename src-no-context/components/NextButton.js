import React from 'react';

export default function NextButton({
	dispatch,
	curAnswer,
	index,
	numQuestions,
}) {
	if (curAnswer === null) return;
	if (index + 1 < numQuestions)
		return (
			<button
				className='btn btn-ui'
				onClick={() => dispatch({ type: 'nextQuestion', payLoad: 1 })}
			>
				Next
			</button>
		);
	if (curAnswer === null) return;
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
