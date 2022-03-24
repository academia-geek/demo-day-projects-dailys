import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/landing/stylesLanding.css"
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import AppRouter from './Routers/AppRouter';
import "../src/styles/registro/stylesRegistro.css"
import "../src/styles/calendar/stylesCalendar.css"
import './styles/Home/homeStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);