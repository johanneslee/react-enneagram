import { h } from 'preact';
import { useState } from 'preact/hooks';
import style from './style.css';
import questions from '../../assets/jsons/questions.json';

const Test = () => {
	const [answers, setAnswers] = useState([]);
	const [pageNo, setPageNo] = useState(1);
	const [perPage, setPerPage] = useState(20);
	const offset = (pageNo - 1) * perPage;

	const handleClick = (index, value) => {
		let _answers = answers;
		_answers[index] = value;
		setAnswers(_answers);
	}

	return (
		<div className={style.test}>
			<div className={style.articleWrap}>
				{
					questions
						.slice(offset, offset + perPage)
						.map(({ type, question }, index) => {
              return (
                <article key={index}>
                  <div>
                    <p>{offset + index + 1}. {question}</p>
                  </div>
                  <div className={style.btnWrap}>
                    {
                      [1,2,3,4,5].map(value => {
                        return (
                          <button
                            key={value}
                            className={style.btn}
                            onClick={() => handleClick(index, value)}
                          >{value}점</button>
                        )
                      })
                    }
                  </div>								
                </article>
              )
            })
				}
			</div>
			<div className={style.buttonWrap}>
				<button>Next</button>
			</div>
		</div>
	)
};

export default Test;