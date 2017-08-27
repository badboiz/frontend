import React from 'react';
import { getPhoto } from '../../utils/photo';
import getUserId from '../../utils/getUserId';
import postListing from '../../utils/postListing';
import geolocator from '../../utils/geolocator';
import './SellForm.css';

class SellForm extends React.PureComponent {
  state = { user: getUserId() };

  handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    getPhoto(imageFile, image =>
       this.setState({ image })
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();
    geolocator()
      .then(({ lat, long }) => ({ ...this.state, lat, long }))
      .then(postListing)
      .then(console.log)
      .catch(err => console.error(err));
  }

  handleTyping = (property) => (event) =>
    this.setState({ [property]: event.target.value });

  render() {
    return (
      <div className="sellForm">
        <h2 className="sellForm__title">SellForm</h2>
        <img src={this.state.image} />
        <form>
          <input 
            type="text" 
            placeholder="title" onChange={this.handleTyping("title")}
          />
          <input 
            type="text" 
            placeholder="description" onChange={this.handleTyping("description")}
          />
          <input 
            type="number" 
            placeholder="price" onChange={this.handleTyping("price")}
          />
          <input id="imageInput" className="" type="file" accept="image/*" capture="camera" onChange={this.handleImageChange} />
          <label className="photoButton" htmlFor="imageInput">Upload photo</label>
          <button role="submit" className="photoButton" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}
export default SellForm