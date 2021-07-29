import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

const AccountsRouter =  (props) => {
    return (
      <Router>
          <Suspense fallback={null}>
            <Switch>
                <Route path="/accounts/login" component={}/>
                <Route path="/accounts" component={()=> { return ( <Redirect to ="/account/login" />) }} />
            </Switch>
          </Suspense>
      </Router>
    )
  }
  
  export default AccountsRouter
  