import { useLayoutEffect, useEffect, useReducer } from 'react';

/**
 State update => repaint parent => repaint child;
 First render:
 1. console.log('parent: render');
 2. console.log('child render');
 3. console.log('child: layout effect');
 4. console.log('parent: layout effect');
 5. console.log('child: effect');
 6. console.log('child: second effect');
 7. console.log('parent: effect');
 8. console.log('parent: second effect');

 triggerRerender() {

 }
 1. console.log('parent: render');
 2. console.log('child render');
 3. console.log('child: cleanup layout effect');
 4. console.log('parent: cleanup layout effect');
 5. console.log('child: layout effect');
 6. console.log('parent: layout effect');
 7. console.log('child: cleanup effect');
 8. console.log('parent: cleanup effect');
 9. console.log('child: effect');
 10.console.log('parent: effect');
 **/


export function App() {
    const [num, triggerRerender] = useReducer((state) => state++, 0);

    (window as any).triggerRerender = triggerRerender;

    console.log('parent: render'); // 1;

    useLayoutEffect(() => {
        console.log('parent: layout effect'); // 4;
        return function cleanUp () {
            console.log('parent: cleanup layout effect'); // 8
        };
    }, [num]);

    useEffect(() => {
        console.log('parent: effect'); // 6;
        return function cleanUp () {
            console.log('parent: cleanup effect'); //10;
        };
    }, [num]);

    useEffect(() => {
        console.log('parent: second effect');
        return () => {
            console.log('parent: unmount');
        }
    }, [])
    return   <Child num={num}/>
}


type ChildProp = {
    num: number;
}

function Child({num}: ChildProp) {
    console.log('child render'); // 2;

    useLayoutEffect(() => {
        console.log('child: layout effect'); // 3;
        return function cleanUp () {
            console.log('child: cleanup layout effect'); // 7;
        };
    }, [num]);

    useEffect(() => {
        console.log('child: effect'); // 5;
        return function cleanUp () {
            console.log('child: cleanup effect'); //9
        };
    }, [num]);

    useEffect(() => {
        console.log('child: second effect');
        return () => {
            console.log('child: unmount');
        }
    }, [])

    return null;
}