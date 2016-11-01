import React from 'react';

class ScrollButton extends React.Component {

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
            }
        };


        return (
            <button style={styles.base}>SCROLL DOWN</button>
        );
    }
}

export default ScrollButton;
