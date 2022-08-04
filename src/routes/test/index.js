import { h } from 'preact';
import { useState } from 'preact/hooks';
import style from './style.css';
import questions from '../../assets/jsons/questions.json';

const Test = () => {
	const [answers, setAnswers] = useState([]);
	const [pageNo, setPageNo] = useState(1);
	const [perPage, setPerPage] = useState(20);
	const offset = (pageNo - 1) * perPage;

	console.log(questions);
	questions.slice(offset, offset + perPage).map(element => console.log(element));

	return (
		<div class={style.test}>
			{
				questions
					.slice(offset, offset + perPage)
					.map(({ type, question }, index) => (
						<article key={index}>
							<div>
								<p>{offset + index + 1}. {question}</p>
							</div>
							<div className={style.btnWrap}>
								<button className={style.btn}>1점</button>
								<button className={style.btn}>2점</button>
								<button className={style.btn}>3점</button>
								<button className={style.btn}>4점</button>
								<button className={style.btn}>5점</button>
							</div>								
						</article>
					))
			}
		</div>
	)
};

export default Test;