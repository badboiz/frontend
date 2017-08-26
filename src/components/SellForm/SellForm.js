import React from 'react';
import {getPhoto} from '../../utils/photo'
import './SellForm.css';

//let imageBase64 = ""

class SellForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleImageChange = this.handleImageChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleImageChange(event) {
    let imageFile = event.target.files[0]
    getPhoto(imageFile, (image) => {
       this.setState({
        image: image
      })
     })
  }
  handleSubmit(event) {
    console.log("submit clicked", this.state.image)
  }
  render() {
    return (
      <div className="sellForm">
        <h2 className="sellForm__title">SellForm</h2>
        <form>
          <input id="imageInput" className="" type="file" accept="image/*" capture="camera" onChange={this.handleImageChange} />
          <label className="photoButton" htmlFor="imageInput">Upload photo</label>
        </form>
        <a className="photoButton" onClick={this.handleSubmit}>Submit</a>
      </div>
    )
  }
}
export default SellForm