import { h } from 'preact';
import style from './style.css';

const Test = (props) => {

	return (
    <article key={props.key}>
      <div>
        <p>{props.index}. {props.question}</p>
      </div>
      <div className={style.btnWrap} />								
    </article>
	)
};

export default Test;