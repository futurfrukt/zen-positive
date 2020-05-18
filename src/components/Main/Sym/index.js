import React, { useMemo } from 'react';
import { ANIMATION_MAX_TIME, ANIMATION_MIN_TIME, CHAR_SPACER } from '../constants';

export const Sym = ({ children, index, onAnimationIteration }) => {
  const style = useMemo(() => ({
    animationDuration: `${ANIMATION_MIN_TIME + Math.random() * (ANIMATION_MAX_TIME - ANIMATION_MIN_TIME)}ms`,
    visibility: children === CHAR_SPACER ? 'hidden' : undefined,
  }), [children]);
  return <span onAnimationIteration={() => onAnimationIteration(index)} style={style}>{children}</span>;
};
