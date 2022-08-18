import { h } from 'preact';
import { useState } from 'preact/hooks';
import style from './style.css';
import questions from '../../assets/jsons/questions.json';
import Test from '../test';

const Tests = () => {
  /*
  Questions 받아서 State로 보유
  Answers 받아서 State로 보유
  Types 계산해서 이동
  */
	const [pageNo, setPageNo] = useState(1);
	const [perPage, setPerPage] = useState(20);
	const offset = (pageNo - 1) * perPage;

  const handleClick = () => {
    setPageNo(pageNo + 1);
  };

  const handleAnswer = (type, answer) => {
    
  }

	return (
		<main className={style.tests}>
      <section className={style.articleContainer}>
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
                  onSelectAnswer={handleAnswer}
                />
              )
            })
        }
      </section>
      <section className={style.buttonContainer}>
        <button
          className={style.buttonNext}
          onClick={() => handleClick()}
        >Next</button>
      </section>
    </main>
	)
};

export default Tests;