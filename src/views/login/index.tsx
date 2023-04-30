import React from 'react';

import styles from './LogIn.module.scss';
const Login = () => {
	const drops = new Array(24).fill(1);
	return (
		<div className={styles.wrapper}>
			<div className={styles.drops}>
				{drops.map((_, i) => {
					return <div key={i} className={styles.drop}></div>;
				})}
			</div>
		</div>
	);
};

export default Login;
