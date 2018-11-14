/* eslint global-require: 0 */
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./search.prod');
} else {
    module.exports = require('./search.dev');
}
