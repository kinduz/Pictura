import { useState } from 'react';

export const useAntdStep = () => {
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return {
    current,
    next,
    prev,
  };
};
