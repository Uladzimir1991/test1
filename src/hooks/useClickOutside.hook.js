import { useEffect } from 'react';

export const useClickOutsideHook = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClick, false);

    return () => {
      document.removeEventListener('click', handleClick, false);
    };
  });
};
