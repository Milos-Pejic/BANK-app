import { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { logOut } from "../auth.service"
import { getCredit, postCredit } from "../service"
import CreditList from "./CreditList"
import StyledApply from "./StyledApply"
import getStatus from "./utils"

const Apply = () => {
    const [credits, setCredits] = useState([])
    const [amount, setAmount] = useState('')
    const [error, setError] = useState('')

    const history = useHistory();

    const getCredits = () => {
        getCredit().then(res => {
            console.log(res.data)
            setCredits(res.data.result)
        })
    }

    useEffect(() => {
        getCredits()
    }, [])

    const isValid = () => !isNaN(Number(amount))

    const setErrorHelper = (text) => {
        setError(text)

        setTimeout(() => {
            setError('')

        }, 4000)
    }


    const checkError = () => {

        if (isNaN(Number(amount))) setErrorHelper('must be a number')

    }
    return (


        <>
            <StyledApply>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    if(!isValid()){
                    
                        checkError()
                        setAmount('')
                        return
                    }

                    postCredit(amount).then(res => {
                        console.log(res)
                        const status = getStatus(res.data.status)
                        alert(status)
                        getCredits()
                        setAmount('')
                    })
                }}>
                    <h6>Enter amount</h6>
                    <input type="text" value={amount} className="inputlogin" placeholder="enter amount" onChange={(e) => setAmount(e.target.value)} />
                    <input type="submit" className="confirm" value="apply" />
                    <button className="logout" onClick={() => {
                        logOut()
                        history.push('/')
                    }}>Logout</button>
                    <p>{error}</p>
                </form>
                
                <CreditList credits={credits} />


            </StyledApply>
        </>
    )
}
export default Apply