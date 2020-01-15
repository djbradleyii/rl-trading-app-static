import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import SignInPage from './components/SignInPage/SignInPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import Dashboard from './components/Dashboard/Dashboard';
import TradeForm from './components/TradeForm/TradeForm';
import InventoryForm from './components/InventoryForm/InventoryForm';
import Inventory from './components/Inventory/Inventory';
import LogoutSuccessful from './components/LogoutSuccessful/LogoutSuccessful';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Trades from './components/Trades/Trades';
import TeamBoard from './components/TeamBoard/TeamBoard';
import Footer from './components/Footer/Footer';
import users from '../users';
import inventory from '../inventory';
import items from '../items';
import attributes from '../attributes';
import trades from '../trades';
import teams from '../teams';
import ContextManager from '../src/context/context-manager';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      users,
      inventory,
      items,
      attributes,
      trades,
      teams
    }
  }

  render(){
    const contextValue = {
      users: this.state.users,
      inventory: this.state.inventory,
      items: this.state.items,
      attributes: this.state.attributes,
      trades: this.state.trades,
      teams: this.state.teams
    }
    
    return (
      <ContextManager.Provider value={contextValue}>
        <div className="App">
          <Header />
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/signin" component={SignInPage}></Route>
          <Route exact path="/register" component={RegisterPage}></Route>
          <Route exact path="/dashboard/:userId" component={Dashboard}></Route>
          <Route exact path="/add-trade" component={TradeForm}></Route>
          <Route exact path="/add-inventory-item" component={InventoryForm}></Route>
          <Switch>
            <Route exact path="/inventory/:userId" component={Inventory}></Route>
            <Route exact path="/inventory/:category" component={Inventory}></Route>
            <Route exact path="/signout" component={LogoutSuccessful}></Route>
            <Route exact path="/notfound" component={PageNotFound}></Route>
          </Switch>
          <Route exact path="/trades" component={Trades}></Route>
          <Route exact path="/teams" component={TeamBoard}></Route>
          <Footer />    
        </div>
      </ContextManager.Provider>
    );
  }
}
