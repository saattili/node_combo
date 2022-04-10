const path = require("path");
const {spawn } = require("child_process");




function calculate(req,res){

    var combos = [];
    var data = req.body.mydata
    var verified = [];
    arr = data.split('');
   
    arr = arr.sort();
    min = arr.toString();
    min = min.replaceAll(',','')
    min = Number(min)
    max = arr.reverse().toString();
    max = max.replaceAll(',','');
    max = Number(max)
for(min;min<=max;min++){
    numStr = min.toString();
    numArr = numStr.split('');
    
    var flag = 0;
    for(let val = 0;val<arr.length;val++){
        console.log(`checking ${arr[val]}   with ${numArr}`)
        if(!(arr[val] in numArr)){
            flag = 1;
            break;
        }
            
    }
    if(flag === 0){
        combos.push(min);
    }


  
}

    res.render('index',{
        title: "Combinations",
         result: combos,
        

});


// let pyRes = new Promise((resolve,reject) =>{

//     var myData = req.body.mydata;
//     const pythonProcess = spawn('python3',[path.join(__dirname,'..','..','py_utils','get_combos.py'), myData]);
//     pythonProcess.stdout.on('data',(data)=>{
//         resolve(data);
//     });

//     pythonProcess.stderr.on('data',(data)=>{
//         reject(data);
//     });

// });


//     pyRes.then((pyData) => {

//         console.log("Pydata came from promise..................")

//         res.render('index',{
//             title: "Combinations",
//             result: pyData,
//         });

//     })
//     .catch((err) => {
//         console.log(err)
//     });
    
}

    //res.sendFile(path.join(__dirname,'..','..','views','index.hbs'));


module.exports = {
    calculate,
}