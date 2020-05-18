import React from "react";
import cls from 'classnames';
import './index.css';

export const Top = ({ className }) => (<div className={cls('top', className)}>
  <a href={'https://github.com/futurfrukt/zen-positive'} target={'_blank'}>
    Zen Positive
    <span>github</span>
  </a>
</div>);