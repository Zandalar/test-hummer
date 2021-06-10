import React, { Component } from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import InnerAppLayout from 'layouts/inner-app-layout';
import EditProfile from '../user-list/EditProfile';

const SettingOption = ({ match, location }) => {
	return (
		<Menu
			defaultSelectedKeys={`${match.url}/user-list/:id`}
			mode="inline"
			selectedKeys={[location.pathname]}
		>
			<Menu.Item key={`${match.url}/user-list/:id`}>
				<UserOutlined />
				<span>Edit Profile</span>
				<Link to={'edit-profile'} />
			</Menu.Item>
		</Menu>
	);
};

const SettingContent = ({ match }) => {
	return (
		<Switch>
			<Redirect exact from={`${match.url}`} to={`${match.url}/user-list/:id`} />
			<Route path={`${match.url}/user-list/:id`} component={EditProfile} />
		</Switch>
	)
}

export class Setting extends Component {
	render() {
		return (
			<InnerAppLayout
				sideContentWidth={320}
				sideContent={<SettingOption {...this.props}/>}
				mainContent={<SettingContent {...this.props}/>}
			/>
    );
	}
}

export default Setting
