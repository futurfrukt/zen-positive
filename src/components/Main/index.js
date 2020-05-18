import React, { useState, useCallback, useEffect, useContext } from 'react';
import { getRandomInt } from '../../utils';
import './index.css';
import '../../styles/animations.css';
import {
  INITIAL_LINE,
  LINES,
  RELOAD_DELAY,
} from './constants';
import { Sym } from './Sym';
import { Controls } from './Controls';
import { Top } from './Top';
import cls from "classnames";
import { ControlsContext } from '../App';

export const Main = () => {
  const [lines, setLines] = useState([ ...LINES ]);
  const [line, setLine] = useState(INITIAL_LINE);
  const [nextLine, setNextLine] = useState(line);
  const isReloading = line !== nextLine;

  const startReloadText = useCallback(() => {
    if (isReloading) {
      return;
    }

    const uniqLines = (lines.length > 1 ? lines : LINES).filter(l => l !== line);
    setLines(uniqLines);

    const uniqLine = uniqLines[getRandomInt(uniqLines.length)];
    setNextLine(uniqLine);
  }, [lines, setLines, line, nextLine, setNextLine]);

  useEffect(() => {
    const reloadTimer = setTimeout(startReloadText, RELOAD_DELAY);
    return () => {
      clearTimeout(reloadTimer);
    }
  }, [line]);

  const onAnimationIteration = useCallback((index) => {
    if (line[index] !== nextLine[index]) {
      const mergedLine = line.substring(0, index) + nextLine[index] + line.substring(index + 1);
      setLine(mergedLine);
    }
  }, [line, setLine, nextLine]);

  const { visible: barVisible } = useContext(ControlsContext);
  return <div className={'main'}>
    <Top
      className={cls('main__bar', { 'main__bar_hidden': !barVisible })}
    />
    <div className={'lines'}>
      <code className={'line'}>
        { line.split('').map((s, i) => (<Sym
          key={`${i}-${s}`}
          index={i}
          onAnimationIteration={onAnimationIteration}
        >{s}</Sym>)) }
      </code>
    </div>
    <Controls
      className={cls('main__bar', { 'main__bar_hidden': !barVisible })}
      onReload={startReloadText}
    />
  </div>;
}