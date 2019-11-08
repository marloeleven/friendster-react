import React from 'react';

import Flex from 'components/Flex';
import Button from 'components/Button';

export default props => {
  return (
    <section
      className="profile-banner hero is-medium is-primary is-bold"
      {...props}
    >
      <Flex>Header</Flex>
    </section>
  );
};
