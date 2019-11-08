import React from 'react';
import cx from 'classnames';

import styles from './Input.module.css';

export const BaseInput = ({ value, ...props }) => (
  <input type="text" value={value} {...props} />
);

export default ({ className, props }) => (
  <BaseInput className={cx(className, styles.container)} {...props} />
);
