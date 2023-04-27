import React, { type FC, type ReactNode } from 'react'
import cx from 'classnames'

import styles from './Button.module.scss'

interface ButtonProps {
  children?: ReactNode
  classname?: string
}

const Button: FC<ButtonProps> = ({ children, classname }) => {
  return (
        <button
            type='button'
            className={cx(styles.button, classname)}
        >
            {children}
        </button>
  )
}

export default Button
