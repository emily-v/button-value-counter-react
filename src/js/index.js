//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

//include bootstrap npm library into the bundle
import 'bootstrap';

//include your index.scss file into the bundle
import '../styles/index.scss';

//import your own components
//import Counter from './component/Counter.jsx';
//import Button from './component/Counter.jsx';
//import App from './component/Counter.jsx';
import Button from './component/Button.jsx';
//import Result from './component/Button.jsx';

//render your react application
ReactDOM.render(
    <div>
        <Button value={1}/>
        <Button value={10}/>
        <Button value={100}/>
        <Button value={1000}/>
    </div>,
    document.querySelector('#app')
);