import React, { useState } from 'react';
import cx from 'classnames';
import styles from './CheckBox.module.css';
import Label from './WithLabel';

import noop from 'utils/noop';

const CheckBox = ({
  checked: defaultValue = false,
  onChange = noop,
  className,
  ...props
}) => {
  const [checked, setChecked] = useState(defaultValue);

  const onChangeHandler = () => {
    setChecked(!checked);
    onChange(!checked);
  };

  return (
    <input
      type="checkbox"
      className={cx(styles.container)}
      checked={checked}
      onChange={onChangeHandler}
      {...props}
    />
  );
};

export default Object.assign(CheckBox, { Label });
