import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import Apply from './Private/Apply';

import PrivateRoute from './Private/PrivateRoute';
import Header from './Public/Header';
import Login from './Public/Login';
import PublicRoute from './Public/PublicRoute';
import Register from './Public/Register';

import Home from './Public/Home';
const App = () => {
  return (
    <>
      <Router>
      
        <Switch>
        
          
          <PublicRoute component={Login} path="/login"/>
          <PublicRoute component={Register} path="/register"/>
          <PublicRoute component={Home}  exact path="/"/>

          <PrivateRoute component={Apply} path="/apply"/>
          <Redirect from="/" to="/apply" />
          
          
          

           </Switch>
      </Router>
    </>
  )
}

export default App;



//const App = () => {
  //  const [stroies, setStories] = useState([])
  //  useEffect(() => {
  //    getNews().then(res => {
  //      console.log(res.data)
  //      setStories(res.data.articles)
  //    })
  //  }, [])
  //  return (
  //    <>
  //      {stroies.map(el=><p>{el.author}</p>)}
  //    </>
  //  )
  //}