import React from 'react';

class Listing extends React.PureComponent {
  state = { loaded: false };

  render() {
    return (
      <div class='listingPage'>
        <h2>I'm listing {this.props.match.params.listingid}</h2>
        <img id='listingImage' />
        <div className="">
        </div>
      </div>
    )
  }
}

export default Listing;


//this.props..match.params.listingid