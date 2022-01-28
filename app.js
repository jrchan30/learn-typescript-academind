var add = function (n1, n2, showResult, phrase) {
    var result = n1 + n2;
    return showResult ? console.log("".concat(phrase).concat(result)) : result;
};
var num1 = 5;
var num2 = 2.8;
add(num1, num2, true, 'Result is: ');
