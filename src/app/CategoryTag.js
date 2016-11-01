import React from 'react';

class CategoryTag extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        /* No need for Radium as all of the below comes for free with react */
        const styles = {
            base: {
                /*font-family: Raleway,Helvetica,Arial,sans-serif;*/
                fontWeight: '800',
                letterSpacing: '.2em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: '#fff',
                lineHeight: '1.5',
                backgroundColor: '#000',
                padding: '.5rem .313rem .375rem'
            }
        };

        return (
            <a style={styles.base} href='#'>{this.props.category}</a>
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
