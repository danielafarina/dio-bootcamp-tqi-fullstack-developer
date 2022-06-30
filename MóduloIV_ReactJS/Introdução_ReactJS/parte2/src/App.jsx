import React from "react";
import mock from './mock';
import Button from './components/Button';

// import Button from './Buttonn';

// const buttonA = <button>Histórico dos clientes</button>;
// const buttonB = <button>Cadastrar cliente</button>; 

// const hasCustomer = true;

// const App = () => {
//     return (
//         <div>
//             <p>DIO</p>
//             <p>Bem vindo!</p>
//             <p>Webpack</p>
//             <br />
//             {hasCustomer ? (
//                 <div>
//                     Clique no botão abaixo para visualizar o histórico dos clientes
//                     <br />
//                     {buttonA}
//                 </div>
//             )  :  (
//                 <div>
//                     Clique abaixo para cadastrar cliente
//                     <br />
//                     {buttonB}
//                 </div>
//             )}
//             <br />
//             <Button />
            
//             {buttonB}
//         </div>
//     );
// };



// OU ENTÃO PODEMOS FAZER COM ARROW FUNCTIONS, PRA FICAR MAIS LEGÍVEL:

// const App = () => {
//     const renderShowHistory = () => (
//         <div>
//             Clique no botão abaixo para visualizar o histórico dos clientes
//             <br />
//             {buttonA}
//         </div>
//     );

//     const renderAddCustomer = () => (
//         <div>
//             Clique abaixo para cadastrar cliente
//             <br />
//             {buttonB}
//         </div>
//     );

//     return (
//         <div>
//             <p>DIO</p>
//             <p>Bem vindo!</p>
//             <p>Webpack</p>
//             <br />
//             {hasCustomer ? renderShowHistory()  :  renderAddCustomer()}
//         </div>
//     );
// };



// LISTAS E CHAVES


const App = () => {

    const handleClick =  (id) => {
        console.log('delete')
        alert(`ID do cliente: ${id}`)
    }

    const renderCustomers = (customer, index) => {
        return (
            <div key={`customer-${customer.id}`}>
                <li>{customer.name}   <Button onClick={() => handleClick(customer.id)}>Delete</Button> </li>
                {customer.skills.map(renderSkills)}

            </div>
            
        )
    }

    const renderSkills = (skill, index) =>  {
        return (
            <div style={ { paddingLeft: '30px' } }>
                <li>{skill}</li>
            </div>
        )
    }

    return (
        <div>
            <p>DIO</p>
            <p>Bem vindo!</p>
            <br />
            <ul>
                {mock.map(renderCustomers)}

            </ul>
        </div>
    );
};



// MANIPULANDO EVENTOS PARTE 1

// const showEvent = (e) => {
//     console.log('evento clicado');
//     console.log(e);
// }
// const Button = <button onClick={showEvent}>Mostrar evento</button>;   // poderia passar a função em "onClick" assim: {() => showEvent}, mas preferiu passar só a assinatura.

// const App = () => {

//     const handleChange = (e) => {
//         const { value } = e.target;
//         console.log(value);
//     }

//     return (
//         <div>
//             <p>DIO</p>
//             <p>Bem-vindo</p>
//             <input onChange={handleChange} />
//             {Button}
//         </div>
//     )
// }


// MANIPULANDO EVENTOS PARTE 2

// const App = () => {

//     const name = 'DIO';

//     const handleChange = (e) => {
//         const { value } = e.target;
//         console.log(value);
//     }

//     const showEvent = (e) => {
//         console.log('evento clicado');
//         console.log(e);
//         alert(name);
//     }
    
//     const Button = <button onClick={showEvent}>Mostrar evento</button>;

//     return (
//         <div>
//             <p>DIO</p>
//             <p>Bem-vindo</p>
//             <input onChange={handleChange} />
//             {Button}
//         </div>
//     )
// }




export default App;