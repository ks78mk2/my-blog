import { lazy, Suspense } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

const AccountsRouter =  (props) => {
  const LoginView = lazy(() => import('views/Account/Login'));
  
    return (
      <>
          <Suspense fallback={null}>
            <Switch>
                <Route path="/accounts/login" component={LoginView}/>
                <Route exact path="/accounts" component={()=> { return ( <Redirect to ="/accounts/login" />) }} />
            </Switch>
          </Suspense>
      </>
    )
  }
  
  export default withRouter(AccountsRouter)
  