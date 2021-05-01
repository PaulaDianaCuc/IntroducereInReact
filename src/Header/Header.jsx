import  React, { useState, useEffect} from 'react';
import './Header.css';

export default function Header() {
    const [pozitie, setPozitie] = useState('stanga');

    useEffect(() => {
        console.log(`Antetul se va afisa in partea ${pozitie}`);
    }, [pozitie]);

    return <div className="header">Introducere in React</div>;
}

//Exemplu useSrate
//const [variabilaState, setVariabilaStare] = useState(valoareInitiala);

//Exemplu useContext
//const valoare = useContext(Context);


