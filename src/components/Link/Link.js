import React from 'react';

export default ({ href = '#', children, ...props }) => (
  <a href={href} {...props}>
    {children}
  </a>
);
