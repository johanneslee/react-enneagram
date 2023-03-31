import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import style from './style.css';
import Result from '../../components/result';

const Results = (props) => {
  const answers = JSON.parse(props.answers);
  let types = [], temp;
  for(let i = 1;i <= 9;i++) {
    temp = 0;

    answers
      .filter(answer => answer.type === i)
      .forEach(answer => {
        temp += answer.value
      });

    types.push(temp);
  }
  const type = types.indexOf(Math.max(...types)) + 1;

	return (
		<main className={style.results}>
      <section className={style.articleContainer}>
        <Result type={type} />
      </section>
    </main>
	)
};

export default Results;