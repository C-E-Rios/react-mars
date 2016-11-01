import React from 'react';

class ImageCarousel extends React.Component {

    render () {
        return (
            <div>
                <span>
                    <img src={this.props.content.background_images[0].url} alt={this.props.content.background_images[0].description} />
                </span>
                <span>
                    <img src={this.props.content.background_images[1].url} alt={this.props.content.background_images[0].description} />
                </span>
            </div>
        );
    }
}

export default ImageCarousel;
