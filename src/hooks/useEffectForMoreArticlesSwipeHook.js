import { useEffect } from 'react';

export function useEffectForMoreArticlesSwipeHook(
  windowSize,
  setReposition,
  newArr
) {
  useEffect(() => {
    const MoreArticlesBlock = document.querySelector('.MoreArticlesBlock');
    if (windowSize.width > MoreArticlesBlock.clientWidth) {
      setReposition(0);
    }

    if (newArr.length === 5 || newArr.length === 4) {
      if (
        windowSize.width < MoreArticlesBlock.clientWidth &&
        windowSize.width > 727
      ) {
        setReposition(MoreArticlesBlock.clientWidth - windowSize.width + 60);
      }
    }

    if (newArr.length === 5) {
      if (
        windowSize.width < MoreArticlesBlock.clientWidth &&
        windowSize.width <= 727
      ) {
        setReposition(
          (MoreArticlesBlock.clientWidth - windowSize.width) * 0.68
        );
      }
    }

    if (newArr.length === 4) {
      if (
        windowSize.width < MoreArticlesBlock.clientWidth &&
        windowSize.width <= 727
      ) {
        setReposition((MoreArticlesBlock.clientWidth - windowSize.width) * 1.1);
      }
    }

    if (newArr.length === 3) {
      if (
        windowSize.width < MoreArticlesBlock.clientWidth + 40 &&
        windowSize.width > 727
      ) {
        setReposition(MoreArticlesBlock.clientWidth - windowSize.width + 60);
      }

      if (
        windowSize.width < MoreArticlesBlock.clientWidth &&
        windowSize.width < 727
      ) {
        setReposition(MoreArticlesBlock.clientWidth - windowSize.width + 20);
      }
    }

    if (newArr.length === 2) {
      if (
        windowSize.width <= MoreArticlesBlock.clientWidth - 10 &&
        windowSize.width < 727
      ) {
        setReposition((MoreArticlesBlock.clientWidth - windowSize.width) * 2);
      }
    }
  }, [windowSize.width, setReposition, newArr.length]);
}
