
export const promise = new Promise<number>((resolve, reject) => {
    let timeoutId = setTimeout(() => {
        resolve(2);
    }, 1_000);
});


promise
    .then((resolve) => resolve * 2)
    .then((resolve) => resolve * 2)
    .catch((error) => {
        console.error(error);
        return 1_000;
    })
    .then(resolve => console.log(resolve))


const sleep = new Promise((resolve) =>
    setTimeout(() => resolve, 2_000));


export const firstPromise = new Promise<number>((res, rej) => {
    // setTimeout(() => res(10), 5_000 );
    res(1);
})
export const secondPromise = new Promise<string>((res, rej) => {
    res('success');
})
export const thirdPromise = new Promise<string>((res, rej) => {
    res('good job');
})

Promise.all([firstPromise, secondPromise, thirdPromise])
    .then((resolve) => console.log(resolve))
    .catch((err) => console.error('Error:', err));

Promise.allSettled([firstPromise, secondPromise, thirdPromise])
    .then((resolve) => console.log(
            resolve.map((value, index, array) => ({
                value,
                index,
                array
            })))
    )
    .catch((err) => console.error('Error:', err));

export function promiseAll<T>(promises: (Promise<number> | Promise<string>)[]) {
    const resultsArray: any[] = [];
    let count = 0;
    return new Promise((resolve, reject) => {
        for (let index = 0; index < promises.length; index++) {
            promises[index]
                .then((res) => {
                    count++
                    resultsArray[index] = (res);

                    if (promises.length === count) {
                        resolve(resultsArray);
                    }
            })
                .catch((error) => {
                reject(error);
            });
        }
    });
}

const customPromiseAll = promiseAll([firstPromise, secondPromise, thirdPromise]);


console.log(customPromiseAll);