function longloading() {
    let count = 0
    for (let i=0; i < 1e7; i++){
        count += i
    }
    return count
}

console.log(`Working process pid ${process.pid}`);

process.on("message", (message) => {
    if (message === "child"){
        const result = longloading();
        process.send(result)
    }
})