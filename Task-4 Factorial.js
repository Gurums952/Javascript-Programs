function factorialIterative(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers";
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

console.log(factorialIterative(5)); // Output: 120
Recursive Method
javascript
function factorialRecursive(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers";
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorialRecursive(n - 1);
    }
}
console.log(factorialRecursive(5))

///
function factorial(a,b,c,d,e)
{
   console.log(a*b*c*d*e)
}
factorial(5,4,3,2,1)

function factor(j){
    if (j<0) {
        return "Factorial is not defined"

    }
    else if (j===0||j===1){
        return 1;

    }
    else{
        return j * factor(j-1);
    }
}
console.log(factor(5))