import React from 'react';
import Options from './Options';
import { useQuiz } from '../context/QuizContext';

export default function Question() {
	const { curQuestion } = useQuiz();
	const { question } = curQuestion;
	return (
		<div>
			<h4>{question}</h4>
			<Options />
		</div>
	);
}
