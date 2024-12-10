import { useState } from "react";
import "./Level-2_2.css";

const Level2_2 = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false);
    const [modeName, setModeName] = useState<string>(darkMode ? 'Night' : 'Day');
    const [modeButton, setModeButton] = useState<string>(darkMode ? 'Change to Night' : 'Change to Day');

    const handleClick = () => {
        setDarkMode(!darkMode);
        setModeName(!darkMode ? 'Night' : 'Day');
        setModeButton(!darkMode ? 'Change to Day' : 'Change to Night');
    }

    return ( 
        <section className={`level2_2 ${darkMode ? 'dark' : 'light'}`}>
            <h1>{modeName}</h1>
            <button onClick={handleClick}>{modeButton}</button>
        </section>
    );
}

export default Level2_2;