//Todo: написать полифилл промиса;

type Initializer<T> = (
    resolve: (value: T) => void,
    reject: (reason?: any) => void
) => void;


type AnyFunction = (...args: any[]) => any;

export class CustomPromise<T> {
    thenCb: AnyFunction | null = null;
    catchCb: AnyFunction | null = null;
    finallyCb: AnyFunction | null = null;
    constructor(initializer: Initializer<T>) {
        initializer(this.resolve, this.reject);
    }

    then = (thenCb: (value: T) => void) => {
        this.thenCb = thenCb;
        return new CustomPromise((resolve, reject) => {

        });
    }
    catch = (catchCb: (reason?: any) => void) => {
        this.catchCb = catchCb;
        return new CustomPromise((resolve, reject) => {

        });
    }

    finally = (finallyCb: () => void) => {
        this.finallyCb = finallyCb;
        return new CustomPromise((resolve, reject) => {

        });
    }

    private resolve = (value: T) => {
        if (this.thenCb) {
            this.thenCb(value);
        }
    }
    private reject = (reason?: any) => {
        if (this.catchCb) {
            this.catchCb(reason);
        }
    }

}

const sleep = (ms: number) => {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
};

const promise = new Promise<string>((resolve, _reject) => {
    setTimeout(() => {
        resolve('value');
    }, 1_000);
})
    .then((value) => {
        console.log('value:', value);
        return  sleep(5_000);
    })
    .then(() => console.log('==============='))
    .catch((error) => {
    console.error('error:', error);
})


