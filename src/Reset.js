import { Style } from 'radium';
import Normalize from './Normalize';
import _ from 'lodash';

class Reset extends Style {}

/* Use common default of { body: border-box } */
Reset.defaultProps = {
    rules: _.assign({}, Normalize, {
        body: {
            margin: '0',
            boxSizing: 'border-box'
        }
    })
};

export default Reset;
