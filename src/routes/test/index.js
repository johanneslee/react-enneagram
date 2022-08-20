import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import style from './style.css';

const Test = (props) => {
	const order = props.order;
	const type = props.type;
	const question = props.question;
	const onSelectAnswer = props.onSelectAnswer;

	const [answer, setAnswers] = useState(0);

	const options = [1,2,3,4,5];

	const handleClick = (option) => {
		setAnswers(option);
	};

	useEffect(() => {		
		if(answer > 0) {
			onSelectAnswer(order, type, answer);
		}
	}, [answer]);

	return (
		<article
			key={order}
			className={style.test}>
			<p>{`${order}. ${question}`}</p>
			<div className={style.buttonWrap}>
			{
				options.map((option, buttonIndex) => {
					return (
						<button
							key={buttonIndex}
							className={(answer === option) ? style.buttonOn : style.buttonOff}
							onClick={() => handleClick(option)} >
							{`${option}점`}
						</button>
					)
				})
			}
			</div>								
		</article>
	)
};

export default Test;