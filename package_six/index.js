const myTools = require('../wzh-tools')

const dateStr = myTools.dateFormat()

console.log(dateStr)

const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'

let str = myTools.htmlEscape(htmlStr)
console.log(str)

str = myTools.htmlUnEscape(str)
console.log(str)