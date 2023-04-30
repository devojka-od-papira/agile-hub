import React, { type FC } from 'react';
import cx from 'classnames';

import styles from './Input.module.scss';

interface InputProps {
	placeholder: string;
	id: string;
	type: string;
	classname?: string;
}

const Input: FC<InputProps> = ({ placeholder, type, id, classname }) => {
	return (
		<input id={id} type={type} placeholder={placeholder} className={cx(styles.input, classname)} />
	);
};

export default Input;
