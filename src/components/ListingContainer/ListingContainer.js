import React from 'react';
import './ListingContainer.css';

const ListingContainer = ({ children }) =>
  <main className="ListingContainer">
    {children}
  </main>;

export default ListingContainer;