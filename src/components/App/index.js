import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Main } from "../Main";
import './index.css';
import throttle from 'lodash.throttle';
import cls from "classnames";

const THROTTLE_DELAY = 200;
const MOVE_HIDE_DELAY = 1500;
const CLICK_HIDE_DELAY = 2500;

export const ControlsContext = React.createContext({ hidden: true });

function App() {
  const [controlsVisible, setControlsVisible] = useState(false);
  const timerId = useRef(null);

  useEffect(() => {
    const toggleControls = throttle(({ visible = false, delay }) => {
      clearTimeout(timerId.current);
      setControlsVisible(visible);
      if (visible) {
        timerId.current = setTimeout(() => setControlsVisible(false), delay);
      }
    }, THROTTLE_DELAY);

    const handleMove = () => toggleControls({ visible: true, delay: MOVE_HIDE_DELAY, });

    const handleClick = () => toggleControls({ visible: !controlsVisible, delay: CLICK_HIDE_DELAY, });

    document.addEventListener('mousemove', handleMove, { passive: true });
    document.addEventListener('click', handleClick, { passive: true })
    return () => {
      document.removeEventListener('mousemove', handleMove, { passive: true });
      document.removeEventListener('click', handleClick, { passive: true })
    }
  }, [controlsVisible, setControlsVisible]);

  const providerValue = useMemo(() => ({ visible: controlsVisible }), [controlsVisible]);

  return (
    <ControlsContext.Provider value={providerValue}>
      <div className={cls('app', { 'app_noControls': !controlsVisible })}>
        <Main />
      </div>
    </ControlsContext.Provider>
  );
}

export default App;
