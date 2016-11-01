import React from 'react';

const propTypes = {
    text: React.PropTypes.string.isRequired,
    hideWidget: React.PropTypes.bool
};

class Paragraph extends React.Component {


    render () {

        const html = { __html: this.props.text };

        const styles = {
            base: {
                maxWidth: '700px',
                marginLeft: 'auto',
                marginRight: 'auto'
            }
        };

        if (this.props.hideWidget) {
            return null;
        }

        return (
            <div style={styles.base}>
                <p dangerouslySetInnerHTML={html}></p>
            </div>
        );
    }
}

Paragraph.propTypes = propTypes;

export default Paragraph;
