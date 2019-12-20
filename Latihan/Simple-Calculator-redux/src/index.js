import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/configureStore';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

const Apps = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(<Apps />, document.getElementById('root'));
// serviceWorker.unregister();
