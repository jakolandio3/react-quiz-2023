import React from 'react';

export default function StartScreen({ questions, dispatch }) {
	return (
		<div className='start'>
			<h2>Welcome to the React Quiz</h2>
			<h3>{questions} questions to test your react memory</h3>
			<button
				className='btn btn-ui'
				onClick={() => dispatch({ type: 'start' })}
			>
				Let's start
			</button>
		</div>
	);
}
