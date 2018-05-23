import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './utils/fontawesome/fontawesome-all.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './utils/scroll';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
