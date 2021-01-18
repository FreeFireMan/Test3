import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import {reducer} from "./redux/reducers";
import 'antd/dist/antd.css'
const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
    <App />
          </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);




















reportWebVitals();
