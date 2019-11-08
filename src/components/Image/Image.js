import React from 'react';

export default ({ alt, ...props }) => <img alt={alt || ''} {...props} />;
