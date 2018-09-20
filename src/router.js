import React from 'react'
import {HashRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import Login from './containers/login'
import Teacher from './containers/teacher'
import Student from './containers/student'
import Admin from './containers/admin'

export default class IRouter extends React.Component{

    render(){
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path='/login' component={Login}/>
                        <Route path='/student' component={Student}/>
                        <Route path='/teacher' component={Teacher}/>
                        <Route path='/admin' render={() =>
                            <Admin>
                                <Switch>

                                </Switch>
                            </Admin>
                        }/>
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}