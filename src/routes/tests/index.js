import { h } from 'preact';
import { useContext, useState } from 'preact/hooks';
import { route } from 'preact-router';
import style from './style.css';
import questions from '../../assets/jsons/questions.json';
import Test from '../../components/test';
import { AppContext } from '../../components/app';

const Tests = () => {
  const [answers, setAnswers] = useState([]);
	const [pageNo, setPageNo] = useState(1);
  const [type, setType] = useContext(AppContext);
	const offset = (pageNo - 1) * 20;

  const handleClick = () => {
    if (pageNo === 1) {
      let results = [], value;
      for(let i = 1;i <= 9;i++) {
        value = 0;
        answers
          .filter(answer => answer.type === i)
          .forEach(answer => {
            value += answer.value
          });

          results.push(value);
      }
      const result = results.indexOf(Math.max(...results)) + 1;

      setType(result);
      route('/results');
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