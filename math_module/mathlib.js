module.exports = function (){
    return {
        add: function(num1, num2) {
            // add code here
            let sum = num1 + num2;
            console.log('The sum is ' + sum);
        },
        multiply: function(num1, num2) {
            // add code here
            let result = num1 * num2;
            console.log('The multiply result is ' + result);
        },
        square: function(num) {
            // add code here
            let result = num * num;
            console.log('The square result is ' + result);
        },
        random: function(num1, num2) {
            // add code here
            let result = Math.floor(Math.random() * num2) + num1;
            console.log('The random result is ' + result);
        }
    }
};