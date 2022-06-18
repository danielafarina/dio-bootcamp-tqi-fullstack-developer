import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Button from './Button.jsx';

const user = {
        firstName: 'Erva',
        lastName: 'Daninha'
};

function formatName(user) {
        return user.firstName + ' ' + user.lastName               
}

const h1 = <h1>Hello, {formatName(user)}!</h1>

const h2 = 'Bootcamp TQI Fullstack Developer'

function soma(a,b) {
        alert(a + b)
}

const App = () => {        // Separamos o JSX a seguir em múltiplas linhas para melhorar a legibilidade. Mesmo que não seja obrigatório, quando fizer isso, também recomendamos colocar dentro de parênteses para evitar as armadilhas da inserção automática de ponto-e-vírgula.
         return (
                <div className='teste'>
                        {h1}
                         {h2}
                         <Button onClick={() => soma(2,3)} name="Clique Aqui" />
                </div>         
        ) // tudo que eu quiser colocar dentro de um jsx, mas que se refira ao js, eu preciso colocar dentro de chaves.        
}


const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<App />, rootElement) // primeiro argumento: qual componente vc quer renderizar? segundo argumento: em que lugar da página?
