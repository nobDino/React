import React, { useState } from "react";

function Move(props) {
    const [inputValue, setInputValue] = useState(""); // 첫 번째 입력란의 값을 저장할 상태
    const [outputValue, setOutputValue] = useState(""); // 두 번째 입력란의 값을 저장할 상태

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleButtonClick = () => {
        setOutputValue(inputValue);
    };

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <p>여기 값을</p>
            <br />
            <button onClick={handleButtonClick}>Go</button>
            <br />
            <input type="text" value={outputValue} readOnly />
            <p>go 누르면 여기에 출력</p>
        </div>
    );
}

export default Move;
