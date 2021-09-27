import React, { useContext, useEffect, useState } from 'react';
import { SettingsContext } from "../../context/settings"

function Settings() {
    const settings = useContext(SettingsContext)
    const [show, setShow] = useState(true);
    const [numOfitems, setNumOfitems] = useState(1);

    function handleItemNumber(e) {
        setNumOfitems(Number(e.target.value));
    }
    function handleView(e) {
        if (e.target.checked) {
            setShow(e.target.checked);
        } else {
            setShow(e.target.checked);
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        settings.setItemNumber(Number(numOfitems));
        settings.setHide(show);
    }

    useEffect(() => {
        let payload = {
            itemNumber: settings.itemNumber,
            hide: settings.hide,
        }
        if (settings.itemNumber) {
            localStorage.setItem('settings', JSON.stringify(payload));
        }
    }, [settings])

    return (
        <div>
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <label>The Number Of The Items Shown Per Pages</label>
                <input name='items' type='number' placeholder={1} value={numOfitems} min={1} onChange={handleItemNumber}></input>
                <label>View completed items</label>
                <input name='view' type='checkbox' onChange={handleView}></input>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Settings;
