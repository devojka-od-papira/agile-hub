import React from 'react'
import cx from 'classnames'
import Input from '../input'
import Button from '../button'
import Typography from '../typography'

import styles from './ForgetPassword.module.scss'

const ForgetPassword = () => {
  return (
        <div className={styles.forgetPassword}>
            <Input placeholder="User name" id="user" type="text" />
            <Input placeholder="Password" id="pass" type="password" />
            <Input placeholder="Confirm Password" id="pass" type="password" />
            <Button>
                <Typography variant="h4">Submit</Typography>
            </Button>
        </div>
  )
}

export default ForgetPassword
