import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Inventory from './components/Inventory/Inventory';
import Trades from './components/Trades/Trades';
import TeamBoard from './components/TeamBoard/TeamBoard';
import Footer from './components/Footer/Footer';

export default class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Header />
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Switch>
          <Route exact path="/inventory/:userId" component={Inventory}></Route>
          <Route exact path="/inventory/:category" component={Inventory}></Route>
        </Switch>
        <Route exact path="/trades" component={Trades}></Route>
        <Route exact path="/teams" component={TeamBoard}></Route>
        <Footer />    
      </div>
    );
  }
}
