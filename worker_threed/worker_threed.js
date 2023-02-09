const { Worker } = require('worker_threads');

const start = Date.now();

const worker1 = new Worker(`
  const { parentPort } = require('worker_threads');
  
  parentPort.once('message', () => {
    for (let i = 0; i < 1000000000; i++) {
      // do some work
    }
    parentPort.postMessage('Worker 1 completed');
  });
`, { eval: true });

worker1.once('message', () => {
  console.log(\`Worker 1 completed in \${Date.now() - start}ms\`);
});

worker1.postMessage('Start');

const worker2 = new Worker(`
  const { parentPort } = require('worker_threads');
  
  parentPort.once('message', () => {
    for (let i = 0; i < 1000000000; i++) {
      // do some work
    }
    parentPort.postMessage('Worker 2 completed');
  });
`, { eval: true });

worker2.once('message', () => {
  console.log(\`Worker 2 completed in \${Date.now() - start}ms\`);
});

worker2.postMessage('Start');
