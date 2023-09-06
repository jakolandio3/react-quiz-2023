import { useReducer, useState } from 'react';
const initialState = { count: 0, step: 1 };

function reducer(curState, action) {
	console.log(curState, action);
	switch (action.type) {
		default:
			throw new Error('unknown action');
		case 'inc':
			return { count: curState.count + curState.step, step: curState.step };
		case 'dec':
			return { count: curState.count - curState.step, step: curState.step };
		case 'targetValue':
			return { count: action.payload, step: curState.step };
		case 'targetStepValue':
			return { ...curState, step: action.payload };
		case 'reset':
			return initialState;
	}
}

function DateCounter() {
	// const [count, setCount] = useState(0);
	const [state, dispatch] = useReducer(reducer, initialState);
	// const [step, setStep] = useState(1);
	const { count, step } = state;
	// This mutates the date object.
	const date = new Date('june 21 2027');
	date.setDate(date.getDate() + count);

	const dec = function () {
		dispatch({ type: 'dec' });
		// setCount((count) => count - 1);
		// setCount((count) => count - step);
	};

	const inc = function () {
		dispatch({ type: 'inc' });
		// setCount((count) => count + 1);
		// setCount((count) => count + step);
	};

	const defineCount = function (e) {
		dispatch({ type: 'targetValue', payload: Number(e.target.value) });
		// setCount(Number(e.target.value));
	};

	const defineStep = function (e) {
		dispatch({ type: 'targetStepValue', payload: Number(e.target.value) });
		// 	setStep(Number(e.target.value));
	};

	const reset = function () {
		dispatch({ type: 'reset' });
		// setCount(0);
		// 	setStep(1);
	};

	return (
		<div className='counter'>
			<div>
				<input
					type='range'
					min='0'
					max='10'
					value={step}
					onChange={defineStep}
				/>
				<span>{step}</span>
			</div>

			<div>
				<button onClick={dec}>-</button>
				<input value={count} onChange={defineCount} />
				<button onClick={inc}>+</button>
			</div>

			<p>{date.toDateString()}</p>

			<div>
				<button onClick={reset}>Reset</button>
			</div>
		</div>
	);
}
export default DateCounter;
