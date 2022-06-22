// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import Button from './Button.jsx';

// const user = {
//         firstName: 'Erva',
//         lastName: 'Daninha'
// };

// function formatName(user) {
//         return user.firstName + ' ' + user.lastName               
// }

// const h1 = <h1>Hello, {formatName(user)}!</h1>

// const h2 = 'Bootcamp TQI Fullstack Developer'

// function soma(a,b) {
//         alert(a + b)
// }

// const App = () => {        // Separamos o JSX a seguir em múltiplas linhas para melhorar a legibilidade. Mesmo que não seja obrigatório, quando fizer isso, também recomendamos colocar dentro de parênteses para evitar as armadilhas da inserção automática de ponto-e-vírgula.
//          return (
//                 <div className='teste'>
//                         {h1}
//                          {h2}
//                          <Button onClick={() => soma(2,3)} name="Clique Aqui" />
//                 </div>         
//         ) // tudo que eu quiser colocar dentro de um jsx, mas que se refira ao js, eu preciso colocar dentro de chaves.        
// }


// const rootElement = ReactDOM.createRoot(document.getElementById('root'));
// rootElement.render(<App />, rootElement) // primeiro argumento: qual componente vc quer renderizar? segundo argumento: em que lugar da página?

import React, { Component } from "react"; // se for utilizar classe, é obrigatório incluir o Component.
import ReactDOM from "react-dom/client";
import "./index.css";

class App extends Component {

        constructor(props) {
                super(props); //herda as props da classe App

                this.state = {
                        clock: 1000,
                        cup: 'water'
                }
        }

        componentDidMount() { // aqui o botão vai mudar com o tempo.
                window.setTimeout( () => {
                        this.setState({
                                cup: 'juice'
                        });

                }, 3000);
                

        }

        changeCup = () => { // aqui o botão muda com o click
                this.setState({
                        cup: 'soda'

                }); // fazer apenas this.state.copo = 'refrigerante' não vai alterar a aplicação
        } 

        render() {
                const { clock, cup } = this.state // desestruturando o objeto state da classe App
                return(
                        <div>
                                <h1>{clock}</h1>
                                <button onClick={() => this.changeCup()}><h1>{cup}</h1></button>
                        </div>
                )
        }

}

// const App = () => {

//         return (
//                 <div className="App">
//                         Hello World
//                 </div>
//         )
// };

const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<App />, rootElement);