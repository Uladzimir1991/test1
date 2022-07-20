import { useEffect } from 'react';

export function useEffectRepositionHook(props) {
  const visionCertainAmountArticles =
    props.windowSize.width > 1024 && props.moreArticles === true;

  useEffect(() => {
    if (visionCertainAmountArticles) {
      props.setMoreArticles(false);
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [props.windowSize.width]);

  useEffect(() => {
    const blockImg = document.querySelector('.blockImg');

    const SwipeConditionTabletToMobile =
      props.reposition < -blockImg.clientWidth + props.windowSize.width &&
      blockImg.clientWidth > props.windowSize.width &&
      props.windowSize.width < 1024;

    const SwipeConditionMobile =
      props.reposition < -blockImg.clientWidth + props.windowSize.width &&
      props.windowSize.width <= 550;

    if (props.windowSize.width > 1024 && props.showFilter === false) {
      props.setShowFilter(true);
    }

    if (props.windowSize.width < 1024 && props.moreArticles === false) {
      props.setMoreArticles(true);
    }

    if (props.reposition >= -1) {
      props.setReposition(0);
    }

    if (SwipeConditionTabletToMobile) {
      props.setReposition(-blockImg.clientWidth + props.windowSize.width - 60);
    }

    if (SwipeConditionMobile) {
      props.setReposition(-blockImg.clientWidth + props.windowSize.width - 40);
    }
  }, [props]);
  return props.setReposition;
}
