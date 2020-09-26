import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'

@connect( store => store)
export default class Hello extends Component {
    handleAge = () =>{
        const { dispatch } = this.props 
        dispatch({
            type: 'CHANGE_AGE',
            age: 20
        })
    }
    render(){
        const { name, age } = this.props
        return (
            <div>
                <div>{ name }</div>
                <div>{ age }</div>
                <Button onClick = { this.handleAge } type="primary">点击修改名字</Button>
            </div>
        )
    }
}
