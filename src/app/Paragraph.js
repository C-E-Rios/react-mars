import React from 'react';

class Paragraph extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {

        return (
            <p>{this.props.content.paragraph}</p>
        );
    }
}

export default Paragraph;
