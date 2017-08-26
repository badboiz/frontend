import React from 'react';
import ListingCard from '../components/ListingCard/ListingCard';
import ListingContainer from '../components/ListingContainer/ListingContainer';
import getListings from '../utils/getListings';

const Loading = () =>
  <h1>Loading...</h1>;

const Loaded = ({ listings }) =>
  listings.length > 0
    ? listings.map((listing, i) => 
        <ListingCard key={i} listing={{ ...listing, id: i }} />
      )
    : <h1>No listings in your area :(</h1>;

const Error = () =>
  <h1>Something went wrong!</h1>;

class Listings extends React.PureComponent {
  state = { loaded: false, hasError: false };

  componentDidMount() {
    getListings()
      .then(listings => this.setState({ listings, loaded: true }))
      .catch((err) => {
        console.error('Something went wrong:', err);
        this.setState({ hasError: true });
      });
  }

  render() {
    return (
      <ListingContainer>
        {this.state.loaded
          ? this.state.hasError
            ? <Error />
            : <Loaded listings={this.state.listings} />
          : <Loading />}
      </ListingContainer>
    );
  }
}

export default Listings;