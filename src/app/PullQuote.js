import React from 'react';

const propTypes = {
    position: React.PropTypes.string,
    text: React.PropTypes.string.isRequired,
    text_colour: React.PropTypes.string,
    width: React.PropTypes.string,
    hideWidget: React.PropTypes.bool
};

class PullQuote extends React.Component {

    render () {

        if (this.props.hideWidget) {
            return null;
        }

        return (
            <blockquote>{this.props.text}</blockquote>
        );
    }
}

PullQuote.propTypes = propTypes;

export default PullQuote;
