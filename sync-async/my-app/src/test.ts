// @ts-ignore
//Очередность выполнения в eventLoop: microTasks -> tasks -> RAF -> rIC
//Todo: взаимодействие c
// microTasks - Promise, async/await, observerAPI, queueMicrotasks;
// tasks - setTimeout, setInterval, события(postMessage);
// raf, ric - соответствующие вызовы API
Promise.resolve().then(() => { //2
    console.log('promise');
})

setTimeout(() => { // 4
    console.log('timeout');
}, 0)

queueMicrotask(() => { // 3
    console.log('microTask');
})

console.log('script end'); //1
