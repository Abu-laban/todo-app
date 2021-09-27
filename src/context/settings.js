import React, { useState, useEffect } from 'react';

export const SettingsContext = React.createContext();

export default function SettingsProvider(props) {
    const [hide, setHide] = useState(false);
    const [itemNumber, setItemNumber] = useState(3);
    const [sort, setSort] = useState('difficulty');


    useEffect(() => {
        const localSettings = JSON.parse(localStorage.getItem('settings'));
        if (localSettings) {
            setItemNumber(Number(localSettings.itemNumber));
            setHide(hide);
        }
    }, [])



    return (
        <SettingsContext.Provider value={{ hide, itemNumber, sort, setHide, setItemNumber, setSort }}>
            {props.children}
        </SettingsContext.Provider>
    )
}