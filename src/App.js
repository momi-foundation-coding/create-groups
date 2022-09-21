import React from "react";
import {data} from "./data";
import "./index.css"


export const  App = () => {

  const randomIdArr = [];
  const groupSize = 0;
  
  const changeId = () =>{

    const randomId = Math.floor(Math.random() * data.length);

    if(randomIdArr.indexOf(randomId)  === -1 ){
      randomIdArr.push(randomId);
    }

    else{
      changeId();
    }

    return randomIdArr;

  }

  const Group = () => {

    data.map( changeId);

    console.log(randomIdArr);
  };

  

  return (
    <div >
    
        <h1>Please input your required number per group:</h1>

        <label> Number per group</label> &nbsp; &nbsp;

        <input type="number" name="numberPerGroup" value={groupSize}  required/> &nbsp; &nbsp;

        <button onClick={Group }> Group</button>
        
        <div  style={{display:"flex", flexWrap:"wrap"}} >
          {data.map((datum)=>{
            return(
              <div className="items">
                <h3>{`${datum.first_name} ${datum.last_name}`}</h3>
                <p>{datum.email}</p>
              </div>
            )
          })}
        </div>
    </div>
    
  );
}


