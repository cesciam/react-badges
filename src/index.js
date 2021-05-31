// const element = document.createElement('h1');
// element.innerText = 'Hello, platzi badges';
// const container = document.getElementById('app');
// container.appendChild(element);
// const element = <h1>Hello platzi Badges react</h1>
// const element = React.createElement(__tipo__, __Atributos__, __innerText_O_Hijos__)
// const element = React.createElement('h1', {}, 'Hola soy los children')
// const element = React.createElement('a', {href: 'https://www.google.com'}, 'Ir a google')
// const element = React.createElement('h1', {}, `Hola soy ${name}`)
// const jsx = <h1>Hola soy, {name}</h1>
// const element = React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'Hola soy Cris'),
//     React.createElement('p', {}, 'Fullstack in progress y estoico.')
// );
// ReactDOM.render(__qué__, __donde__);
import React from 'react'; // create element
import ReactDOM from  'react-dom'; // append child
import Badge from './components/Badge';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

const name = 'Cris'
const container = document.getElementById('app');
const element = (
    <div>
        <h1>Hola soy Cris</h1>
        <p>Fullstack in progress</p>
    </div>
);
ReactDOM.render(<Badge 
    firstName = 'Cristopher' 
    lastName = 'Soto' jobTitle ='Backend developer' 
    twitter= 'cesc_iam' 
    avatarUrl= 'https://www.gravatar.com/avatar?d=identicon'
    />, container);