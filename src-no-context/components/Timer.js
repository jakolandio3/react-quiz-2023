import React, { useEffect } from 'react';

export default function Timer({ dispatch, secondsRemaining }) {
	const mins = Math.floor(secondsRemaining / 60);
	const seconds = secondsRemaining % 60;
	useEffect(
		function () {
			const id = setInterval(function () {
				// console.log('tick');
				dispatch({ type: 'tick' });
			}, 1000);
			return () => clearInterval(id);
		},
		[dispatch]
	);
	return (
		<div className='timer'>
			{mins >= 10 ? mins : `0${mins}`}:{seconds >= 10 ? seconds : `0${seconds}`}
		</div>
	);
}
