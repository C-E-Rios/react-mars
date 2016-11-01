import React from 'react';

class SocialShare extends React.Component {

    render () {

        const platforms = ['Facebook', 'Twitter', 'Email'];
        const items = platforms.map((item, index) => {
            return <li key={index}>{item}</li>;
        });

        return (
            <div>
                <ul>
                    {items}
                </ul>
            </div>
        );
    }
}

export default SocialShare;
