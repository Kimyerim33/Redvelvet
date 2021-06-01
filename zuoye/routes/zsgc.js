var express = require('express');
var router = express.Router();
var db = require('./bean/db');

router.get('/',function(req,res,next){
   db.query("select * from `a`",(err,result)=>{
      res.render('zsgc',{data:result});
     }); 
});
router.post('/',(req,res)=>{
    db.queryParam("select * from a where coffee_name=?",[req.body.search,req.body.search],(err,result)=>{
        res.render('zsgc', { data:result});
    });
})

router.get('/add',(req,res)=>{
    if(req.query.id != undefined){
        db.queryParam("select * from a where id = ?",[req.query.id],(err,row)=>{
            res.render('add',{row:row[0]});
        })
    }else{
        res.render('add');
    }
});
router.post('/add',(req,res)=>{
    db.queryParam("insert into a(id,coffee_name,coffee_value) values(?,?,?)",[
    req.body.id,
    req.body.coffee_name,
    req.body.coffee_value],(err,result)=>{
    res.redirect('/zsgc');
    })
});

router.get('/zsgc',(req,res)=>{
    res.render('delete');
});

router.get('/update/:id',(req,res)=>{
    db.queryParam("select * from a where id=?",[req.params.id],(err,result)=>{
        res.render('update',{obj:result[0]});
    })
});
router.post('/update',(req,res)=>{
    db.queryParam("update a set coffee_name=? or coffee_value=?  where id=?",[
        req.body.id,
        req.body.coffee_name,
        req.body.coffee_value],(err,result)=>{
        res.redirect('/zsgc');
    })
})


module.exports=router;