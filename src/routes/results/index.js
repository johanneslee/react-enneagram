import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import style from './style.css';
import Result from '../../components/result';

const Results = () => {
	return (
		<main className={style.results}>
      <section className={style.articleContainer}>
        <Result />
      </section>
    </main>
	)
};

export default Results;