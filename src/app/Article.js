import React from 'react';
import Header from './Header';
import Widget from './Widget';

const propTypes = {
    data: React.PropTypes.object.isRequired
};

class Article extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {

        const data = this.props.data;
        
        return (
            <div>
                {/* Header */}
                <Header
                    type={data.type}
                    title={data.title.rendered}
                    author={data.author}
                    date={data.date}
                    acf={data.acf} />

                {/* Widgets */}
                {data.acf.widgets.map((widget, index) => {
                    return <Widget type={widget.acf_fc_layout} content={widget} key={index} />;
                })}

            </div>
        );
    }
}

Article.propTypes = propTypes;

export default Article;
