import React from "react";
import Comment from "./Comment";

const comments=[
    { name:"밤샌사람", comment:"안녕하세요~^^"},
    { name:"인난사람", comment:"아...네^^"},

];
function CommentList(props){
    return(
        <div>
            {comments.map(x => { //1:1로 대응되는함수
                return(
             <Comment name={x.name} comment={x.comment} />
            );
        })}
        </div>
    );
}
export default CommentList;