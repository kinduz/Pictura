import React from 'react';
import { Flex } from 'antd';

const NotFoundPage = () => {
  return (
    <Flex dir="column" gap={2}>
      <span>Oops...</span>
      <span>It seems you&apos;re here cause this page does not exist...</span>
    </Flex>
  );
};

export default NotFoundPage;
