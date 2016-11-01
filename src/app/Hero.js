import React from 'react';
import CategoryTag from './CategoryTag';
import ScrollButton from './ScrollButton';

const propTypes = {
    title: React.PropTypes.string,
    category: React.PropTypes.string,
    options: React.PropTypes.array,
    hero_images: React.PropTypes.array,
    html: React.PropTypes.string,
    sell: React.PropTypes.string,
    short_headline: React.PropTypes.string
};

class Hero extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {

        const props = this.props;
        const options = {
            category: 'display-post-category',
            full_height: 'full-height',
            scroll_down_button: 'scroll-down-button'
        };

        return (
            <div>
                {props.options && props.options.includes(options.category) && <CategoryTag category={props.category} />}
                <h1>{props.title}</h1>
                <h3>{props.sell}</h3>
                {props.options && props.options.includes(options.scroll_down_button) && <ScrollButton />}
            </div>
        );
    }
}

Hero.propTypes = propTypes;

export default Hero;
