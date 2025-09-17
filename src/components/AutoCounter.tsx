import { useState, useEffect } from "react";

const AutoCounter = () => {
    const [count, setCount] = useState(0);

    const startCounter = () => {
      const timer = setInterval(() => {
          setCount(prevCount => { return prevCount + 1; });
      }, 1000)
      return timer;
    };
    const stopCounter = () => {
        setCount(count - 1);
    };
    const resetCounter = () => {
        setCount(0);
    };

    useEffect(() => {
        //mount
        const timer = startCounter();
        //unmount
        return () => clearInterval(timer);
    }, []);

    return (
        <section>
            <h1>Counter: {count}</h1>
            <button onClick={startCounter}>Start Counter</button>
            <button onClick={stopCounter}>Stop Counter</button>
            <button onClick={resetCounter}>Reset Counter</button>
        </section>
    );
};

export default AutoCounter;
