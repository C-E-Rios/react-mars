import React from 'react';
import SocialShare from './SocialShare';

class Hero extends React.Component {

    render () {

        const styles = {
            base: {
                maxWidth: '700px',
                margin: '20px auto',
                height: '80px',
                item: {
                    display: 'inline-block'
                }
            },
            right: {
                float: 'right'
            }
        };

        return (
            <div style={styles.base}>
                <div style={styles.base.item}>
                    <p>{this.props.author}</p>
                    <p>{this.props.date}</p>
                </div>
                <div style={styles.base.item, styles.right}>
                    <SocialShare />
                </div>
            </div>
        );
    }
}

export default Hero;
