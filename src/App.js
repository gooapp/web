import React, { Component } from 'react';
import './App.css';
import MainPage from './Pages/MainPage';
import Mzsm from './Pages/Mzsm';
import { Link, Switch, BrowserRouter, Route } from 'react-router-dom';
import Bqbhzy from './Pages/Bqbhzy';
import Ysqzc from './Pages/Ysqzc';
import Rjxkxy from './Pages/Rjxkxy';


function Home ()
{
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About ()
{
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

class App extends Component
{
  componentDidMount ()
  {
    document.body.style = 'background: rgb(250,250,250);';
  }

  render ()
  {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/mianZheShengMing" component={ Mzsm } />
          <Route path="/banQuanBaoHuZhiYin" component={ Bqbhzy } />
          <Route path="/yinSiQuanZhengCe" component={ Ysqzc } />
          <Route path="/ruanJianXuKeXieYi" component={ Rjxkxy } />>
          <Route path="/" component={ MainPage } />
        </Switch>
      </BrowserRouter>
    );
  }


}

export default App;
