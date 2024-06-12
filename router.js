var express=require("express");
var router=express.Router();


const credential={
    email: "admin@gmail.com",
    password: "pass123"
}



//login user
router.post('/login',(req,res) => {
    if(req.body.email==credential.email&&req.body.password==credential.password) {
        req.session.user=req.body.email;
        res.redirect('/route/dashboard');

    }

    else {
        req.session.user=req.body.email;
        res.redirect('/route/dashboard2');
        
    }
});

// route for dashboard

router.get('/dashboard',(req,res) => {
    if(req.session.user) {
        res.render('dashboard',{user: req.session.user})
    } else {
        res.send("Unauthorize User")
    }
})

//router for invalid login error message
router.get('/dashboard2',(req,res) => {
    if(req.session.user) {
        res.render('dashboard2')
    } else {
        res.send("Unauthorize User")
    }
})
//route for login page in dashboard2
router.get('/base',(req,res) => {
    if(req.session.user) {
        res.render('base',{user: req.session.user})
    } else {
        res.send("Unauthorize User")
    }
})

//router for logout
router.get('/logout',(req,res) => {
    req.session.destroy(function (err) {
        if(err) {
            console.log(err);
            res.send("Error")
        } else {
            res.render('base',{
                //title: "Express",
                Logout: "logout Successfully..."
            })
        }
    })
})


module.exports=router;
