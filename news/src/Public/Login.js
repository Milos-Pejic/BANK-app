import { useState } from "react"
import { useHistory } from "react-router"
import { setToken } from "../auth.service"
import { postUser } from "../service"
import Header from "./Header"
import StayledLogin from "./StayledLogin"

const Login=()=>{

    const [personalId,setPersonalId]=useState('')
    const [error,setError]=useState('')
    const history=useHistory()

    const isValid=()=>personalId.length===13 &&
                    !isNaN(Number(personalId))

    const setErrorHelper=(text)=>{
        setError(text)
        
        setTimeout(()=>{
            setError('')
           
        },4000)
    }


    const checkError=()=>{
        if(personalId.length !==13) setErrorHelper('the number must have 13 characters')
        if(isNaN(Number(personalId))) setErrorHelper('must be a number')
       
    }

    return(
        <>
         <Header/>
            <StayledLogin>
            <form onSubmit={(e)=>{
                e.preventDefault()
                
                if(!isValid()){
                    
                    checkError()
                    setPersonalId('')
                    return
                }
                postUser(personalId).then(res=>{
                    console.log(res.data)
                    setToken(res.data.token)
                    console.log(res.data.token)
                    history.push('/apply')
                })
            }}>
                
                <h6>Enter your ID</h6>
                
                <input type="text" value={personalId} className="inputlogin"  placeholder="enter ID here" onChange={(e)=>setPersonalId(e.target.value)}/>
                <input type="submit" className="confirm" value="Login"/>
                
            </form>  
            <p>{error}</p>
            </StayledLogin>   
        </>
    )
}
export default Login