import { useState } from "react";
import "./Level-1_3.css"

const Level1_3 = () => {
    const [counter, setCounter] = useState<number>(0);

    const addCounter = () => {
        setCounter(counter + 1);
    }

    const subCounter = () => {
        setCounter(counter === 0 ? 0 : counter - 1);
    }

    return ( 
        <section className="level1_3">
            <div className="counter__container">
                <button onClick={subCounter}>-</button>
                <p>Counter: {counter}</p>
                <button onClick={addCounter}>+</button>
            </div>
            <button onClick={() => setCounter(0)}>Reset</button>
        </section>
    );
}

export default Level1_3;