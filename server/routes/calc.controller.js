const path = require("path")


function calculate(req,res){
    var myData = req.body.mydata;
    result = getallCombos(myData);
    console.log(req.body.mydata)
    //do cal here
    //console.log(path.join(__dirname,'..','..'));
    res.render('index',{
        title: "Combinations",
        result: result,
    });
}

function getallCombos(myData){
    
}
    //res.sendFile(path.join(__dirname,'..','..','views','index.hbs'));


module.exports = {
    calculate,
}