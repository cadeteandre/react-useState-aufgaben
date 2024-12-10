import { useState } from "react";
import "./Level-1_6.css"

const Level1_6 = () => {
    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    return (  
        <section className="level1_6">
            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                setName(e.target.value)} 
                type="text" />
            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                setSurname(e.target.value)} 
                type="text" />
            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                setEmail(e.target.value)} 
                type="email" />
            <p><span>Vorname:</span> {name}</p>
            <p><span>Nachname:</span>  {surname}</p>
            <p><span>Email:</span>  {email}</p>
        </section>
    );
}

export default Level1_6;