import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import 'antd/dist/antd.css';
import store from './redux/store';
import ScrollToTop from './modules/common/ScrollOnTop';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <ScrollToTop />
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);
