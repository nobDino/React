import React,{useState} from "react";


const Gugudan = () => {
    const [number, setNumber] = useState('');
    const [guguTable, guguTable1] = useState([]);


    const handleChange = (e) => {
        setNumber(e.target.value);
    };


const handleClick = () => {
    if (number >= 1 && number <= 9) {
        const table = [];
        for (let i = 1; i <= 9; i++) {
            table.push(<p key={i}>{number} x {i} = {number * i}</p>);
        }
        guguTable1(table);
    }
};

return (
    <div>
        <input type="text" value={number} onChange={handleChange} placeholder="숫자를 입력하세요" />
          <button onClick={handleClick}>구구단 출력</button>
            <div>
                {guguTable}
            </div>
        </div>
);
};

export default Gugudan;
