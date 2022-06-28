import React from "react";
// import Button from './Button';

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

const listCustomer = [
    {
        id: 1,
        name: 'Daniela Farina',
        skills: ['vôlei', 'ciclismo', 'yoga'],
    },
    {
        id: 2,
        name: 'Marcio Antonio',
        skills: ['datatalker', 'dota', 'python'],
    },
    {
        id: 3,
        name: 'Tiago Faria',
        skills: ['rpg', 'machine learning', 'minecraft'],
    },
    {
        id: 4,
        name: 'Douglas Monteiro',
        skills: ['discussões', 'java', 'inglês'],
    },
]

const App = () => {

    const renderCustomers = (customer, index) => {
        return (
            <div key={`customer-${customer.id}`}>
                <li key={`customer-${customer.id}`}>{customer.name}</li>
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
                {listCustomer.map(renderCustomers)}

            </ul>
        </div>
    );
};

export default App;