function fibonacci(n)
{
    const fib=[0,1]
    for(i=2;i<n;i++)
        {
        fib[i]=fib[i-1] + fib[i-2]
    }
    return fib
}
console.log(fibonacci(1))
console.log(fibonacci(3))
console.log(fibonacci(4))






function fibonacci(n)
{
    const fib=[0,1]
    for(i=2;i<n;i++)
        {
        fib.push(fib[i-1] + fib[i-2]);
    }
   return fib;
}

console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
function fibonacci(n)
{
    const fib=[0,1]
    for(i=2;i<n;i++)
        {
        fib[i]=fib[i-1] + fib[i-2]
    }
    return fib
}
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
