import React, { useState, useCallback, useEffect } from "react";
import { getRandomInt } from '../../utils';
import './index.css';
import '../../styles/animations.css';
// import cls from "classnames";
import {
  INITIAL_LINE,
  LINES,
  RELOAD_DELAY,
} from './constants';
import { Sym } from './Sym';

export const Lines = () => {
  const [lines, setLines] = useState([ ...LINES ]);
  const [line, setLine] = useState(INITIAL_LINE);
  const [nextLine, setNextLine] = useState(line);
  const [phase, setPhase] = useState(false);
  const isReloading = line !== nextLine;

  const startReloadText = useCallback(() => {
    if (isReloading) {
      return;
    }
    const nextLines = (lines.length > 1 ? lines : LINES).filter(l => l !== line);
    setLines(nextLines);
    setNextLine(nextLines[getRandomInt(nextLines.length)]);
  }, [lines, setLines, line, phase, setPhase, nextLine, setNextLine]);

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

  return <div className={'main'}>
    <div className={'lines'}>
      <code className={'line'}>
        { line.split('').map((s, i) => (<Sym
          key={`${i}-${s}-${phase}`}
          index={i}
          onAnimationIteration={onAnimationIteration}
        >{s}</Sym>)) }
      </code>
    </div>
    <div className={'controls'}>
      <button disabled={isReloading} onClick={startReloadText}>next</button>
    </div>
  </div>;
}