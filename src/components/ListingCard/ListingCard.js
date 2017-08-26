import React from 'react';
import './ListingCard.css';

class LazyImage extends React.PureComponent {
  state = { loaded: false };

  componentDidMount() {
    this.image = new Image();

    this.image.onload = () =>
      this.setState({ loaded: true });

    this.image.src = this.props.src;
  }

  render() {
    return (
      <div 
        className={`ListingCard__image ${this.state.loaded && "loaded"}`} 
        style={{ backgroundImage: `url(${this.props.src})` }} 
       />
    )
  }
}

const ListingCard = ({ listing: { distance, image, title, price } }) =>
  <div className="ListingCard__container">
    <LazyImage src={image} />
    <div className="ListingCard__details">
      <div className="ListingCard__top-row">
        <h1>{title}</h1>
        <div className="ListingCard__dist">{distance}</div>
      </div>
      <h2 className="ListingCard__price">{price}</h2>
    </div>
  </div>;

export default ListingCard;