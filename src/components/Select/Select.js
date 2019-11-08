import React from 'react';

const Select = ({ label, children, ...props }) => {
  return <select {...props}>{children}</select>;
};

const Option = ({ children, ...props }) => (
  <option {...props}>{children}</option>
);

const Group = ({ children, ...props }) => (
  <optgroup {...props}>{children}</optgroup>
);

export default Object.assign(Select, { Option, Group });
