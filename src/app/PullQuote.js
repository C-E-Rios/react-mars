import React from 'react';
import Radium from 'radium';

const propTypes = {
    position: React.PropTypes.string,
    text: React.PropTypes.string.isRequired,
    text_colour: React.PropTypes.string,
    width: React.PropTypes.string,
    hideWidget: React.PropTypes.bool
};

class PullQuote extends React.Component {

    render () {

        const styles = {
            base: {
                display: 'block',
                margin: '32px auto 32px',
                maxWidth: '100%',
                '@media (min-width: 740px)': {
                    maxWidth: '700px'
                }
            },
            blockquote: {
                color: this.props.text_colour ? this.props.text_colour : '#2abeaa',
                fontSize: '42px',
                textAlign: this.props.position
            }

        };

        if (this.props.hideWidget) {
            return null;
        }

        return (
            <div style={styles.base}>
                <blockquote style={styles.blockquote}>{this.props.text}</blockquote>
            </div>
        );
    }
}

PullQuote = Radium(PullQuote);

PullQuote.defaultProps = {
    position: 'center',
    text_colour: '#2abeaa'
};

PullQuote.propTypes = propTypes;

export default PullQuote;
