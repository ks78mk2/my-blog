import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

const ContentsRouter =  (props) => {
    return (
      <Router>
          <Suspense fallback={null}>
            <Switch>
                <Route path="/contents/intro" component={}/>
                <Route path="/contents/post" component={} />
                <Route path="/contents" component={()=> { return ( <Redirect to ="/contents/intro" />) }} />
            </Switch>
          </Suspense>
      </Router>
    )
  }
  
  export default ContentsRouter
  