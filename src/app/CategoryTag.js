import React from 'react';

class CategoryTag extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <a href='#'>{this.props.category}</a>
        );
    }
}

export default CategoryTag;
