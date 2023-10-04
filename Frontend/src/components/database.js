import { useEffect, useState } from "react";

function Database(){
    const [values , setValues] = useState([]);


    useEffect(()=>{
        fetch("http://localhost:8800/").then(data=>data.json()).then(data=>setValues(data));
    },[])

    console.log(values);
    return(
        <div>
            <h1>hello</h1>
            {values.map((val , idx) => (
               <p key={idx}>hello</p>
            ))}
        </div>
    )
}
export default Database;