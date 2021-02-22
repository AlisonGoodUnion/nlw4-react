import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  //basicamente o component no react nada mais é do que uma funcao que retorna o html-jsx
  //a tag <App/> nao e visivel pelo component
  <App/>,
  document.getElementById('root')
);