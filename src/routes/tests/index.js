import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import style from './style.css';
import questions from '../../assets/jsons/questions.json';
import Test from '../../components/test';

const Tests = () => {
  const [types, setTypes] = useState([]);
  const [answers, setAnswers] = useState([]);
	const [pageNo, setPageNo] = useState(1);
	const offset = (pageNo - 1) * 20;
  const questionsCount = 20;

  const handleClick = () => {
    if (answers.length === pageNo * 20) {
      if (answers.length === questions.length) {
        let arr, sum;
        for(let i = 1;i <= 9;i++) {
          sum = 0;
          arr = answers.filter(answer => answer.type === i);
          arr.forEach(answer => sum += answer.value);
        }
      } else {
        setPageNo(pageNo + 1);
      }
    } 
  };

  const selectAnswer = (obj) => {
    const arr = answers.filter(answer => answer.order !== obj.order);
    arr.push(obj);
    setAnswers(arr);
  }

  useEffect(() => {
    console.log(answers);
  }, [answers])

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