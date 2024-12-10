import { useState } from "react";
import "./Level-1_1.css";

const Level1_1 = () => {
    const [shortAnswer, setShortAnswer] = useState<boolean>(false);
    const [longAnswer, setLongAnswer] = useState<boolean>(false);

    return ( 
        <section className="level1_1">
            <div className="question__container">
                <p>Why is React great?</p>
                <button onClick={() => setShortAnswer(!shortAnswer)}>.</button>
            </div>
            <div className={`${shortAnswer ? "show" : "hide"}`}>
                <hr />
                <div className="answer__container">
                    <p>Fast Learning Curve</p>
                    <button onClick={() => setLongAnswer(!longAnswer)}>.</button>
                </div>
            </div>
            <div className={`answer__container ${longAnswer ? "show" : "hide"}`}>
                <p>React is very a simple and lightweight library that only deals with the view layer. It is not a beast like other MV* frameworks such as Angular or Ember. Any Javascript developer can understand the basics and start developing an awesome web application after only a couple of days reading tutorial.
                As the React guide says 'Thinking in React' may be a little different than you used to since it brings a new approach to the table, but it will become much easier and natural as you gain experience with it.</p>
            </div>
        </section>
    );
}

export default Level1_1;