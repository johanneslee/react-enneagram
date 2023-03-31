import { h } from 'preact';
import { useState } from 'preact/hooks';
import { route } from 'preact-router';
import style from './style.css';
import questions from '../../assets/jsons/questions.json';
import Test from '../../components/test';

const Tests = () => {
  const [answers, setAnswers] = useState([]);
	const [pageNo, setPageNo] = useState(1);
	const offset = (pageNo - 1) * 20;

  const handleClick = () => {
    if (pageNo === 1) {
      route(`/results?answers=${JSON.stringify(answers)}`);
    } else {
      setPageNo(pageNo + 1);
    }
  };

  const selectAnswer = (obj) => {
    const currAnswers = answers;
    currAnswers.push(obj);
    setAnswers(currAnswers);
  }

	return (
		<main className={style.tests}>
      <section className={style.articleContainer}>
        {
          questions
            .slice(offset, offset + 20)
            .map(({ type, question }, index) => {
              const order = offset + (index + 1);
              return (
                <Test
                  key={order}
                  order={order}
                  type={type}
                  question={question}
                  onSelectOption={selectAnswer}
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