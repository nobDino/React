import React,{useState} from "react";
import ReactDOM from "react-dom/client";

function Color() {
  const [color, setColor] = useState("red");

  return (
    <>
        <h1>내가 좋아하는 색상은 {color}입니다.</h1>
        <button onClick={()=>setColor('blue')}>Blue</button>
    </>
  )
    
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Color />
);

export default Color;
              