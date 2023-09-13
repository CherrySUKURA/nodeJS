const fs = require('fs')
const path = require('path')
console.log(__dirname)

fs.readFile(__dirname + '/成绩.txt','utf-8',function(err,datastr){
    if(err){
        return console.log('读取文件失败' + err.message)
    }

    console.log('文件读取成功' + typeof datastr)
    let arr = datastr.split('，')

    console.log(arr)

    let newArr = arr.map( item => item.replace('-',':'))
    
    console.log(newArr)

    let newStr = newArr.join("\r\n")
    console.log(newStr)

    fs.writeFile(__dirname + '/成绩-ok.txt',newStr,(err) => {
        if(err){
            return console.log('写入失败:' + err.message)
        }
        console.log('写入成功')
    })
})

const pathStr = path.join('/a','/b/c','../','./d','e')
console.log(pathStr)

fs.readFile(path.join(__dirname, '/成绩.txt'),'utf-8',(err,dataStr) => {
    console.log(dataStr)
})

let fpath = path.join(__dirname,'./成绩.txt')

let name = path.basename(fpath)
console.log(name)

let name2 = path.basename(fpath,'.txt')
console.log(name2)

let name3 = path.basename(fpath,path.extname(fpath))
console.log(path.extname(fpath))
console.log(name3)