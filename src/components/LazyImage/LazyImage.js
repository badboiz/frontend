import React from 'react';
import './LazyImage.css';

export default class LazyImage extends React.PureComponent {
  state = { loaded: false };

  componentDidMount() {
    this.image = new Image();

    this.image.onload = this.handleImageLoad;

    this.image.src = this.props.src;
  }

  componentWillUnmount() {
    this.handleImageLoad = null;
  }

  handleImageLoad = () =>
    this.setState({ loaded: true });

  render() {
    const className = `${this.props.styleName || ""} ${this.state.loaded && "loaded"}`;
    return (
      <div 
        className={className} 
        style={{ backgroundImage: `url(${this.props.src})` }} 
       />
    )
  }
}
