import { Redirect, Route } from "react-router"
import { isLogin } from "../auth.service"

const PrivateRoute = ({component: Component, ...rest}) => {
   
    return (

       
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />

    );
};

export default PrivateRoute