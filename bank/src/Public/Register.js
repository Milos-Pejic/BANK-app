import { useState } from "react"
import { useHistory } from "react-router"
import { registerUser } from "../service"
import Header from "./Header"
import StyledRegister from "./StyledRegister"

const Register = () => {
    const [personalId, setPersonalId] = useState('')
    const [error, setError] = useState('')
    const history = useHistory()

    const isValid = () => personalId.length === 13 &&
        !isNaN(Number(personalId))

    const setErrorHelper = (text) => {
        setError(text)

        setTimeout(() => {
            setError('')

        }, 4000)
    }


    const checkError = () => {
        if (personalId.length !== 13) setErrorHelper('the number must have 13 characters')
        if (isNaN(Number(personalId))) setErrorHelper('must be a number')

    }
    return (
        <>
            <Header />
            <StyledRegister>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    if (!isValid()) {

                        checkError()
                        setPersonalId('')
                        return
                    }
                    registerUser(personalId).then(res => {
                        history.push('/login')
                        console.log(res)
                    })
                        .catch(err => {
                            console.log(err)
                        })
                }}>
                    <h6>Please register, enter a new ID</h6>
                    <input type="text" className="inputlogin" placeholder="Enter your new ID" onChange={(e) => setPersonalId(e.target.value)} />
                    <input type="submit" className="confirm" value="register" />
                </form>
                <p>{error}</p>
            </StyledRegister>
        </>
    )
}
export default Register