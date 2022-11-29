function sum(a, b, c) {
    return a + b + c;
}

function multi(a, b, c) {
    return a * b * c;
}

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args)
        }

        return function (...newArgs) {
            return curried.apply(this, args.concate(newArgs))
        }
    }
}


const curriedSum = curry(sum);
const curriedMulti = curry(multi);

console.log(
    curriedSum(2, 3, 4)
);