import React from "react"
import  "../styles.css"

export const User=()=>{
    
    const getValues=(value)=>{
        console.log(value)
    }
    return(<div className="User">
        
        User Component
        
        <div>
            <div>
            <input onChange={getValues} name="user"type="text"placeHolder="User name" className="inputForm">
            </input>
            
            
                <input name="password"type="text" placeHolder="Password"className="inputForm">
            </input>
        
        </div>
        
    </div>
    </div>
    )
}