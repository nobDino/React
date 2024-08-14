import React from "react";

const Styles ={ //css 넣는방법
     wrapper:{
        margin: 8, padding: 8,
        display: "flex", flexDirection:"row",
        border:"1px solid grey", borderRadius:16,
     },
     imageContainer:{},
     image : {
        width: 50, height:50,
        borderRadius:25,
     },
     contentContainer:{
        marginLeft:8, display:"flex",
        flexDirection:"column", justifyContent:"center",
     },
     nameText:{
        color:"black", fontSize:16,
        fontWeight:"bold",
     },
     commentText:{
        color:"black",
        fontSize:16,
     },
};
function Comment(props){
    return(
        <div style={Styles.wrapper}>
            <div style={Styles.imageContainer}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" 
                style={Styles.image}
                alt={`${props.name}'s profile`} 
            />
            </div>
            <div style={Styles.contentContainer}>
                <span style={Styles.nameText}>{props.name}</span>
                <span style={Styles.commentText}>{props.comment} </span>
            </div>
        </div> 
    )
}
export default Comment;