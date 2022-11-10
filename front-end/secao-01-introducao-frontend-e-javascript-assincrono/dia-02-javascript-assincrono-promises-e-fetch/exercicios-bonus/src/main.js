console.log('teste');

const URL_API_DOG = 'https://dog.ceo/api/breeds/image/random'
const URL_API_CAT = 'https://aws.random.cat/meow'

const btnCat = document.querySelector('#btn-cat')
const btnDog = document.querySelector('#btn-dog')
const btnSurprise = document.querySelector('#btn-surprise')
const imgPet = document.querySelector('#img-pet')


const fetchDog = () => {
  fetch(URL_API_DOG)
  .then((response) => response.json())
  .then(({ message }) => {
    imgPet.src = message
  })
}
const fetchCat = () => {
  fetch(URL_API_CAT)
  .then((response) => response.json())
  .then(({ file }) => {
    imgPet.src = file
  })
}
const fetchSurprise = () => {
  Promise.any([
    fetch(URL_API_DOG),
    fetch(URL_API_CAT),
  ])
  .then((response) => response.json())
  .then((data) => {
    const firstURL = data.message || data.file;
    imgPet.src = firstURL;
  })
}

btnDog.addEventListener('click', fetchDog);
btnCat.addEventListener('click', fetchCat);
btnSurprise.addEventListener('click', fetchSurprise);
