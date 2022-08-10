import { h } from 'preact';
import style from './style.css';

const Test = (props) => {
  const index = props.index;
  const offset = props.offset;
  const type = props.type;
  const question = props.question;
  const answers = [1,2,3,4,5];

	return (
    <article key={index}>
      <div>
        <p>{offset + index}. {question}</p>
      </div>
      <div className={style.btnWrap}>
        {
          answers.forEach(answer => (
            <label className={style.formControl}>
              <input type="radio" name="answer" value={answer} />
              {answer}점
            </label>
          ))
        }
      </div>								
    </article>
	)
};

export default Test;