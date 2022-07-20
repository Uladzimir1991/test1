import { useEffect } from 'react';
/* eslint-disable */
export function useCountViewsHook(count, setCount) {
  useEffect(() => {
    if (count >= 1000 && count < 10000) {
      setCount(`${`${count}`.slice(0, 1)}k`);
    } else if (count >= 10000 && count < 100000) {
      setCount(`${`${count}`.slice(0, 2)}k`);
    } else if (count >= 100000 && count < 1000000) {
      setCount(`${`${count}`.slice(0, 3)}k`);
    } else if (count >= 1000000) {
      setCount(`${`${count}`.slice(0, 1)}m`);
    } else {
      setCount(count);
    }
  }, [count]);
  return count;
}
