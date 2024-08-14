import React,{useState} from "react";

const NameForm = (props)=>{
    const[value,setValue]=useState('');
    const[str1,setStr1]=useState('');

    const handleChange=(e)=>{
        setStr1(e.target.options[e.target.selectedIndex].text);
        setValue(e.target.value);

    }
    const handleSubmit=(e)=>{
        console.log(value);
        alert('입력한이름:'+value);
        e.preventDefault();
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>이름:
               <select value={value} size="5" onChange={handleChange}>
                    <option value="apple">Apple</option>
                    <option value="banana">Banana</option>
                    <option value="grape">Grape</option>
                    <option value="watermelon">Watermelon</option>
                </select>
            </label>
            <label>{str1}</label><br/>
            <button type="submit">제출</button>
        </form>
    )
}
export default NameForm;