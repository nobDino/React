import React, { useState } from "react";

const Move = (props) => {
    const [value, setValue] = useState(''); // 첫 번째 textarea의 값
    const [value1, setValue1] =useState('');

    const handleChange=(e)=>{
        setValue(e.target.value);
    }
    const handleClick=(e)=>{
        setValue1(value);
    }
    return (
        
        <>
            <input type="text" value={value} onChange={handleChange}/><br/>
            <button onClick={handleClick}>Go</button>
            <input type="text" value={value1}/>
            </>
        )
}

export default Move;