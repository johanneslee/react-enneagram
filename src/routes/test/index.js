import { h } from 'preact';
import style from './style.css';

const Test = (props) => {
	const index = props.index;
	const offset = props.offset;
	const type = props.type;
	const question = props.question;
	const answers = [1,2,3,4,5];

	const handleChange = (event) => {
		console.log(event);
	};

	return (
		<article
			key={index}
			className={style.test}
		>
			<div>
				<p>{offset + index}. {question}</p>
			</div>
			<div className={style.buttonWrap}>
				{
					answers.map((answer, buttonIndex) => {
						return (
							<label
								key={buttonIndex}
								className={style.button}>
								<input
									type="radio"
									name="answer"
									value={answer}
									onChange={(event) => handleChange(event)} />
								{answer}점
							</label>
						)
					})
				}
			</div>								
		</article>
	)
};

export default Test;