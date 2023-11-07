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

const promises = [firstPromise, secondPromise, thirdPromise];

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