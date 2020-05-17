export const IS_FULLSCREEN_AVAILABLE = Boolean(document.exitFullscreen && document.documentElement && document.documentElement.requestFullscreen);

export const getRandomInt = (max) => Math.floor(Math.random() * max);