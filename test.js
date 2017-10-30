//This function will take an array and build a string
function repeat(numbers) {
    var repeatTimes = 3,
        repeatResult = '[';

    if(numbers && numbers.length) {
        for(var i = 0; i < repeatTimes; i++) {
            for(var j = 0; j < numbers.length; j++) {
                repeatResult += numbers[j];
                repeatResult += ',';
            }
        }

        repeatResult = repeatResult.substring(0, repeatResult.length - 1);
        repeatResult += ']';

        return repeatResult;
    }

    return false;
}