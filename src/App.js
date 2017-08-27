import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Page from './components/Page/Page';
import Listing from './containers/Listing';
import Listings from './containers/Listings';
import Sell from './containers/Sell';
import './App.css';

const Home = () =>
  <div className="Home">
    <div className="HomeBG" style={{
      backgroundImage: `url('map.png')`
    }} /> 
    <div className="HomeOverlay" />
    <h1>qwiky</h1>
    <div>
      <Link role="button" className="btn" to="/listings">
        See all of our listings
      </Link>

      <Link role="button" className="btn" to="/sell">
        Sell an item
      </Link>
    </div>
  </div>;

class App extends Component {
  render() {
    return (
      <Page>
        <Route exact path="/" component={Home} />
        <Route exact path="/listings" component={Listings} />
        <Route exact path="/sell" component={Sell} />
        <Route path="/listing/:listingid" component={Listing} />  
      </Page>
    );
  }
}

export default App;
