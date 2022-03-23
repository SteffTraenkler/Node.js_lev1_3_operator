function account(num1, num2, operator) {
    if (operator === '+') {
        return num1 + num2
    } else if (operator === '-') {
        return num1 - num2
    } else if (operator === '*') {
        return num1 * num2
    } else if (operator === '/') {
        if (num2 === 0) {
            return console.log('can´t divide through Zero');
        } else {
            return num1 / num2
        }
    } else {
        return console.log('Operator not allowed (3rd position)');
    }

}

module.exports = { account }