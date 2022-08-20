import { h } from 'preact';
import { useState } from 'preact/hooks';
import style from './style.css';
import questions from '../../assets/jsons/questions.json';
import Test from '../../components/test';

const Tests = () => {
  /*
  Questions 받아서 State로 보유
  Answers 받아서 State로 보유
  Types 계산해서 이동
  */
  const [answers, setAnswers] = useState([]);
	const [pageNo, setPageNo] = useState(1);
	const offset = (pageNo - 1) * 20;

  const handleClick = () => {
    setPageNo(pageNo + 1);
  };

  const handleAnswer = (order, type, answer) => {
    console.log(answers.filter(answer => {
      return answer.order === order;
    }));
  }

	return (
		<main className={style.tests}>
      <section className={style.articleContainer}>
        {
          questions
            .slice(offset, offset + 20)
            .map(({ type, question }, index) => {
              return (
                <Test
                  key={index}
                  order={offset + (index + 1)}
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