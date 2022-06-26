import { useEffect, useState } from 'react';
/* eslint-disable */
export const UseEffectPageShow = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(typeof window !== 'undefined');
    if (typeof window !== 'undefined') {
      function handlePageShow() {
        setCount(count + 1);
      }
      window.addEventListener('pageshow', handlePageShow);
      handlePageShow();
      return () => window.removeEventListener('pageshow', handlePageShow);
    }
  }, []);
  return count;
};
