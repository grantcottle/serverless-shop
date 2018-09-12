import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import App from './js/components/App';
import registerServiceWorker from './registerServiceWorker';
require('dotenv').config();



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

