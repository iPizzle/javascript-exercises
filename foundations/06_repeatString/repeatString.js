const repeatString = function(str, num) {
    let repeated='';
    if (num < 0){
        return "ERROR"
    } else 
        for (let i=1; i<=num; i++){
            repeated=repeated + str
        }
        return repeated;
};

// Do not edit below this line
module.exports = repeatString;
