import React from 'react';






const person = (props) => {
    return (
        <div>
    
    <p onClick={props.click}>I am {props.name} and this is my age: {props.age}.</p>
    <p>{props.children}</p>
    <input type="text" onChange={} />
    </div>)
}

export default person;