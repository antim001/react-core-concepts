import { useState } from "react"

export default function Counter(){
    const[Count,setCount]=useState(0);
    const addHandler=()=>{
         const newCount=Count+1;
         setCount(newCount)
    }
     return(
        <div style={{border:'2px solid yellow'}}>
            <h3>Counter:{Count}</h3>
            <button onClick={addHandler}>Add</button>
        </div>
     )
}