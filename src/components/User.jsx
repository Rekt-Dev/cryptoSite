import React from "react"
import  "../styles.css"

export const User=()=>{
    
    return(<div className="User">
        
        User Component
        
        <div>
            <div>
            <input name="user"type="text"placeHolder="User name" className="inputForm">
            </input>
            
            
                <input name="password"type="text" placeHolder="Password"className="inputForm">
            </input>
        
        </div>
        
    </div>
    </div>
    )
}