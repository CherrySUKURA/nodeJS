//定义格式化时间
function dateFormat(dateStr = new Date()){
    const dt = new Date(dateStr)

    const y = padZore(dt.getFullYear())
    const m = padZore(dt.getMonth() + 1)
    const d = padZore(dt.getDate())

    const hh = padZore(dt.getHours())
    const mm = padZore(dt.getMinutes())
    const ss = padZore(dt.getSeconds())

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

//补零函数
function padZore(n){
    return n < 10 ? '0' + n : n
}

module.exports = {
    dateFormat
}