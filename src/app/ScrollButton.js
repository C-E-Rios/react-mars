import React from 'react';

class ScrollButton extends React.Component {

    constructor (props) {
        super(props);
        this.smoothScroll = this.smoothScroll.bind(this);
    }

    smoothScroll () {
        /* Call some fancy smooth scroll function */
    }

    render () {

        const styles = {
            base: {
                textIndent: '101%',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                borderRadius: '0',
                cursor: 'pointer',
                display: 'block',
                padding: '0',
                height: '50px',
                width: '50px',
                position: 'absolute',
                bottom: '4%',
                left: 'calc(50% - 25px)',
                background: '#2abeaa'
            }
        };


        return (
            <button onClick={this.smoothScroll} style={styles.base}>SCROLL DOWN</button>
        );
    }
}

export default ScrollButton;
