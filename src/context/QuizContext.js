import { createContext, useContext } from 'react';
import { useEffect, useReducer } from 'react';

const QuizContext = createContext();

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
			throw new Error('action is unknown');
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

function QuizProvider({ children }) {
	const [
		{ questions, status, index, answer, points, highScore, secondsRemaining },
		dispatch,
	] = useReducer(reducer, initialState);
	const totalPoints = questions
		.map((question) => question.points)
		.reduce((a, b) => a + b, 0);
	const curQuestion = questions[index];

	const numQuestions = questions.length;
	useEffect(() => {
		async function fetchQuestions() {
			try {
				const res = await fetch(
					'https://api-for-react-quiz.onrender.com/api/questions'
				);
				const data = await res.json();
				dispatch({ type: 'dataReceived', payLoad: data });
			} catch (error) {
				dispatch({ type: 'dataFailed' });
			}
		}
		fetchQuestions();
	}, []);

	return (
		<QuizContext.Provider
			value={{
				status,
				index,
				answer,
				points,
				highScore,
				secondsRemaining,
				numQuestions,
				totalPoints,
				dispatch,
				questions,
				curQuestion,
			}}
		>
			{children}
		</QuizContext.Provider>
	);
}

export { useQuiz, QuizProvider };

function useQuiz() {
	const context = useContext(QuizContext);
	if (context === undefined) return;
	return context;
}
