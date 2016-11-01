/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-disable no-unused-vars*/
import ReactDom from 'react-dom';
import Article from './app/Article';

/* load json data with json loader*/
import articleData from 'json!./data/sample.json';

ReactDom.render(<Article data={articleData} />, document.getElementById('app'));
