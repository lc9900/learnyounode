// console.log(process.argv)
// The 0 in reduce(function(){}, 0) is so that
// the initial value of the accumulator is an integer.
// Otherwise, javascript will use the first element, which is a string.
var sum = process.argv.slice(2).reduce( function(total, current){
    return total + parseInt(current);
}, 0);

console.log(sum);