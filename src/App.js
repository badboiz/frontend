import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Page from './components/Page/Page';
import Listings from './containers/Listings';
import Sell from './containers/Sell'
import './App.css';

const Home = () =>
  <Link to="/listings">
    See all of our listings
  </Link>;

class App extends Component {
  render() {
    return (
      <Page>
        <Route exact path="/" component={Home} />
        <Route exact path="/listings" component={Listings} />
        <Route exact path="/sell" component={Sell} />
      </Page>
    );
  }
}

export default App;
