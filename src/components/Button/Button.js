import React, { forwardRef } from 'react';
import cx from 'classnames';
import styles from './Button.module.css';

const Button = ({ children, className, fullWidth, ...props }, ref) => (
  <button
    className={cx(styles.container, className, {
      [styles.fullWidth]: fullWidth,
    })}
    {...props}
    ref={ref}
  >
    {children}
  </button>
);

export default forwardRef(Button);
