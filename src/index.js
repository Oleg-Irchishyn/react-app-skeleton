import store from "./redux/store"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import 'font-awesome/css/font-awesome.min.css';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <HashRouter /*basename={process.env.PUBLIC_URL} - это строка нужна для BrowserRouter для github pages*/>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>, document.getElementById('root'));

serviceWorker.unregister();