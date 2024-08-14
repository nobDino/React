import React,{useState} from "react";

const Toggle =(props)=>{
    const [isToggleOn,setIsToggleOn] =useState(true);

    let handleClick =()=>{
        // setIsToggleOn((isToggleOn)=> !isToggleOn);
        setIsToggleOn((x)=> !x);
    }
    return(
        <button onClick={handleClick}>{isToggleOn?'켜짐':'꺼짐'}</button>
    )
}
// 아래는 같은기능 클래스로 똑같이 쓴거
// class Toggle extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={ isToggleOn: true};
//         this.handleCilck=this.handleCilck.bind(this);
//     }
//     handleCilck(){
//         this.setState(prevState=>({
//             isToggleOn: !prevState.isToggleOn
//         }));
//     }
//     render(){
//         return(
//             <button onClick={this.handleCilck}>{this.state.isToggleOn?'켜짐':'꺼짐'}</button>
//         )
//     }
// }
export default Toggle;