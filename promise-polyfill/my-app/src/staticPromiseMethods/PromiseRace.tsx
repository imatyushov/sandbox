export const firstPromise = new Promise<number>((res, rej) => {
    setTimeout(() => res(10), 3000 );
})
export const secondPromise = new Promise<string>((res, rej) => {
    setTimeout(() => {
        res('success');
        }, 2000)
})
export const thirdPromise = new Promise<string>((res, rej) => {
    setTimeout(() => {
        res('good job');
    }, 1000)
})

Promise.race([firstPromise, secondPromise, thirdPromise])
    .then((resolve) => {
        console.log(resolve);
})


function promiseRace<T>(promises: (Promise<number> | Promise<string>)[]) {
    return new Promise((resolve, reject) => {
        promises.forEach((promise) => {
            Promise.resolve(promise)
                .then(resolve, reject)
                .catch(reject)
        })
    })
}