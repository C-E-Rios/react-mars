import React from 'react';

const propTypes = {
    url: React.PropTypes.string,
    description: React.PropTypes.string,
    hideWidget: React.PropTypes.bool
};

class Image extends React.Component {

    render () {

        const styles = {
            base: {
                display: 'block',
                height: 'auto',
                maxWidth: '100%'
            }
        };

        if (this.props.hideWidget) {
            return null;
        }

        return (
            <div>
                <img style={styles.base} src={this.props.url} alt={this.props.description} />
            </div>
        );
    }
}

Image.propTypes = propTypes;

export default Image;
