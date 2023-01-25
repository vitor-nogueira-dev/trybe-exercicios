import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from "@redux-devtools/extension";

const INITIAL_STATE = {
  status: 'offline',
  theme: 'dark',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark',
      }
    case "CHANGE_STATUS":
      return {
        ...state,
        status: state.status === 'offline' ? 'online' : 'offline',
      }
  }
  return state;
}

const store = createStore(reducer, composeWithDevTools());

const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');
const spanDisplay = document.getElementById('status'); 

themeButton.addEventListener('click', () => {
  const actionTheme = { type: 'CHANGE_THEME' }
  store.dispatch(actionTheme);
});

statusButton.addEventListener('click', () => {
  const actionStatus = { type: 'CHANGE_STATUS' }
  store.dispatch(actionStatus);
});

store.subscribe(() => {
  const { theme, status } = store.getState();

  themeButton.innerHTML = `${theme} mode`
  if (theme === 'dark') {
    document.body.style.backgroundColor = '#333';
    document.body.style.color = '#fff';
  } else {
    document.body.style.backgroundColor = '#fff';
    document.body.style.color = '#333';
  }
  spanDisplay.innerHTML = status;
  statusButton.innerHTML = `Ficar ${status === 'online' ? 'offline' : 'online'}`;
})

