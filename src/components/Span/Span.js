import React, { memo } from 'react';

export default memo(({ children, className, ...props }) => {
  return (
    <span className={className} {...props}>
      {children}
    </span>
  );
});
