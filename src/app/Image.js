import React from 'react';

const propTypes = {
    url: React.PropTypes.string,
    description: React.PropTypes.string,
    hideWidget: React.PropTypes.bool
};

class Image extends React.Component {

    render () {

        if (this.props.hideWidget) {
            return null;
        }

        return (
            <img src={this.props.url} alt={this.props.description} />
        );
    }
}

Image.propTypes = propTypes;

export default Image;
