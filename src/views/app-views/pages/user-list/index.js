import React, { Component } from 'react'
import { Card, Table, Tooltip, message, Button, Spin } from 'antd';
import { EyeOutlined, DeleteOutlined, LoadingOutlined } from '@ant-design/icons';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import { APP_PREFIX_PATH } from '../../../../configs/AppConfig';
import { setUsers } from 'redux/actions/Users';
import { connect } from "react-redux";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export class UserList extends Component {

	state = {
		userProfileVisible: false,
		selectedUser: null,
		isLoaded: false
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((data) => {
				data.json()
					.then((users) => {
						this.props.setUsers(users.map(user => ({...user, avatarUrl: `/img/avatars/thumb-${user.id}.jpg`})))
						this.setState({isLoaded: true})
					})
			})
	}

	deleteUser = userId => {
		// TODO ADD ACTION FOR DELETING USERS FROM STORE
		// this.setState({
		// 	users: this.state.users.filter(item => item.id !== userId),
		// })
		message.success({ content: `Deleted user ${userId}`, duration: 2 });
	}

	showUserProfile = userInfo => {
		this.setState({
			userProfileVisible: true,
			selectedUser: userInfo
		});
	};

	closeUserProfile = () => {
		this.setState({
			userProfileVisible: false,
			selectedUser: null
    });
	}

	render() {
		const { isLoaded } = this.state;
		const { usersList } = this.props;

		const tableColumns = [
			{
				title: 'User',
				dataIndex: 'name',
				render: (_, record) => (
					<div className="d-flex">
						<AvatarStatus src={record.avatarUrl} name={record.name} subTitle={record.email}/>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.name.toLowerCase();
  						b = b.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: 'Company',
				dataIndex: 'company',
				render: (_, record) => (
					<span>{record.company.name}</span>
				),
				sorter: {
					compare: (a, b) => {
						a = a.company.name;
						b = b.company.name;
						return a > b ? 1 : b > a ? -1 : 0
					}
				},
			},
			{
				title: 'Phone',
				dataIndex: 'phone',
				render: (_, record) => (
					<span>{record.phone}</span>
				),
				sorter: {
					compare: (a, b) => a.phone.length - b.phone.length,
				},
			},
			{
				title: 'Website',
				dataIndex: 'website',
				render: (_, record) => (
					<span>{record.website}</span>
				),
				sorter: {
					compare: (a, b) => {
						a = a.website;
						b = b.website;
						return a > b ? 1 : b > a ? -1 : 0
					}
				},
			},
			{
				title: '',
				dataIndex: 'actions',
				render: (_, elm) => (
					<div className="text-right">
						<Tooltip title="View">
							<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => {this.props.history.push({
								pathname: `${APP_PREFIX_PATH}/pages/user-list/${elm.id}`,
								state: elm.id,
							})}} size="small"/>
						</Tooltip>
						<Tooltip title="Delete">
							<Button danger icon={<DeleteOutlined />} onClick={()=> {this.deleteUser(elm.id)}} size="small"/>
						</Tooltip>
					</div>
				)
			}
		];
		if (!isLoaded) {
			return (
				<Spin indicator={antIcon} size="large" />
			)
		}
		return (
			<Card bodyStyle={{'padding': '0px'}}>
				<Table columns={tableColumns} dataSource={usersList} rowKey='id' />
			</Card>
		)
	}
}

const mapStateToProps = ({ users }) => {
	const { usersList } = users
	return { usersList }
};

export default connect(mapStateToProps, { setUsers })(UserList);
