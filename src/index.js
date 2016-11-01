/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-disable no-unused-vars*/
import ReactDom from 'react-dom';
import ReactDomServer from 'react-dom/server';

import Reset from './Reset';
import Article from './app/Article';

/* Load json data with json loader*/
import articleData from 'json!./data/sample.json';

/* Add Normalizer to bottom of <head> */
const styles = ReactDomServer.renderToStaticMarkup(<Reset />);
document.head.insertAdjacentHTML('beforeEnd', styles);

ReactDom.render(<Article data={articleData} />, document.getElementById('app'));
