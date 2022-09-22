import React from "react"
import  "../styles.css"

export const User=()=>{
    
    const getValues=(value)=>{
        console.log(event.target.value,event.target.name)
    }
    return(<div className="User">
        
        User Component
        
        <div>
            <div>
            <input onChange={getValues} name="user"type="text"placeHolder="User name" className="inputForm">
            </input>
            
            
                <input onChange={getValues}name="password"type="text" placeHolder="Password"className="inputForm">
            </input>
            <br />
        <button>Submit</button>
        </div>
        
    </div>
    </div>
    )
}