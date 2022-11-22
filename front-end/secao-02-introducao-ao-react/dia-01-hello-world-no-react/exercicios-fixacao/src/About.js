import React from 'react';

class App extends React.Component {
  render() {
    return (
    <div className='dados'>
      <h1>Vitor</h1>
      <p>Olá, tenho 25 anos. Sou estudante de desenvolvimento web full stack na Trybe. Atualmente estou no módulo de Frontend, e este é o meu primeiro exercício em React.</p>
      <h2>Minhas Habilidades</h2>
      <ul className='list-habilidades'>
        <li>CSS</li>
        <li>Hofs</li>
        <li>HTML</li>
        <li>FlexBox</li>
        <li>Async/await</li>
        <li>Unix e Bash</li>
        <li>Git e GitHub</li>
        <li>Testes Unitários</li>
        <li>JavaScript Assíncrono</li>
      </ul>
    </div>
    )}
}

export default App;
