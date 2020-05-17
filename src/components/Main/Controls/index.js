import React, { useCallback, useEffect, useContext } from 'react';
import { IS_FULLSCREEN_AVAILABLE } from '../../../utils';
import cls from "classnames";
import './index.css';
import { ControlsContext } from '../../App';

export const Controls = ({ onReload, isReloading }) => {
  const { visible } = useContext(ControlsContext);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = ({ code } = {}) => code === 'KeyF' && toggleFullscreen();
    document.addEventListener('keydown', handleKeyDown, { passive: true });
    return () => {
      document.removeEventListener('keydown', handleKeyDown, { passive: true });
    }
  }, [toggleFullscreen]);

  return <div className={cls('controls', { 'controls_hidden': !visible })}>
    { IS_FULLSCREEN_AVAILABLE && <button onClick={toggleFullscreen}><span>f</span>ullscreen</button> }
    <button disabled={isReloading} onClick={onReload}>next</button>
  </div>
};