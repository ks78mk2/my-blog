import { lazy, Suspense , useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import GlobalContextProvider, { useGlobalContext } from './contexts/GlobalContext';
import AccountsRouter from './routers/AccountsRouter';
import ContentsRouter from './routers/ContentsRouter';

const RoutercontentView = () => {
    return (
        <>
            <Router>
                <Suspense fallback={null}>
                    <Switch>
                        <Route exact path="/accounts*" component={AccountsRouter}/>
                        <Route exact path="/contents*" component={ContentsRouter}/>
                        <Route exact path="/" component={() => {
                            return (
                                <Redirect to="/accounts" />
                            )
                        }}/>
                        <Route exact path="*" component={}/>
                    </Switch>
                </Suspense>
            </Router>  
        </>
    )
}

function App() {
    return (
        <GlobalContextProvider>
            <RoutercontentView/>
        </GlobalContextProvider>    
    );
}

export default App;
