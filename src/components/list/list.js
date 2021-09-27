import React, { useState, useContext, useEffect } from 'react'
import { Button, Card, Elevation } from '@blueprintjs/core';
import { SettingsContext } from '../../context/settings'

function List(props) {
    const settings = useContext(SettingsContext)
    const [activeList, setActiveList] = useState([]);

    useEffect(() => {
        if (settings.hide) {
            setActiveList(props.pagination());
        } else {
            let temp = props.list.filter((item) => {
                return item.complete === false
            })
            setActiveList(temp.slice(props.startPage, props.endPage));
        }
    }, [settings.hide]);

    const toggleView = () => {
        settings.setHide(!settings.hide);
    }

    return (
        <Card elevation={Elevation.THREE}>

            <button onClick={toggleView} >View Completed: {settings.hide.toString()}</button>

            {
                activeList.map((item, idx) => (
                    <div key={idx}>
                        <p>{item.text}</p>
                        <p><small>Assigned to: {item.assignee}</small></p>
                        <p><small>Difficulty: {item.difficulty}</small></p>
                        <div>Complete: {item.complete.toString()}</div>
                        {
                            (!item.complete)
                                ? (
                                    <Button onClick={() => props.toggleComplete(item.id)}>Complete: {item.complete.toString()}</Button>
                                )
                                : (
                                    <>
                                        <Button onClick={() => props.toggleComplete(item.id)}>Complete: {item.complete.toString()}</Button>
                                        <br></br>
                                        <Button onClick={() => props.deleteItem(item.id)}>Delete </Button>
                                    </>
                                )
                        }
                        <hr />
                    </div>
                ))
            }
            <Button onClick={props.previous}>Previous</Button>
            <Button onClick={props.next}>Next</Button>
        </Card>
    );
};


export default List;