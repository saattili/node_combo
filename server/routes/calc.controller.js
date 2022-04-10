const path = require("path");
const { spawn } = require("child_process");




function calculate(req, res) {

    var combos = [];
    var data = req.body.mydata
    var verified = [];
    arr = data.split('');

    arr = arr.sort();
    min = arr.toString();
    min = min.replaceAll(',', '')
    min = Number(min)
    max = arr.reverse().toString();
    max = max.replaceAll(',', '');
    max = Number(max)
    for (min; min <= max; min++) {
        numStr = min.toString();
        numArr = numStr.split('');

        var flag = 0;
        for (let val = 0; val < arr.length; val++) {
            console.log(`checking ${arr[val]}   with ${numArr}`)
            for (let value = 0; value < numArr.length; value++) {
                if (!(arr[val] == numArr[value])) {
                    flag = 1;
                    break;

                }

            }
            if (flag === 1)
                break;


        }
        if (flag === 0) {
            combos.push(min);
        }



    }

    res.render('index', {
        title: "Combinations",
        result: combos,


    });
}

//res.sendFile(path.join(__dirname,'..','..','views','index.hbs'));


module.exports = {
    calculate,
}