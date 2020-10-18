import React, { Component, Fragment } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
import { UserOutlined, LockOutlined, SettingOutlined } from '@ant-design/icons'
import Router from '../../common/component/Router'
import './StudentForm.less'

import { headerMenuList } from '../../config/menu'
import studentsRouters from '../../config/studentrouter'
// const { Header, Sider } = Layout
const { SubMenu } = Menu

export default class StudentForm extends Component {
	render() {
		return (
			<Fragment>
				<header>
					<Menu
						theme="dark"
						mode="horizontal"
						defaultSelectedKeys={['1']}
						style={{ lineHeight: '50px' }}
					>
						{_.map(headerMenuList, item => (
							<Menu.Item key={item.key}>
								<Link to={item.path}>{item.title}</Link>
							</Menu.Item>
						))}
					</Menu>
				</header>
				<main>
					<Router routers={studentsRouters} />
				</main>
			</Fragment>
		)
	}
}
