const andrjFunction = require('./nice function.js' );

numbers = [ "12", "846", "2", "1236" ];
function padNumbers(arr, spaces) {
    arr.forEach(num => console.log(andrjFunction.padLeftFunc(num, spaces , "_")));
}
padNumbers(numbers, 5);

