// Returns an integer between [0, max)
function uniformRandom(max) {
    return Math.floor(Math.random() * max)
}

console.log(uniformRandom(100));