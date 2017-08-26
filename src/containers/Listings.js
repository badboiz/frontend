import React from 'react';
import ListingCard from '../components/ListingCard/ListingCard';
import ListingContainer from '../components/ListingContainer/ListingContainer';

const Listings = ({ listings }) =>
  <ListingContainer>
    {listings.map((listing, i) => 
      <ListingCard key={i} listing={listing} />
    )}
  </ListingContainer>;

const defaultListing = {
  distance: "5km away",
  image: "http://lorempixel.com/400/300",
  title: "Iphone 7",
  price: "$329.89"
};

Listings.defaultProps = {
  listings: new Array(20).fill(defaultListing)
}

export default Listings;