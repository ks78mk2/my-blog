import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

const ContentsRouter =  (props) => {
  const IntroView = lazy(() => import('views/Main/Intro'));

    return (
      <Router>
          <Suspense fallback={null}>
            <Switch>
                <Route path="/contents/intro" component={IntroView}/>
                <Route path="/contents/post" component={() => { return ( <> <h1>post</h1> </>)}} />
                <Route exact path="/contents" component={() => { return ( <Redirect to ="/contents/intro" />) }} />
            </Switch>
          </Suspense>
      </Router>
    )
  }
  
  export default ContentsRouter
  