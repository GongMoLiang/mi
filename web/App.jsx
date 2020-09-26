import React, { Component } from "react"
import { Provider, Button } from "react-redux"
import store from "./store/index"
import LayoutContanier from "./component/common/Layout.jsx"

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <LayoutContanier></LayoutContanier>
            </Provider>
        )
    }
}
