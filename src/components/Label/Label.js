import React from 'react';
import cx from 'classnames';

import styles from './Label.module.css';

export default ({ children, className, ...props }) => (
  <label className={cx(styles.container, className)} {...props}>
    {children}
  </label>
);
