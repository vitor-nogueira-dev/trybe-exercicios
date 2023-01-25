import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";


const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}
// const color = criarCor();
// const t = [];
// const a = ['white', 'black', 'red', 'green', 'blue', 'yellow'];
// a.push(criarCor());

// console.log(a);

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "NEXT_COLOR": 
      return {
        ...state,
        index: state.index === state.colors.length ? state.index -1 : state.index + 1,
      }
    case "PREVIOUS_COLOR": 
      return {
        ...state,
        index: state.index === 0 ? 0 : state.index - 1,
      }
    case "RANDOM_COLOR":
      // const color = criarCor();
      return {
        ...state,
        // colors: state.colors.push(criarCor())
        colors: [...state.colors, criarCor()],
        index: state.colors.length - 1,
      }
    default:
      return state;
  }
}

const store = createStore(reducer, composeWithDevTools());

const container = document.querySelector('#container');
const display = document.querySelector('#value');
const btnPrevious = document.querySelector('#previous');
const btnNext = document.querySelector('#next');
const btnRandomColors = document.querySelector('#randomColor');

btnNext.addEventListener('click', () => {
  const actionNext = { type: 'NEXT_COLOR'};
  store.dispatch(actionNext);
  console.log('next');
})

btnPrevious.addEventListener('click', () => {
  const actionPrevious = { type: 'PREVIOUS_COLOR'};
  store.dispatch(actionPrevious)
  console.log('previous');
})

btnRandomColors.addEventListener('click', () => {
  const actionRandom = { type: 'RANDOM_COLOR' }
  store.dispatch(actionRandom);
})
store.subscribe(() => {
  const globalState = store.getState();
  const { colors, index } = globalState;
  const currentColor = colors[index]
  display.innerHTML = currentColor;
  container.style.backgroundColor = currentColor;
})


