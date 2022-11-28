function getPolynom(...arg) {
    let x;
    if (arg.length === 3) {
        x = arg[0] * (x ** 2) + x * arg[1] + arg[2];
    }
    if (arg.length === 2) {
        x = x - arg[1];
    }
    if (arg.length === 1) {
        x = arg[0];
    }
    if (arg.length < 1) {
        x = null;
    }
    console.log(arg[0]);
    return x;
}

getPolynom(2, 3, 5)

console.log(Math.random());