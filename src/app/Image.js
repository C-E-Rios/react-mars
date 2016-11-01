import React from 'react';

class Image extends React.Component {

    render () {

        return (
            <img src={this.props.content.image.url} alt={this.props.content.image.description} />
        );
    }
}

export default Image;
