import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import "./styles/landing/stylesLanding.css"
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import './styles/Home/homeStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


