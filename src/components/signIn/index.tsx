import React from 'react'
import Input from '../input'
import Button from '../button'
import Typography from '../typography'

import styles from './SignIn.module.scss'

const SignIn = () => {
  return (
        <div className={styles.signIn}>
            <Input placeholder='Email' id='user' type='email' />
            <Input placeholder='Password' id='pass' type='password' />
            <Button>
                <Typography variant='h4'>Sign in</Typography>
            </Button>
            <div className={styles.hr}> </div>
        </div>
  )
}

export default SignIn
