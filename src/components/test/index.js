import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import style from './style.css';
import { Options } from '../../datas/Options';
import { Answer } from '../../datas/Answer';

const Test = (props) => {
	const order = props.order;
	const type = props.type;
	const question = props.question;
	const onSelectOption = props.onSelectOption;

	const [option, setOption] = useState(0);

	const handleClick = (option) => {
		setOption(option);
	};

	useEffect(() => {
		if(option > 0) {
      const answer = new Answer(order, type, option);
			onSelectOption(answer);
		}
	}, [onSelectOption, option, order, type]);

	return (
		<article
			key={order}
			className={style.test}>
			<p>{`${order}. ${question}`}</p>
			<div className={style.buttonWrap}>
			{
				Options.map((value, buttonIndex) => {
					return (
						<button
							key={buttonIndex}
							className={(option === value) ? style.buttonOn : style.buttonOff}
							onClick={() => handleClick(value)} >
							{`${value}점`}
						</button>
					)
				})
			}
			</div>
		</article>
	)
};

export default Test;