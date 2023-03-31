import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import style from './style.css';
import { Options } from '../../datas/Options';
import { Answer } from '../../datas/Answer';

const Result = (props) => {
  const type = props.type;

	return (
		<>{type}</>
	)
};

export default Result;