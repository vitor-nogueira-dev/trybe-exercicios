// SELETORES
const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");

function eventoClick(event){ 
  event.preventDefault();
}
hrefLink.addEventListener('click', eventoClick);
inputCheckbox.addEventListener('click', eventoClick);

inputText.addEventListener('keypress', (event) =>{
  const vogalA = event.key;
  if (vogalA !== 'a'){
    event.defaultPrevented();
  }
  console.log('entrou');
});