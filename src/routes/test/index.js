import { h } from 'preact';
import style from './style.css';

const Test = (props) => {
	const index = props.index;
	const offset = props.offset;
	const type = props.type;
	const question = props.question;

	const answers = [1,2,3,4,5];

	const handleClick = (event) => {
		console.log(event);
	};

	return (
		<article
			key={index}
			className={style.test}>
			<p>{offset + index}. {question}</p>
			<div className={style.buttonWrap}>
				{
					answers.map((answer, buttonIndex) => {
						return (
							<button
								key={buttonIndex}
								className={style.button}
								onClick={(event) => handleClick(event)} >
								{answer}점
							</button>
						)
					})
				}
			</div>								
		</article>
	)
};

export default Test;