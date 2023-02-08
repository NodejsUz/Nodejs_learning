// cleare child bolasi
// 

console.log("child process", process.pid);

process.on('message', (message) => {
    // process.exit(1);
    const result = isprime(message);
    console.log(result);
    process.send(result);

    setTimeout(process.exit, 5000);
})


function isTub(n) {
    for (let i=2; i<n; i++){
        if (n % i === 0) {
            return false
        }
    }
    return true
}

function isprime(num) {
    let factors = 0;

    if (num < 1) return false;
    if (num == 1) return true;

    for (let i = 2; i < num; i++){
        if (isTub(i)){
            factors += i;
        }
    }

    return {num, factors, isPrime: (factors !== 0 ? false : true )}
}
