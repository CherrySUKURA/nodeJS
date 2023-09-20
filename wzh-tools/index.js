const dateFormatTools = require('./dateFormat')
const htmlEscapeTools = require('./htmlEscape')

module.exports = {
    ...dateFormatTools,
    ...htmlEscapeTools
}