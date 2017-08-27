import React from 'react';
import Spinner from '../components/Spinner/Spinner';
import ListingCard from '../components/ListingCard/ListingCard';
import getListing from '../utils/getListing';
import {initMap, addMapMarker} from '../utils/map';
import "./Listing.css";

class Listing extends React.PureComponent {
  state = { loaded: false };

  componentDidMount() {
    getListing(this.props.match.params.listingid)
      .then(([listing]) => {
        console.log(listing)
        this.setState({ listing, loaded: true });

      })
      .catch(err => {
        console.error(err);
        this.setState({ hasError: true });
      })
  }

	componentWillMount() {
		console.log("mounted")
		setTimeout(() => addMapMarker(this.props.match.params.listingid), 1000)
	}

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>;
    } else if (this.state.loaded) {
      return <ListingCard styleName="Listing__ListingCard" listing={this.state.listing} />;
    } else {
      return <Spinner />;
    }
  }
}

export default Listing;


//this.props..match.params.listingid
