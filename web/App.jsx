import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route, Switch, HashRouter, Redirect } from 'react-router-dom'
import store from './store/index'
import routers from './component/router/router'
//import LayoutContanier from './component/common/Layout.jsx'

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<HashRouter>
					<Switch>
						{_.map(routers, (item, index) => (
							<Route
								key={index}
								path={item.path}
								exact={item.exact}
								component={item.component}></Route>
						))}
						<Redirect to="/student"></Redirect>
					</Switch>
				</HashRouter>
			</Provider>
		)
	}
}
