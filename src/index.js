import ReactDom from 'react-dom'
import React from 'react'


//importar componente

import App, { App2 } from './App.jsx'

//utilizar el componente

// function formatName(user) {
//     return user[0] + ' ' + user[1];
//   }
  
//   const user = ["Ismael", "Collado"];
  
//   const element = (
//     <h1>
//       Hello, {formatName(user)}!  
//     </h1>
//   );




function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));}

setInterval(tick, 1000);


// ReactDom.render( <App />, 
//   document.getElementById("root"))

// ReactDom.render( <App2 />,
//   document.getElementById("hola"))


