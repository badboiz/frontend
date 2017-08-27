import React from 'react';

const Listing = ({ match: { params } }) =>
  <h1>I'm listing {params.listingid}</h1>;

export default Listing;