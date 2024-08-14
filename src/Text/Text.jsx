import React, { useState } from "react";


const Text = (props) => {
    const [value, setValue] = useState(''); // 첫 번째 textarea의 값
    const [display, setDisplay] = useState(''); // 두 번째 textarea에 표시할 값

    // 첫 번째 textarea의 값이 변경될 때 호출됨
    const handleChange = (e) => {
        setValue(e.target.value); // 입력된 값을 상태로 저장
    }

    // 폼 제출 시 호출됨
    const handleSubmit = (e) => {
        console.log(value)
        setDisplay(value); // 두 번째 textarea에 표시할 값 업데이트
        e.preventDefault(); // 폼 제출 시 페이지 새로 고침 방지
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>입력:  <br/>
                <textarea 
                    value={value} 
                    onChange={handleChange} 
                />
            </label>
            <br/>
            <button type="submit">↑의 값을 ↓로</button>
          
            <br/>
            <label>출력:  <br/>
                <textarea 
                    value={display} 
                    readOnly // 읽기 전용으로 설정
                /> 
            </label><br/>
            <label>1번 칸의 값 "{display}"</label><br/>
        </form>
    )
}

export default Text;
