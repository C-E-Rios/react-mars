import React from 'react';

const propTypes = {
    background_images: React.PropTypes.array.isRequired,
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

        const styles = {
            base: {
                display: 'inline-block',
                height: 'auto',
                maxWidth: '50%'
            }
        };

        if (this.props.hideWidget) {
            return null;
        }

        return (
            <div>
                <span>
                    <img style={styles.base} src={this.props.background_images[0].url} alt={this.props.background_images[0].description} />
                </span>
                <span>
                    <img style={styles.base} src={this.props.background_images[1].url} alt={this.props.background_images[1].description} />
                </span>
            </div>
        );
    }
}

ImageCarousel.propTypes = propTypes;

export default ImageCarousel;
