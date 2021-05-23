var express = require('express');
var router = express.Router();

router.get('/', (req, res)=> {
  res.render('login');
});

router.post('/',(req,res)=>{
 let name= req.body.name;
 let password=req.body.password;
 if(req.session.user !=undefined && name==req.session.user.name&&
  password==req.session.user.password){
   res.send("login success");
 }else{
    res.send("login fail")
}
 }
)
module.exports = router;