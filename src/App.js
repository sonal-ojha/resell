import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

// import firebase from "firebase"
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

import './App.css';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import SellProduct from './components/SellProduct/SellProduct';
import AllProducts from './components/AllProducts/AllProducts';
import Register from './components/Register/Register';

// firebase.initializeApp({
//   apiKey: "AIzaSyDLoqcbTDMFuurtAyDgVEKZ6qwo0j0Osjk",
//   authDomain: "fir-auth-tutorial-ed11f.firebaseapp.com"
// })

class App extends React.Component {
  state = {
    sellingProducts: [],
  };

  handleSellItems = (item) => {
    const { sellingProducts } = this.state;
    const data = [...sellingProducts, item];
    this.setState({
      sellingProducts: data,
    });
  }

  render() {
    const { sellingProducts } = this.state;
    return (
      <React.Fragment>
        <Header />
        <div>
          <Router>
            <Switch>
              <Route
                exact
                path="/buy"
                component={() =>
                  <AllProducts sellingProducts={sellingProducts} />
                }
              />
              <Route
                exact
                path="/sell"
                component={() =>
                  <SellProduct sellItems={this.handleSellItems} />
                }
              />
              <Route
                exact
                path="/user"
                component={() =>
                  <Register />
                }
              />
              <Route path="/" component={() => <Home />} />
            </Switch>
          </Router>
        </div>
        <footer className="footer">
          copyrights Revive Collection 2020
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
