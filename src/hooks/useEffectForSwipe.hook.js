import { useEffect } from 'react';

export function useEffectForSwipeHook(
  windowSize,
  setReposition,
  newArrLengthSimilarPrj
) {
  useEffect(() => {
    const blockImg = document.querySelector('.blockImg');

    if (newArrLengthSimilarPrj === 3) {
      if (windowSize.width > blockImg.clientWidth + 40) {
        setReposition(0);
      }

      if (
        windowSize.width < blockImg.clientWidth + 40 &&
        windowSize.width > 727
      ) {
        setReposition(blockImg.clientWidth - windowSize.width + 60);
      }

      if (windowSize.width < blockImg.clientWidth && windowSize.width < 727) {
        setReposition(blockImg.clientWidth - windowSize.width + 20);
      }
    }

    if (newArrLengthSimilarPrj === 2) {
      if (windowSize.width > blockImg.clientWidth) {
        setReposition(0);
      }

      if (
        windowSize.width <= blockImg.clientWidth - 10 &&
        windowSize.width < 727
      ) {
        setReposition((blockImg.clientWidth - windowSize.width) * 2);
      }
    }
  }, [
    windowSize.width,
    setReposition,
    newArrLengthSimilarPrj.length,
    newArrLengthSimilarPrj,
  ]);
}
