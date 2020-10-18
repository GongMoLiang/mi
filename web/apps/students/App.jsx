import React, { Component } from 'react'
import PageLayout from '../../common/component/PageLayout'
import routers from './config/router'
import menus from './config/menus'


export default class StudentList extends Component {
    render(){
        return (
            <PageLayout 
               routers={ routers }
               menus={ menus}
            />
        )
    }
}