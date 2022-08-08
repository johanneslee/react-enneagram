import { h } from 'preact';
import { useState, useRef } from 'preact/hooks';
import style from './style.css';
import questions from '../../assets/jsons/questions.json';

const Test = () => {
  const ref = useRef(null);

	const [answers, setAnswers] = useState([]);
	const [pageNo, setPageNo] = useState(1);
	const [perPage, setPerPage] = useState(20);
	const offset = (pageNo - 1) * perPage;

	const handleClick = event => {
    const index = event.target.attributes.index.value;
    const value = event.target.value;

		let _answers = answers;
		_answers[index] = value;
		setAnswers(_answers);

    const btnActives = document.getElementsByClassName('btnActive');
    console.log(ref.current.classList);
    for (let btnActive in btnActives) {
      console.log(btnActive);
      console.log(btnActive.target);
      btnActive.classList.replace('btnActive', 'btn');
    }

    event.target.className = 'btnActive';
	}

	return (
		<div className={style.test}>
			<div className={style.articleWrap}>
				{
					questions
						.slice(offset, offset + perPage)
						.map(({ type, question }, index) => {
              return (
                <article ref={ref} key={index}>
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
                            index={index}
                            value={value}
                            onClick={event => handleClick(event)}
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