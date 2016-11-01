import React from 'react';
import Paragraph from './Paragraph';
import Image from './Image';
import PullQuote from './PullQuote';
import ImageCarousel from './ImageCarousel';

class Widget extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {

        return (
            <div>
                {/* Conditionally display component based on type of widget */}
                {this.props.type === 'paragraph' && <Paragraph content={this.props.content} />}
                {this.props.type === 'image' && <Image content={this.props.content} />}
                {this.props.type === 'pull-quote' && <PullQuote content={this.props.content} />}
                {this.props.type === 'image-carousel' && <ImageCarousel content={this.props.content} />}
            </div>
        );
    }
}

export default Widget;
