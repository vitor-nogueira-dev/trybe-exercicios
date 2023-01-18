// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

// A linha afterEach(() => jest.clearAllMocks()); faz com que, após cada teste, nosso mock seja limpo, ou seja, no caso acima, garante que após o teste o fetch não seja mais um mock. Isso é bem útil para que não haja interferência entre um teste e outro.
afterEach(() => jest.clearAllMocks());

// É importante termos o async em it('fetch joke', async () => {, para que se possa utilizar await findByText onde estamos dizendo ao nosso teste: espere até que consiga encontrar esse texto no dom ou uma mensagem de erro por limite de tempo;
describe('fetches a joke', () => {
  // A constante joke cria um objeto similar ao que é retornado da API;
  // const joke = {
  //   id: '7h3oGtrOfxc',
  //   joke: 'Whiteboards ... are remarkable.',
  //   status: 200,
  // };
  // // // O jest.spyOn espiona as chamadas à função fetch do objeto global. É por meio deste objeto global que conseguimos usar qualquer função do sistema, por exemplo, a função parseInt;
  // // jest.spyOn(global, 'fetch');
  // // // Quando a função fetch for chamada, em vez de fazer uma requisição a uma API externa, será chamado nosso mock. Repare que para cada .then utilizamos .mockResolvedValue e simulamos o retorno que o fetch teria.
  // // global.fetch.mockResolvedValue({
  // //   // aqui seria o response.json()
  // //   json: jest.fn().mockResolvedValue(joke),
  // // });

  // // Outra forma de mock do fetch:
  // // // Nesse exemplo estamos dizendo que global.fetch agora é uma função mockada com jest.fn que retorna uma Promise, e na primeira vez que ela for resolvida, deve retornar um objeto com uma outra função json que também é uma Promise, que quando resolvida retorna sua piada.
  // // global.fetch = jest.fn(() => Promise.resolve({
  // //   json: () => Promise.resolve(joke),
  // // }));

  // // Outra forma de mockar o fetch
  // global.fetch = jest.fn(async () => ({
  //   json: async () => joke
  // }));

  // render(<App />);
  // const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  // // As funções toBeCalledTimes e toBeCalledWith servem para garantir respectivamente, o número de chamadas ao nosso fetch e que ele foi chamado com os argumentos corretos.
  // expect(renderedJoke).toBeInTheDocument();
  // expect(global.fetch).toHaveBeenCalledTimes(1);
  // expect(global.fetch).toHaveBeenCalledWith(
  //   'https://icanhazdadjoke.com/',
  //   { headers: { Accept: 'application/json' } },
  // );

  it('fetches a new joke when button is clicked', async () => {
    const jokeOne = {
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200,
    };

    const jokeTwo = {
      id: 'xXSv492wPmb',
      joke: 'What is red and smells like blue paint? Red paint!',
      status: 200,
    };

    jest.spyOn(global, 'fetch');

    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(jokeOne),
    })

    render(<App />);
    const btnNewJoke = screen.getByRole('button', { name: 'New Joke' });

    expect(await screen.findByText(jokeOne.joke)).toBeInTheDocument();
    expect(screen.queryByText(jokeTwo.joke)).not.toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledTimes(1);

    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(jokeTwo),
    })

    userEvent.click(btnNewJoke);

    expect(await screen.findByText(jokeTwo.joke)).toBeInTheDocument();
    expect(screen.queryByText(jokeOne.joke)).not.toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalledTimes(2);

  });
  
});