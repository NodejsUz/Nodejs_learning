const {MessagePort, isMainThread} = require('node:worker_threads');

class messagePort extends MessagePort {}

let {postMessage} = new messagePort();

console.log(postMessage);