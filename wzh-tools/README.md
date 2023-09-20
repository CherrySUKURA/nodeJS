## 安装
```
npm install my-tools
```

## 引入
```js
const myTools = require('my-tools')
```

## 格式化时间
```js
const dateStr = myTools.dateFormat(date) //不传默认为当天
```

## 转义html
```js
const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'

const str = myTools.htmlEscape(htmlStr)
```

## 转义字符串为html
```js
const str = '&lt;h1 title=&quot;abc&quot;&gt;这是h1标签&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;'

const htmlStr = myTools.htmlUnEscape(str)
```