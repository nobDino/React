import React from "react";

const students=[
    {id:1, name:"Jene"},
    {id:2, name:"John"},
    {id:3, name:"Jason"},
    {id:4, name:"James"},
    {id:5, name:"Johanson"},
    {id:6, name:"pig"},
]
const Rollbook=(praps)=>{
    return(
        <ul>
            {students.map((x,index)=>{
                return<li key={x.id}>{x.name}</li>
            })}
        </ul>
    )
}
export default Rollbook;