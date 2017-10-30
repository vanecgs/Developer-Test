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

function reformat(phrase) {
    phrase = phrase.replace( /[aeiou]/g, '' ).toLowerCase();
    return phrase.charAt(0).toUpperCase() + phrase.slice(1);
}

function next_binary_number(number) {
    var lastZero = 0;

    for(var i = 0; i < number.length; i++) {
        if(!number[i]) {
            lastZero = i;
        }
    }

    for(i = lastZero; i < number.length; i++) {
        if(!number[i]) {
            number[i] = 1;
        } else {
            number[i] = 0;
        }
    }

    if(!lastZero) {
        number.unshift(1);
    }

    return number;
}