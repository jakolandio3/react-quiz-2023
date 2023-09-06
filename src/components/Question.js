import React from 'react';
import Options from './Options';

export default function Question({ curQuestion, dispatch, curAnswer }) {
	const { question, options } = curQuestion;
	return (
		<div>
			<h4>{question}</h4>
			<Options
				curQuestion={curQuestion}
				dispatch={dispatch}
				curAnswer={curAnswer}
			/>
		</div>
	);
}
