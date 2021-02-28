import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import StyledHeader from './StyledHeader'
const Header = () => {
    return (
        <StyledHeader>
        <div className="container">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
        </StyledHeader>
    )
}
export default Header