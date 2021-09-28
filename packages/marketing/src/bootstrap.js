import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const mount = (el) => {
  console.log(el)
  ReactDOM.render(
      <App />, el
  )
};

// independent running
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector("#_marketing-dev-root");
  el && mount(el)
}

// via container
export { mount };
