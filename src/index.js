import './sass/main.scss';
import { getRefs } from "./js/getRefs"
const refs = getRefs

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


// const bodyRef = document.querySelector('body')
// const startRef = document.querySelector('[data-action="start"]')
// const stopRef = document.querySelector('[data-action="stop"]')
let intervalID = null;


const bodyColor = ()=> {refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];}

refs.startBtn.addEventListener('click', () => {
    intervalID = setInterval(bodyColor, 1000);
refs.startBtn.disabled= true})

refs.stopBtn.addEventListener('click', () => {
    clearInterval(intervalID)
    // bodyRef.style.backgroundColor = 'silver'
    refs.stopBtn.disabled = false
})