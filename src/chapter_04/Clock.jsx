import React from "react";

function Clock(){
    return(
        <div>
            <h3>안녕, 리액트!</h3>
            <h4>현재 시간 :{new Date().toLocaleTimeString()}</h4>
        </div>
    );
}
export default Clock;