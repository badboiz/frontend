import React from 'react';
import { Link } from 'react-router-dom';
import LazyImage from '../LazyImage/LazyImage';
import './ListingsCard.css';

const ListingsCard = ({ listing: { distance, image, title, price, _id }, styleName }) =>
  <div className={`ListingsCard__container ${styleName || ''}`}>
    <Link
      className="ListingsCard__overlay"
      to={`/listing/${_id}`}
    />
    <LazyImage src={image} styleName={"ListingsCard__image"}/>
    <div className="ListingsCard__details">
      <div className="ListingsCard__top-row">
        <h1>{title}</h1>
        <div className="ListingsCard__dist">{distance}</div>
      </div>
      <h2 className="ListingsCard__price">${price}</h2>
    </div>
  </div>;

export default ListingsCard;
