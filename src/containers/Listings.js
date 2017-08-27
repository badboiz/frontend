import React from 'react';
import ListingsCard from '../components/ListingsCard/ListingsCard';
import ListingContainer from '../components/ListingContainer/ListingContainer';
import Spinner from '../components/Spinner/Spinner';
import getListings from '../utils/getListings';
import './Listings.css';

const AskToLoad = ({ handleClick }) =>
  <div className="Listings__container">
    <span>Click to see all of the listings in your area:</span>
    <button className="btn" onClick={handleClick}>Load listings</button>
  </div>;

const ErrorMsg = () =>
  <div className="Listings__container">
    <span className="ErrorMsg">
      Something went wrong! Please reload and try again
    </span>
  </div>;

class Listings extends React.PureComponent {
  state = {
    status: 'needclick'
  };

  handleClick = () => {
    this.setState({ status: 'loading' }, () =>
      getListings()
        .then(listings => this.setState({ listings, status: 'loaded' }))
        .catch((err) => {
          console.error('Something went wrong:', err);
          this.setState({ status: 'haserror' });
        })
    );
  }

  render() {
    let Component;

    console.log(this.state)

    switch (this.state.status) {
      case 'needclick':
        Component = () => <AskToLoad handleClick={this.handleClick} />;
        break;
      case 'loading':
        Component = () =>
          <div className="Listings__container">
            <Spinner />
          </div>;
        break;
      case 'loaded':
        Component = () =>
          this.state.listings.length > 0
          ? <ListingContainer>
              {this.state.listings.map((listing, i) =>
                <ListingsCard key={i} listing={listing} />
              )}
            </ListingContainer>
          : <div className="Listings__container">
              <span>No listings in your area :(</span>
            </div>;
        break;
      default:
        Component = ErrorMsg;
        break;
    }

    return (
      <Component />
    );
  }
}

export default Listings;
