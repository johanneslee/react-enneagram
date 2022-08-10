import { h } from 'preact';
import { useState, useRef } from 'preact/hooks';
import style from './style.css';
import questions from '../../assets/jsons/questions.json';
import Test from '../test';

const Tests = () => {
	const [pageNo, setPageNo] = useState(1);
	const [perPage, setPerPage] = useState(20);
	const offset = (pageNo - 1) * perPage;

  const handleClick = () => {
    setPageNo(pageNo + 1);
  };

	return (
		<div className={style.tests}>
      <div className={style.articleWrap}>
        {
          questions
            .slice(offset, offset + perPage)
            .map(({ type, question }, index) => {
              return (
                <Test
                  key={index + 1}
                  index={index + 1}
                  offset={offset}
                  type={type}
                  question={question}
                />
              )
            })
        }
      </div>
      <div className={style.buttonWrap}>
        <button
          className={style.buttonNext}
          onClick={() => handleClick()}
        >Next</button>
      </div>
    </div>
	)
};

export default Tests;