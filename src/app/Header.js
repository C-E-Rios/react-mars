import React from 'react';
import Radium from 'radium';
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

    render () {
        const props = this.props;
        const style = {
            base: {
                background: 'blue',
                color: 'red',
                width: '25%',
                ':hover': {
                    background: '#eee'
                }
            }
        };

        return (
            <div>
                <div style={style.base}>Hellooooo</div>
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

Header = Radium(Header);

Header.propTypes = propTypes;

export default Header;
