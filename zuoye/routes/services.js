var express = require('express');
var config = require('./1')
var router = express.Router();

router.get('/',function(req,res,next){
config.select((err,results)=>{
    if(err != null){
        console.log(err);
    }else{
        console.log(results);
    }
});
    res.render('services',{title:});
});

module.exports = router;