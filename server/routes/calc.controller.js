const path = require("path");
const { spawn } = require("child_process");
const { toUnicode } = require("punycode");




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

        var flag = 1;
        for (val of arr) {
            if (contain(val, numArr)) {

            }
            else {
                flag = 0;
                break;
            }
        }

        if (flag === 1) {
            combos.push(min);

        }



    }

    res.render('index', {
        title: "Combinations",
        result: combos,


    });




}

function contain(val, arr) {
    for (item of arr) {
        if (Number(val) === Number(item)) {
            return true;
        }
    }
    return false;
}

//res.sendFile(path.join(__dirname,'..','..','views','index.hbs'));


module.exports = {
    calculate,
}