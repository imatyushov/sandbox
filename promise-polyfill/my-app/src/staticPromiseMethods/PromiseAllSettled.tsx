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
        rej('bad job');
    }, 1000)
})


Promise.allSettled([firstPromise, secondPromise, thirdPromise])
.then((response) => {
    console.log(response);
})

function promiseAllSettled<T>(promises: (Promise<number> | Promise<string>)[]) {
    return Promise.all(promises.map((p) => Promise.resolve(p)
        .then((value => ({
                status: 'fulfilled',
                value: value
            })
        ))
        .catch((error) => ({
            status: 'rejected',
            reason: error
        }))
    ));
}