import React from 'react';
import Radium from 'radium';

const propTypes = {
    url: React.PropTypes.string,
    description: React.PropTypes.string,
    width: React.PropTypes.string,
    position: React.PropTypes.string,
    hideWidget: React.PropTypes.bool
};

class Image extends React.Component {

    render () {

        const styles = {
            base: {
                display: 'block',
                margin: '0 auto',
                maxWidth: '100%',
                '@media (min-width: 740px)': {
                    maxWidth: '700px'
                }
            },
            large: {
                '@media (min-width: 533px)': {
                    margin: '0 auto',
                    maxWidth: '960px'
                }
            },
            medium: {
                '@media (min-width: 740px)': {
                    margin: '0 auto',
                    maxWidth: '960px'
                }
            },
            img: {
                maxWidth: '100%'
            }

        };

        if (this.props.hideWidget) {
            return null;
        }

        return (
            <div style={[styles.base, styles[this.props.width]]}>
                <img style={styles.img} src={this.props.url} alt={this.props.description} />
            </div>
        );
    }
}

Image = Radium(Image);

Image.propTypes = propTypes;

export default Image;
