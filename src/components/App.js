import { useEffect, useReducer } from 'react';
import Header from './Header';
import Main from './Main';
import Loader from './Loader';
import Error from './Error';
import StartScreen from './StartScreen';
import Question from './Question';
import NextButton from './NextButton';
import Progress from './Progress';
import FinishScreen from './FinishScreen';
import Footer from './Footer';
import Timer from './Timer';

const SECS_PER_QUESTION = 30;
const initialState = {
	questions: [],
	// loading, error, ready, active, finished
	status: 'loading',
	index: 0,
	answer: null,
	points: 0,
	highScore: 0,
	secondsRemaining: null,
};

function reducer(state, action) {
	const question = state.questions.at(state.index);
	switch (action.type) {
		default:
			throw new Error('action is unknowen');
		case 'dataReceived':
			return { ...state, questions: action.payLoad, status: 'ready' };
		case 'dataFailed':
			return { ...state, status: 'error' };
		case 'start':
			return {
				...state,
				status: 'active',
				secondsRemaining: state.questions.length * SECS_PER_QUESTION,
			};
		case 'newAnswer':
			return {
				...state,
				answer: action.payLoad,
				points:
					action.payLoad === question.correctOption
						? state.points + question.points
						: state.points,
			};
		case 'nextQuestion':
			return { ...state, index: state.index + action.payLoad, answer: null };
		case 'finish':
			return {
				...state,
				status: 'finished',
				highScore:
					state.points > state.highScore ? state.points : state.highScore,
			};
		case 'reset':
			return {
				...state,
				status: 'ready',
				index: 0,
				answer: null,
				points: 0,
				secondsRemaining: null,
			};
		case 'tick':
			return {
				...state,
				secondsRemaining:
					state.secondsRemaining > 0 ? state.secondsRemaining - 1 : 0,
				status: state.secondsRemaining <= 0 ? 'finished' : state.status,
			};
	}
}

export default function App() {
	const [
		{ questions, status, index, answer, points, highScore, secondsRemaining },
		dispatch,
	] = useReducer(reducer, initialState);
	const totalPoints = questions
		.map((question) => question.points)
		.reduce((a, b) => a + b, 0);

	const numQuestions = questions.length;
	useEffect(
		() =>
			async function () {
				try {
					const res = await fetch('http://localhost:8000/questions');
					const data = await res.json();
					dispatch({ type: 'dataReceived', payLoad: data });
				} catch (error) {
					dispatch({ type: 'dataFailed' });
				}
			},
		[]
	);
	return (
		<div className='app'>
			<Header />
			<Main>
				{status === 'loading' && <Loader />}
				{status === 'error' && <Error />}
				{status === 'ready' && (
					<StartScreen questions={numQuestions} dispatch={dispatch} />
				)}
				{status === 'active' && (
					<>
						<Progress
							answer={answer}
							index={index}
							numQuestions={numQuestions}
							points={points}
							totalPoints={totalPoints}
						/>
						<Question
							curQuestion={questions[index]}
							dispatch={dispatch}
							curAnswer={answer}
						/>
						<Footer>
							<Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
							<NextButton
								dispatch={dispatch}
								curAnswer={answer}
								index={index}
								numQuestions={numQuestions}
							/>
						</Footer>
					</>
				)}
				{status === 'finished' && (
					<FinishScreen
						score={points}
						totalScore={totalPoints}
						highScore={highScore}
						dispatch={dispatch}
					/>
				)}
			</Main>
		</div>
	);
}
