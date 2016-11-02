import React from 'react';
import Radium from 'radium';
import CategoryTag from './CategoryTag';
import ScrollButton from './ScrollButton';

const propTypes = {
    title: React.PropTypes.string.isRequired,
    category: React.PropTypes.string,
    options: React.PropTypes.array.isRequired,
    /* Passing in object here as the hero component will only ever take one image */
    hero_image: React.PropTypes.object,
    html: React.PropTypes.string,
    sell: React.PropTypes.string,
    short_headline: React.PropTypes.string
};

class Hero extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {

        const options = {
            category: 'display-post-category',
            full_height: 'full-height',
            scroll_down_button: 'scroll-down-button',
            styles: {
                base: {
                    position: 'relative',
                    textAlign: 'center',
                    backgroundImage: `url(${this.props.hero_image.sizes.portrait})`,
                    '@media (min-width: 320px)': {
                        backgroundImage: `url(${this.props.hero_image.sizes.portrait})`
                    },
                    '@media (min-width: 480px)': {
                        backgroundImage: `url(${this.props.hero_image.sizes.portrait})`
                    },
                    '@media (min-width: 768px)': {
                        backgroundImage: `url(${this.props.hero_image.sizes.landscape})`
                    }
                },
                full_height: {
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: 'calc(100vh)',
                    overflow: 'hidden',
                    perspective: '1000px',
                    perspectiveOrigin: 'center',
                    transformStyle: 'preserve-3d'
                },
                /* Unsure about this - Maybe hero_content should be its own component? */
                hero_content: {
                    '@media (min-width: 320px)': {
                        width: '90%'
                    },
                    '@media (min-width: 768px)': {
                        width: '50%'
                    },
                    left: '50%',
                    padding: '30px 10px',
                    position: 'absolute',
                    top: '70%',
                    transform: 'translate(-50%,-50%)',
                    width: '50%',
                    zIndex: '10',
                    h1: {
                        '@media (min-width: 320px)': {
                            fontSize: '2.5em'
                        },
                        '@media (min-width: 768px)': {
                            fontSize: '2em'
                        }
                    },
                    h3: {
                        fontWeight: '100',
                        '@media (min-width: 320px)': {
                            fontSize: '1.8em'
                        },
                        '@media (min-width: 768px)': {
                            fontSize: '1.3em'
                        }
                    }
                }
            }
        };

        /* Add fullheight style to stylesArray */
        const stylesArray = [options.styles.base];
        if (this.props.options.includes(options.full_height)) {
            stylesArray.push(options.styles.full_height);
        }

        /* Exploring a different approaach to styles by injecting css in <style></style> - Probably not the best approach*/
        return (
            <article style={[stylesArray]}>
                <style>{this.props.html.replace(/<\/?style[^>]*>/g, '')}</style>
                <section className='super-hero__content' style={options.styles.hero_content}>
                    {this.props.options.includes(options.category) && <CategoryTag category={this.props.category} />}
                    <h1 style={options.styles.hero_content.h1}>{this.props.title}</h1>
                    <h3 style={options.styles.hero_content.h3}>{this.props.sell}</h3>
                </section>
                {this.props.options.includes(options.scroll_down_button) && <ScrollButton />}
            </article>
        );
    }
}

Hero = Radium(Hero);

Hero.propTypes = propTypes;

export default Hero;
