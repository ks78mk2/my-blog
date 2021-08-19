import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

const AccountsRouter =  (props) => {
  const LoginView = lazy(() => import('views/Account/Login'));
    return (
      <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path="/accounts/login" component={LoginView}/>
                <Route exact path="/accounts" component={()=> { return ( <Redirect to ="/accounts/login" />) }} />
            </Switch>
          </Suspense>
      </Router>
    )
  }
  
  export default AccountsRouter
  