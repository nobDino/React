import React from "react";  

function Userinfo(props){
    return(
        <div className="user-info">
            <Avatar user={props.user}/>
            <div className="user-info-name">{props.author.name} </div>

        </div>
    )
}