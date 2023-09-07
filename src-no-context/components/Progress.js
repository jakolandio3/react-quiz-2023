import React from 'react';

export default function Progress({
	index,
	numQuestions,
	points,
	totalPoints,
	answer,
}) {
	return (
		<header className='progress'>
			<progress max={numQuestions} value={index + +(answer !== null)} />
			<p>
				Question <strong>{index + 1}</strong> / {numQuestions}
			</p>

			<p>
				{points} / {totalPoints} Points
			</p>
		</header>
	);
}
