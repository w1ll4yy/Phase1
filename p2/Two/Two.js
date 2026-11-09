let a = 54;

// conditions on even or odd, while having positive or negative

if ((a % 2) === 0) {
    if (a > 0) {
        console.log(`even, positive, your no. is ${a}`);
    } else {
        console.log(`even, negative, your no. is ${a}`)
    }
} else if ((a % 2) !== 0) {
    if (a > 0) {
        console.log(`odd, positive, your no. is ${a}`);
    } else {
        console.log(`odd, negative, your no. is ${a}`)
    }
}