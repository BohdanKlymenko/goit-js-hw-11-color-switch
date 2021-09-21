export const getRefs = () => {
  return {
    body: document.querySelector('body'),
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
  };
};
