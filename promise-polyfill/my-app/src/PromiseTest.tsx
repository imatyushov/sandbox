
export const promise = new Promise<number>((resolve, reject) => {
    let timeoutId = setTimeout(() => {
        resolve(2);
    }, 1_000);
});


// promise
//     .then((resolve) => resolve * 2)
//     .then((resolve) => resolve * 2)
//     .catch((error) => {
//         console.error(error);
//         return 1_000;
//     })
//     .then(resolve => console.log(resolve))


export const firstPromise = new Promise<number>((res, rej) => {
    setTimeout(() => res(10), 2_000 );
})
export const secondPromise = new Promise<string>((res, rej) => {
    setTimeout(() => {

    }, )
    res('success');
})
export const thirdPromise = new Promise<string>((res, rej) => {
    res('good job');
})

export function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(() => resolve, ms))
}

