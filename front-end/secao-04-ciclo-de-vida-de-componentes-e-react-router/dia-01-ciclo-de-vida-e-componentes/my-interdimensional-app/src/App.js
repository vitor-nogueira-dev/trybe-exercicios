import React, { Component } from 'react'
import './App.css'
import DadJoke from './components/DadJoke'

export default class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     characters: [],
  //   }
  // };

  // componentDidMount = () => { // aqui poderia ter uma função diferente fetchCharacters() por exemplo, e aí teríamos que chamá-la dentro da componentDidMount, ou podemos fazer o fetch direto nessa funçào atual.
  //   fetch('https://rickandmortyapi.com/api/character')
  //   .then(response => response.json())
  //   .then(data => {
  //     this.setState({characters: data.results})
  //   })
  // };

  render() {
    // const { characters } = this.state;
    // console.log(characters)
    return (
      <div className="App">
        <DadJoke />
        {/* <h1>
          Rick and Morty Characters
        </h1>
        <div className="body">
          {characters.map(({ name, image }) => {
              return (
                <div className="container" key={name}>
                  <h3>{name}</h3>
                  <img src={image} alt={name}/>
                </div>
              )
            })}
        </div> */}
      </div>
    )
  }
}
