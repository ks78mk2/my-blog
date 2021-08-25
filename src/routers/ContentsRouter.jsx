import { lazy, Suspense } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

const ContentsRouter =  (props) => {
  const MainView = lazy(() => import('views/Main'));

    return (
      <>
          <Suspense fallback={null}>
            <Switch>
                <Route path="/contents/intro" component={MainView}/>
                <Route path="/contents/post" component={() => { return ( <> <h1>post</h1> </>)}} />
                <Route exact path="/contents" component={() => { return ( <Redirect to ="/contents/intro" />) }} />
            </Switch>
          </Suspense>
      </>
    )
  }
  
  export default withRouter(ContentsRouter)
  