function error(err,req,res,next){
    console.log(err.message)
    res.send('Error' + err.message)
}

module.exports = {
    error
}