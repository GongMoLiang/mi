import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { HashRouter, Redirect } from 'react-router-dom'
import store from './store/index'
import homeRouters from './config/homerouter'
import Router from './common/component/Router'

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<HashRouter>
				    <Router
					    routers= { homeRouters }
					>
					     <Redirect to="/student/manage/list"></Redirect>
					</Router>
				</HashRouter>
			</Provider>
		)
	}
}
