import './style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage
} from '../utils/updateUI';

const usersSelect = document.querySelector('#users-select');
// console.log(usersSelect);

const USERS_API = 'https://dummyjson.com/users';

fetch(USERS_API)
.then((response) => response.json())
.then((data) => fillUsersSelect(data.users))
// faça a lógica para pegar as informações das pessoas usuárias e preencher o select aqui.

usersSelect.addEventListener('change', ({ target }) => {
  clearPageData();
  fetch(`https://dummyjson.com/posts/user/${usersSelect.value}`)
  .then((response) => response.json())
  .then(({ posts }) => { fillPosts(posts);

  const [featuredPost] = posts
  const COMMENTS_API = `https://dummyjson.com/posts/${featuredPost.id}/comments`;

  return fetch(COMMENTS_API)
  })
  .then((response) => response.json())
  .then((data) => fillFeaturedPostComments(data.comments))
  .catch((error) => fillErrorMessage(error.message))
});
// faça a lógica para pegar as informações dos posts da pessoa selecionada e dos comentários do post destacado aqui.
// const urlPostId = `https://dummyjson.com/posts/${usersSelect.value}/comments`
// fetch(urlPostId).then((response) => response.json())
// .then((data) => console.log(data));