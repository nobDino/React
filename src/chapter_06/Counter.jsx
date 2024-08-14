import React, { useEffect, useState } from "react";

function Counter(props) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `총 ${count}번 클릭했습니다`;
    }, [count]); // count가 변경될 때마다 effect를 재실행

    return (
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={() => setCount(count + 1)}>클릭</button>
        </div>
    );
}

export default Counter;
