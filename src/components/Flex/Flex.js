import React, { forwardRef } from 'react';
import cx from 'classnames';
import styles from './Flex.module.css';

export default forwardRef(
  ({ className, children, column = false, ...props }, ref) => {
    return (
      <div
        className={cx(styles.container, className, {
          [styles.column]: column,
        })}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);
