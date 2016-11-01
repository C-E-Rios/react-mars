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

/* Testing defaultProps */
CategoryTag.defaultProps = {
    category: 'Stylist'
};

CategoryTag.propTypes = {
    category: React.PropTypes.string
};

export default CategoryTag;
