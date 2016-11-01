import React from 'react';

const propTypes = {
    text: React.PropTypes.string,
    hideWidget: React.PropTypes.bool
};

class Paragraph extends React.Component {

    render () {

        if (this.props.hideWidget) {
            return null;
        }

        return (
            <p>{this.props.text}</p>
        );
    }
}

Paragraph.propTypes = propTypes;

export default Paragraph;
