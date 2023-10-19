// @ts-ignore

// Todo: микрозадачи выполняются до тех пор пока очередь не опустеет,
//  даже если в процессе одного цикла event loop добавятся новые

Promise.resolve().then(() => {
  //microtask
})

async function microTask() {
    // await microtask
}

queueMicrotask(() => {
//microtask
})

new MutationObserver(() => {
//microtask
}).observe(document.body, {childList: true, subtree: true});

