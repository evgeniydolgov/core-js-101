let num = 165536;
function recursiv(x) {
    x = x.toString().split('').reduce((acc, prev) => Number(acc) + Number(prev));
    if (x > 9) {
        recursiv(x);
    }
    return console.log(x);;
}


recursiv(num)