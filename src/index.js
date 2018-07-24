import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import Everything from './Everything.js';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Everything />, document.getElementById('root'));
registerServiceWorker();
