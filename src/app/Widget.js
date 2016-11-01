import React from 'react';
import Paragraph from './Paragraph';
import Image from './Image';
import PullQuote from './PullQuote';
import ImageCarousel from './ImageCarousel';

const propTypes = {
    type: React.PropTypes.string,
    content: React.PropTypes.object
};

class Widget extends React.Component {

    constructor (props) {
        console.log(props);
        super(props);
    }

    render () {

        const content = this.props.content;

        return (
            <div>
                {/* Conditionally display component based on type of widget */}
                {this.props.type === 'paragraph' &&
                    <Paragraph
                        text={content.paragraph}
                        hideWidget={content.hide_widget_from_page} />}

                {this.props.type === 'image' &&
                    <Image
                        url={content.image.url}
                        description={content.image.description}
                        hideWidget={content.hide_widget_from_page} />}

                {this.props.type === 'pull-quote' &&
                    <PullQuote
                        position={content.position}
                        text={content.text}
                        text_colour={content.text_colour}
                        width={content.width}
                        hideWidget={content.hide_widget_from_page} />}

                {this.props.type === 'image-carousel' &&
                    <ImageCarousel
                        background_images={content.background_images}
                        border={content.border}
                        buttons_size={content.buttons_size}
                        crop={content.crop}
                        options={content.options}
                        position={content.position}
                        slides_to_show={content.slides_to_show}
                        width={content.width}
                        hideWidget={content.hide_widget_from_page} />}
            </div>
        );
    }
}

Widget.propTypes = propTypes;

export default Widget;
