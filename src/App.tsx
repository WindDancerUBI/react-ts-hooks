/*
 * @Descripttion: your project
 * @Author: huangjitao
 * @Date: 2021-01-18 19:52:44
 * @EditDescripttion: edit what
 */

import React from 'react';
import styles from './App.module.css';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { HomePage, SignInPage, RegisterPage, DetailPage, SearchPage } from "./pages";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/signIn' component={SignInPage} />
          <Route exact path='/register' component={RegisterPage} />
          <Route exact path='/detail/:touristRouteId' component={DetailPage} />
          <Route exact path='/search/:keyword?' component={SearchPage} />
          {/* 方法一 */}
          {/* <Route render={() => <h1>404页面</h1>} />    */}
          {/* 方法二 */}
          <Route path='/404' render={() => <h1>404页面</h1>}/>   
          <Redirect from='*' to='/404' />
        </Switch> 
      </BrowserRouter>
    </div>
  );
}

export default App;
