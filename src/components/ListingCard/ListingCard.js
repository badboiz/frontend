import React from 'react';
import LazyImage from '../LazyImage/LazyImage';
import './ListingCard.css';

const ListingCard = ({ listing: { distance, image, title, price } }) =>
  <div className="ListingCard__container">
    <LazyImage src={image} styleName={"ListingCard__image"}/>
    <div className="ListingCard__details">
      <div className="ListingCard__top-row">
        <h1>{title}</h1>
        <div className="ListingCard__dist">{distance}</div>
      </div>
      <h2 className="ListingCard__price">{price}</h2>
    </div>
  </div>;

export default ListingCard;