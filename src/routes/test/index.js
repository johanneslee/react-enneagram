import { h } from 'preact';
import { useState } from 'preact/hooks';
import style from './style.css';
import questions from '../../assets/jsons/questions.json';

const Test = () => {
	const [answers, setAnswers] = useState([]);
	const [pageNo, setPageNo] = useState(1);
	const [perPage, setPerPage] = useState(20);
	const offset = (pageNo - 1) * perPage;

	const handleClick = function (index, value) {
		let _answers = answers;
		_answers[index] = value;
		setAnswers(_answers);
		console.log(answers);
	}

	return (
		<div className={style.test}>
			<div className={style.articleWrap}>
				{
					questions
						.slice(offset, offset + perPage)
						.map(({ type, question }, index) => (
							<article key={index}>
								<div>
									<p>{offset + index + 1}. {question}</p>
								</div>
								<div className={style.btnWrap}>
									<button className={style.btn} onClick={handleClick}>1점</button>
									<button className={style.btn} onClick={handleClick}>2점</button>
									<button className={style.btn} onClick={handleClick}>3점</button>
									<button className={style.btn} onClick={handleClick}>4점</button>
									<button className={style.btn} onClick={handleClick}>5점</button>
								</div>								
							</article>
						))
				}
			</div>
			<div className={style.buttonWrap}>
				<button>Next</button>
			</div>
		</div>
	)
};

export default Test;