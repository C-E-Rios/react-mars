import React from 'react';

const propTypes = {
    background_images: React.PropTypes.array,
    border: React.PropTypes.bool,
    buttons_size: React.PropTypes.string,
    crop: React.PropTypes.string,
    options: React.PropTypes.array,
    position: React.PropTypes.string,
    slides_to_show: React.PropTypes.string,
    width: React.PropTypes.string,
    hideWidget: React.PropTypes.bool
};

class ImageCarousel extends React.Component {

    render () {

        if (this.props.hideWidget) {
            return null;
        }
                
        return (
            <div>
                <span>
                    <img src={this.props.background_images[0].url} alt={this.props.background_images[0].description} />
                </span>
                <span>
                    <img src={this.props.background_images[1].url} alt={this.props.background_images[0].description} />
                </span>
            </div>
        );
    }
}

ImageCarousel.propTypes = propTypes;

export default ImageCarousel;
