import Header from "./Header"
import StayledHome from "./StayledHome"

const Home = () => {
    return (
        <>
        <Header/>
            <StayledHome>
                <h1>Welcome to our Bank. </h1>
                <p className="login">If you want a loan, you have to log in.</p> 
                <p className="register">if you do not have an account, you must register.</p>
             </StayledHome>
        </>
    )
}
export default Home