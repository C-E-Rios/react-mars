import React from 'react';

class PullQuote extends React.Component {

    render () {
        return (
            <blockquote>{this.props.content.text}</blockquote>
        );
    }
}

export default PullQuote;
