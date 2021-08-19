import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

const ContentsRouter =  (props) => {
    return (
      <Router>
          <Suspense fallback={null}>
            <Switch>
                <Route path="/contents/intro" component={() => { return ( <> <h1>intro</h1> </>)}}/>
                <Route path="/contents/post" component={() => { return ( <> <h1>post</h1> </>)}} />
                <Route path="/contents" component={()=> { return ( <Redirect to ="/contents/intro" />) }} />
            </Switch>
          </Suspense>
      </Router>
    )
  }
  
  export default ContentsRouter
  