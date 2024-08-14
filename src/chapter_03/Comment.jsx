import React from "react";

function Comment(props){
    return(
        <div className="comment">
            <Userinfo user={props.author}/>
            <div className="commnet-text">{props.text}</div>
            <div className="commnet-date">{FormData(props.date)}</div>
        </div>
    )
}