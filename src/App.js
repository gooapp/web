import React, { Component } from 'react';
import './App.css';
import MainPage from './Pages/MainPage';
import Mzsm from './Pages/Mzsm';
import { Switch, HashRouter, Route } from 'react-router-dom';
import Bqbhzy from './Pages/Bqbhzy';
import Ysqzc from './Pages/Ysqzc';
import Rjxkxy from './Pages/Rjxkxy';
import WebSiteNavigation from './Pages/WebSiteNavigation';
import { encrypAES, decryptAES } from './Vendor';

class App extends Component
{
  componentDidMount ()
  {
    document.body.style = 'background: rgb(250,250,250);';
  }

  render ()
  {
    return (
      <HashRouter basename='/' >
        <Switch>
          <Route path="/mianZheShengMing" component={ Mzsm } />
          <Route path="/banQuanBaoHuZhiYin" component={ Bqbhzy } />
          <Route path="/yinSiQuanZhengCe" component={ Ysqzc } />
          <Route path="/ruanJianXuKeXieYi" component={ Rjxkxy } />
          <Route path="/navigation/:info?" component={ WebSiteNavigation } />
          <Route path="/" component={ MainPage } />
        </Switch>
      </HashRouter>
    );
  }


}

export default App;
