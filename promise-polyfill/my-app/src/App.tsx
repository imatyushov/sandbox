import React, {useEffect, useState} from 'react';
import './PromiseConstructor';
import './PromiseTest';

const App = () => {
    const [seconds, setSeconds] = useState<number>(0);
    const [isStarted, setIsStarted] = useState<boolean>(false);

    useEffect(() => {
        let intervalId: string | number | NodeJS.Timeout | undefined;
        if (isStarted) {
            intervalId = window.setInterval(() => {
                setSeconds((prevState) => prevState + 1);
            }, 1_000);
        }
        return () => {
            clearInterval(intervalId);
        }
    }, [isStarted]);

  return (
      <div>
          <p>{seconds}</p>
          <button onClick={() => setIsStarted(true)}>Start</button>
          <button onClick={() => setIsStarted(false)}>Stop</button>
      </div>
  );
};

export default App;
