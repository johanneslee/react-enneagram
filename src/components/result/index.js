import { h } from 'preact';
import { useContext } from 'preact/hooks';
import style from './style.css';
import enneagrams from '../../assets/jsons/enneagram.json';
import { AppContext } from '../app';

const Result = () => {
  const [type, setType] = useContext(AppContext);
  const enneagram = enneagrams.filter(enneagram => enneagram.type === type)[0];
  
	return (
		<article className={style.result}>
      <h1>{`${enneagram.type}. ${enneagram.name[0].korean}`}</h1>
      <p>{enneagram.description}</p>								
    </article>
	)
};

export default Result;