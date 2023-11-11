import { useState, useReducer } from 'react';

export function App() {
    const [events, setEvents] = useState([]);

    const [stack, dispatch] = useReducer((acc, val) => {
        switch(val.action) {
            case 'push':
                return [...acc, val];
            case 'pop':
                return acc.slice(0, acc.length - 1);
            default:
                return [...acc];
        }
    }, []);

    const [border, setBorder] = useState(undefined);

    function makeEvent() {
        setEvents([...events, `Event ${events.length + 1}`]);
        setBorder(stack[stack.length - 1]);
    }

    function undo() {
        const eventsFiltered = events.filter((e) => !stack.some((s) => s === e));
        dispatch({
            action: 'push',
            payload: eventsFiltered[eventsFiltered.length - 1]
        })
    }

    function redo() {
        if(stack[stack.length - 1] === border) {
            return;
        }
        dispatch({
            action: 'pop'
        });
    }

    const resultStack = events.filter((event) => !stack.some((s) => s === event));

    return (
        <>
        <div className={'App'}>
            <div style={{display: 'flex', gap: 10}}>
                <div>Border: {border}</div>
            </div>
            <h3>Events</h3>
            {events.map((event) => {
                return <div>{event}</div>
            })}
            <div>
                <h3>Undo Stack</h3>
                {stack.map((event) => {
                    return <div>{event}</div>
                })}
            </div>
            <div>
                <h3>Result Stack</h3>
                {resultStack.map((event) => {
                    return <div>{event}</div>
                })}
            </div>
        </div>
            <div>
                <button onClick={makeEvent}>Make event</button>
                <button onClick={undo}>undo</button>
                <button onClick={redo}>redo</button>
            </div>
        </>
    )
}