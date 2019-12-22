/* const element = document.createElement('h1')
element.innerHTML = 'Hello'

const container = document.getElementById('app')

container.appendChild(element) */


import React from 'react'
import ReactDOM from 'react-dom'

// JSX
/* const jsx = <h1>Hola!</h1> */

// With React.createElement
/* const element = React.createElement(
  'a', 
  {href: 'wwww.google.com'}, 
  'Ir a Google'
) */

/* const name = 'Grace'
const suma = () => 3+3 */
/* const element = React.createElement('h1', {}, `Hola soy ${name}`) */
/* const  jsx = <h1>Hola, soy {name} y 3+3 es {suma()}</h1> // lo que está dentro de las llaves se llaman expresiones */


const jsx = (
  <div>
    <h1>Soy Grace</h1>
    <p>Soy junior dev</p>
  </div>
)

const element = React.createElement(
  'div',
  {},
  React.createElement('h1', {}, 'Hola, soy Grace'),
  React.createElement('p', {}, 'Soy junior dev')
)
const container = document.getElementById('app')

/* ReactDOM.render(__qué___, ___donde__) */
/* ReactDOM.render(element, container) */
ReactDOM.render(jsx, container)