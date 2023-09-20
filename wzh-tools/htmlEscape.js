//转义html函数
function htmlEscape(htmlStr){
    return htmlStr.replace(/<|>|"|&/g,(match) => {
        switch(match){
            case '<':
                return '&lt;'
            case '>':
                return '&gt;'
            case '"':
                return '&quot;'
            case '&':
                return '&amp;'
        }
    })
}

//转义字符串变成html
function htmlUnEscape(htmlStr){
    return htmlStr.replace(/&lt;|&gt;|&quot;|&amp;/g,(match) => {
        switch(match){
            case '&lt;':
                return '<'
            case '&gt;':
                return '>'
            case '&quot;':
                return '"'
            case '&amp;':
                return '&'
        }
    })
}

module.exports = {
    htmlEscape,
    htmlUnEscape
}