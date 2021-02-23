/*
 * @Descripttion: your project
 * @Author: huangjitao
 * @Date: 2021-01-18 19:52:44
 * @Function: 描述一下模块的功能
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css';
// 在文件主入口引入i18n初始化实例
import './i18n/configs'
import { Provider } from 'react-redux'
import store from './redux/store'
import axios from 'axios'

axios.defaults.headers['x-icode'] = '1D2C52013E9D7BF9'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);