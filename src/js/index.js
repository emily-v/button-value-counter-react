//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

//include bootstrap npm library into the bundle
import 'bootstrap';

//include your index.scss file into the bundle
import '../styles/index.scss';

//import your own components
import Counter from './component/Counter.jsx';
//import Button from './component/Counter.jsx';
//import App from './component/Counter.jsx';

//render your react application
ReactDOM.render(
    <Counter />,
    //<Button />,
    //<App />,
    document.querySelector('#app')
);