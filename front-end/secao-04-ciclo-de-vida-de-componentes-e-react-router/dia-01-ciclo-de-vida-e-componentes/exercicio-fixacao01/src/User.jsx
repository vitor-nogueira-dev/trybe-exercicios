import React, { Component } from 'react'

export default class User extends Component {
  
  render() {
    const { loading, user, } = this.props;
    const carregando = 'Carregando...'
    console.log(user);
  
    return (
      <div>
        { loading ? (<div>{carregando}</div>) : 
          user.map(({picture, name, email, dob }) => (
            // console.log(name.first)

            <div key={name.first}>
              <img src={picture.thumbnail} alt={name.first}/>
              <p>`${name.first}${name.last}`</p>
              <p>{email}</p>
              <p>{dob.age}</p>
            </div>
          ))
        }
      </div>
    )
  }
}
// foto, nome, email e idade do usuário.