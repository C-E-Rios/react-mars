import React from 'react';
import Hero from './Hero';
import PostMeta from './PostMeta';

const propTypes = {
    type: React.PropTypes.string,
    title: React.PropTypes.string.isRequired,
    author: React.PropTypes.number.isRequired,
    date: React.PropTypes.string.isRequired,
    acf: React.PropTypes.object.isRequired
};

class Header extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        const props = this.props;

        return (
            <div>
                <Hero
                    title={props.title}
                    category={props.acf.category.name}
                    options={props.acf.header_other_options}
                    hero_images={props.acf.hero_images}
                    html={props.acf.html}
                    sell={props.acf.sell}
                    short_headline={props.acf.short_headline} />
                <PostMeta
                    date={props.date}
                    author={props.author} />
            </div>
        );
    }
}

Header.propTypes = propTypes;

export default Header;
