import React from 'react';
import { StyleRoot } from 'radium';
import Header from './Header';
import Widget from './Widget';

const propTypes = {
    data: React.PropTypes.object.isRequired
};

class Article extends React.Component {

    constructor (props) {
        super(props);
    }

    createWidget () {
        return (widget, index) => <Widget type={widget.acf_fc_layout} content={widget} key={index} />;
    }

    render () {

        const data = this.props.data;

        return (
            <StyleRoot>
                {/* Header */}
                <Header
                    type={data.type}
                    title={data.title.rendered}
                    author={data.author}
                    date={data.date}
                    acf={data.acf} />

                {/* Widgets */}
                {data.acf.widgets.map(this.createWidget())}

            </StyleRoot>
        );
    }
}

Article.propTypes = propTypes;

export default Article;
