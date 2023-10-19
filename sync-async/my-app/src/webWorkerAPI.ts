export const worker = new Worker('');

worker.addEventListener('message', () => {
    //Todo get data;
})

//Todo: send data;
worker.postMessage('message')