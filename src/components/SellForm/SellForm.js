import React from 'react';
import Spinner from '../Spinner/Spinner';
import { getPhoto } from '../../utils/photo';
import getUserId from '../../utils/getUserId';
import postListing from '../../utils/postListing';
import geolocator from '../../utils/geolocator';
import './SellForm.css';

const Done = () =>
  <div className="SellForm__container">
    <span>Thanks!</span>
  </div>;

const ErrorMsg = () =>
  <div className="SellForm__container">
    <span>Something went wrong! Please reload and try again</span>
  </div>;

class SellForm extends React.PureComponent {
  state = { user: getUserId(), status: 'init' };

  handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    getPhoto(imageFile, image =>
      this.setState({ image })
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ status: 'posting' }, () =>
      geolocator()
        .then(({ lat, long }) => ({ ...this.state, lat, long }))
        .then(postListing)
        .then(() => this.setState({ status: 'posted' }))
        .catch(err => console.error(err))
    );
  }

  handleTyping = (property) => (event) =>
    this.setState({ [property]: event.target.value });

  render() {
    switch (this.state.status) {
      case 'init':
        return (
          <div className="SellForm">
            <h2 className="SellForm__title">Sell an item</h2>
            <form>
              <label htmlFor="text-input">Title:</label>
              <input
                id="text-input"
                type="text"
                placeholder="title" onChange={this.handleTyping("title")}
              />
              <label htmlFor="description-input">Description:</label>
              <input
                id="description-input"
                type="text"
                placeholder="description" onChange={this.handleTyping("description")}
              />
              <label htmlFor="price-input">Price:</label>
              <input
                id="price-input"
                type="number"
                placeholder="price" onChange={this.handleTyping("price")}
              />

              <label htmlFor="time-input">Select duration:</label>
              <select id="time-input">
                <option value="">1 hour</option>
                <option value="">2 hours</option>
                <option value="">3 hours</option>
              </select>

              <div className="SellForm__image-preview-container">
                {this.state.image && <img className="SellForm__image-preview" src={this.state.image} />}
              </div>

              <label htmlFor="image-input">Choose an image:</label>
              <input id="image-input" className="SellForm__image-input" type="file" accept="image/*" capture="camera" onChange={this.handleImageChange} />
              <button role="submit" className="btn SellForm__photo-button" onClick={this.handleSubmit}>Submit</button>
            </form>
          </div>
        );
      case 'posting':
        return <Spinner />;
      case 'posted':
        return <Done />;
      default:
        return <ErrorMsg />;
    }
  }
}
export default SellForm