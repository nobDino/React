import React, { useState, useEffect } from "react";
import styled from "styled-components";
// 스타일 컴포넌트
const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Div2 = styled.select`
  display: flex;
  align-items: center;
  justify-content: space-evenly; /* 버튼 간의 간격을 동일하게 배치 */
  width: 50%; /* Div2의 너비를 설정하여 justify-content가 효과를 발휘하도록 함 */
  margin-bottom: 14px;
`;

// 데이터 받는 법
const FetchGet = (props) => {
    const [data, setData] = useState(''); // 데이터 상태 (초기값 null로 수정)
    const [loading, setLoading] = useState(true); // 로딩 상태
    const [error, setError] = useState(''); // 에러 상태
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch('http://localhost:8081/getMenu', 
                    { // fetch 호출
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );
                console.log(result);
                const jsonData = await result.json(); // 응답 데이터를 JSON으로 변환
                setData(jsonData); // 상태에 데이터 저장
            } catch (error) { 
                setError(error); 
            } finally {
                setLoading(false); 
            }
        };
        fetchData();
    }, []);
    
    if (loading) {
        return <div>Loading...</div>; // 로딩 중일 때 표시
    }
    
    if (error) {
        return <div>Error: {error.message}</div>; // 에러 발생 시 표시
    }
    
     
    return (
        <MainDiv>
            <h1>메뉴 리스트</h1>
            <Div2 size={'12'}>
                {data.map((item) => (
                    <option key={item.id} value={item.id}>
                        {item.name} - {item.price}원
                    </option>
                ))}
            </Div2>
        </MainDiv>
    );
};
export default FetchGet;
