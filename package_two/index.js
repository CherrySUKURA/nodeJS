const fs = require('fs'),
      path = require('path')

getHtmlStr()

function getHtmlStr(){
    fs.readFile(path.join(__dirname, './index.html'),'utf-8',(err,str) => {
        if(err){
            return console.log('读取文件失败' + err.message)
        }

        getCss(str)
        getJs(str)
        getHtml(str)
    })
}

function getCss(html){
    const regStyle =  /<style>[\s\S]*<\/style>/
    let css = html.match(regStyle)
        css = css[0].replace('<style>','').replace('</style>','')
    fs.writeFile(path.join(__dirname,'/main.css'),css,(err) => {
        if(err){
            return console.log('写入失败' + err.message)
        }
    })
}

function getJs(html){
    const regScript =  /<script>[\s\S]*<\/script>/
    let js = html.match(regScript)
        js = js[0].replace('<script>','').replace('</script>','')
    fs.writeFile(path.join(__dirname,'./main.js'),js,(err) => {
        if(err){
            return console.log('写入失败' + err.message)
        }
    })
}

function getHtml(html){
    const regStyle =  /<style>[\s\S]*<\/style>/
    const regScript =  /<script>[\s\S]*<\/script>/
    html = html
    .replace(regStyle,'<link rel="stylesheet" href="' + path.join(__dirname,'./index.css') + '"/>')
    .replace(regScript,'<script src="' + path.join(__dirname,'./main.js') + '"></script>')
    fs.writeFile(path.join(__dirname,'./main.html'),html,(err) => {
        if(err){
            return console.log('html写入失败' + err.message)
        }
    })
}