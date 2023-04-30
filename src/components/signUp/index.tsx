import React from 'react';
import Input from '../input';
import Button from '../button';
import Typography from '../typography';

import styles from './SignUp.module.scss';

const SignUn = () => {
	return (
		<div className={styles.signUp}>
			<Input placeholder="Name" id="user" type="text" />
			<Input placeholder="Last name" id="user" type="text" />
			<Input placeholder="Email" id="user" type="email" />
			<Input placeholder="Password" id="pass" type="password" />
			<Input placeholder="Repeat password" id="pass" type="password" />
			<Button>
				<Typography variant="h4">Sign up</Typography>
			</Button>
			<div className={styles.hr}> </div>
		</div>
	);
};

export default SignUn;
