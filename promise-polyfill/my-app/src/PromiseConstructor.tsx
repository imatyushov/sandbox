//Todo: написать полифилл промиса;

export type Initializer<T> = (
    resolve: (value: T) => void,
    reject: (reason?: any) => void
) => void;

export type AnyFunction = (...args: any[]) => any;

export class CustomPromise<T> {
    thenCb: AnyFunction | null = null;
    catchCb: AnyFunction | null = null;
    constructor(initializer: Initializer<T>) {
        initializer(this.resolve, this.reject);
    }

    then = (thenCb: (value: T) => void) => {
        this.thenCb = thenCb;
    }
    catch = (catchCb: (reason: T) => void) => {
        this.catchCb = catchCb;
    }
    finally = () => {

    }

    private resolve = (value: T) => {

    }
    private reject = (reason: T) => {

    }
}

// const promise = new Promise<number>((resolve, reject) => {
//     resolve(5);
// });
// promise
//     .then((resolve) => resolve * 2)
//     .then((res) => res * 3)
//     .catch((error) => console.error(error))


