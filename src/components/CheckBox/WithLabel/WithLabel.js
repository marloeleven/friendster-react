import React from 'react';
import cx from 'classnames';

import Label from 'components/Label';
import CheckBox from 'components/CheckBox';

import styles from './WithLabel.module.css';

export default ({ children, className, ...props }) => {
  return (
    <Label className={cx(styles.container, className)}>
      <CheckBox {...props} />
      {children}
    </Label>
  );
};
