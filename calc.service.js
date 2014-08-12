/**
 * Created by crunch on 2014-08-09.
 */
angular.module('miniCalculator', []);

angular.module('miniCalculator').service('calcService', function() {
    this.expression ="";
    this.arrResultItem = [];
    this.doCalc = function() {
        console.log("doCalc() invoked!");

        var re = /(\+|\-|\*)/;
        //var input = "1232+232";
        var input = this.expression;
        var result = input.split(re);

        var operator = result[1];
        var operands = input.split(result[1]);
        var operandFirst = parseInt(operands[0]);
        var operandSecond = parseInt(operands[1]);

        var calcResult;
        if (operator === "+") {
            calcResult = operandFirst + operandSecond;
        }
        else if (operator === "-") {
            calcResult = operandFirst - operandSecond;
        }
        else if (operator === "*") {
            calcResult = operandFirst * operandSecond;
        }
        var resultItem = input + "=" + calcResult;
        console.log(resultItem);

        this.arrResultItem.push(resultItem);


    }
    this.doTest = function() {
        console.log("doTest() invoked!");
    }


});