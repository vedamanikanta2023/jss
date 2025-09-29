function fibonacci(n) {
    let num1 = 0, num2 = 1, nextNum;

    console.log("Fibonacci Sequence:");

    for (let i = 1; i <= n; i++) {
        console.log(num1);
        nextNum = num1 + num2;
        num1 = num2;
        num2 = nextNum;
    }
}

fibonacci(7);
