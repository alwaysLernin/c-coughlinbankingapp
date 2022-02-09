import React from 'react';
import NavBar from './components/NavBar';
import { HashRouter, Route } from 'react-router-dom';
import AccountContextProvider from './contexts/AccountContext';
import Container from 'react-bootstrap/Container';

import Home from './components/Home';
import CreateAccount from './components/CreateAccount';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import Alldata from './components/AllData';



function App() {

  return (
    <div className="App" >
      <HashRouter>
        <NavBar />
        <AccountContextProvider value={{accounts:[{}]}}>
          <Container style={{padding: "20px"}}>
            <Route path="/" exact component={Home} />
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/Deposit/" component={Deposit} />
            <Route path="/Withdraw/" component={Withdraw} />
            <Route path="/AllData/" component={Alldata} />
          </Container>
        </AccountContextProvider>      
      </HashRouter>
    </div>
  );
}

export default App;
