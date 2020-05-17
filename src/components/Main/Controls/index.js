import React, { useEffect } from 'react';
import { IS_FULLSCREEN_AVAILABLE } from '../../../utils';
import cls from "classnames";
import './index.css';

const toggleFullscreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};

export const Controls = ({ className, onReload, isReloading }) => {
  useEffect(() => {
    const handleKeyDown = ({ code } = {}) => code === 'KeyF' && toggleFullscreen();
    document.addEventListener('keydown', handleKeyDown, { passive: true });
    return () => {
      document.removeEventListener('keydown', handleKeyDown, { passive: true });
    }
  }, []);

  return <div className={cls('controls', className)}>
    { IS_FULLSCREEN_AVAILABLE && <button onClick={toggleFullscreen}><span>f</span>ullscreen</button> }
    <button disabled={isReloading} onClick={onReload}>next</button>
  </div>
};