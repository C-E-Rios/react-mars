import React from 'react';
import SocialShare from './SocialShare';

class Hero extends React.Component {

    render () {
        return (
            <div>
                <div>
                    <p>{this.props.author}</p>
                    <p>{this.props.date}</p>
                </div>
                <div>
                    <SocialShare />
                </div>
            </div>
        );
    }
}

export default Hero;
