import React, { Component } from 'react'
import {  Button} from 'antd'
import ContentContainer from '../../../common/component/ContentContainer'

export default class StudentList extends Component {
    render(){
        return (
            <ContentContainer>
                <Button type="primary">搜索</Button>
            </ContentContainer>
        )
    }
}