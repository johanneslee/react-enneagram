import { h } from 'preact';
import { useState } from 'preact/hooks';
import style from './style.css';

const Test = (props) => {
	const index = props.index;
	const offset = props.offset;
	const type = props.type;
	const question = props.question;

	const [answer, setAnswers] = useState(0);

	const options = [1,2,3,4,5];

	const handleClick = (option) => {
		setAnswers(option);
		props.onSelectAnswer(type, answer);
	};

	return (
		<article
			key={index}
			className={style.test}>
			<p>{offset + index}. {question}</p>
			<div className={style.buttonWrap}>
				{
					options.map((option, buttonIndex) => {
						return (
							<button
								key={buttonIndex}
								className={(answer === option) ? style.buttonOn : style.buttonOff}
								onClick={() => handleClick(option)} >
								{option}점
							</button>
						)
					})
				}
			</div>								
		</article>
	)
};

export default Test;