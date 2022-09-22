import {useState} from "react"
import  "../styles.css"

export const User=()=>{
    const [user,setUser]=useState("")
        const [pwd,setPwd]=useState("")
                const [errMsg,setErrMsg]=useState("")
                const [success,setSuccess]=useState(false)


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