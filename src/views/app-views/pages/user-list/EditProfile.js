import React, { Component } from 'react';
import { Form, Avatar, Button, Input, DatePicker, Row, Col, message, Upload, Spin } from 'antd';
import { UserOutlined, LoadingOutlined } from '@ant-design/icons';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import Flex from 'components/shared-components/Flex';
import { APP_PREFIX_PATH } from '../../../../configs/AppConfig';
import { connect } from "react-redux";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export class EditProfile extends Component {

	avatarEndpoint = 'https://www.mocky.io/v2/5cc8019d300000980a055e76'

	state= {
		avatarUrl: `/img/avatars/thumb-${this.props.location.state.id}.jpg`,
		name: null,
		email: null,
		username: null,
		dateOfBirth: null,
		phone: null,
		website: null,
		address: null,
		city: null,
		postcode: null,
		isLoaded: false
	}

	componentDidMount() {
		fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
			.then((data) => {
				data.json()
					.then((user) => {
						this.setState({...user, avatarUrl: `/img/avatars/thumb-${user.id}.jpg`, isLoaded: true})
					})
			})
	}

	getBase64(img, callback) {
		const reader = new FileReader();
		reader.addEventListener('load', () => callback(reader.result));
		reader.readAsDataURL(img);
	}

	render() {

		const onFinish = values => {
			setTimeout(() => {
				this.setState({
					user: values,
					isLoaded: true
				})
			}, 2000);
		};

		const onFinishFailed = errorInfo => {
			console.log('Failed:', errorInfo);
		};

		const onUploadAavater = info => {
			const key = 'updatable';
			if (info.file.status === 'uploading') {
				message.loading({ content: 'Uploading...', key, duration: 1000 });
				return;
			}
			if (info.file.status === 'done') {
				this.getBase64(info.file.originFileObj, imageUrl =>
					this.setState({
						avatarUrl: imageUrl,
					}),
				);
				message.success({ content: 'Uploaded!', key,  duration: 1.5 });
			}
		};

		const onRemoveAvater = () => {
			this.setState({
				avatarUrl: ''
			})
		}

		const onChangesSubmit = () => {
			this.setState({ isLoaded: false });
			setTimeout(() => {
				this.props.history.push(`${APP_PREFIX_PATH}/pages/user-list`);
				this.setState({ isLoaded: true });
			}, 1000)
		}

		const { name, email, username, dateOfBirth, phone, website, address, avatarUrl, isLoaded } = this.state;
	
		if (!isLoaded) {
			return (
				<Spin indicator={antIcon} size="large" />
			)
		}

		return (
			<>
				<Flex alignItems="center" mobileFlex={false} className="text-center text-md-left">
					<Avatar size={90} src={avatarUrl} icon={<UserOutlined />}/>
					<div className="ml-md-3 mt-md-0 mt-3">
						<Upload onChange={onUploadAavater} showUploadList={false} action={this.avatarEndpoint}>
							<Button type="primary">Change Avatar</Button>
						</Upload>
						<Button className="ml-2" onClick={onRemoveAvater}>Remove</Button>
					</div>
				</Flex>
				<div className="mt-4">
					<Form
						name="basicInformation"
						layout="vertical"
						initialValues={
							{
								'name': name,
								'email': email,
								'username': username,
								'dateOfBirth': dateOfBirth,
								'phone': phone,
								'website': website,
								'address': address.street,
								'city': address.city,
								'postcode': address.zipcode
							}
						}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
					>
						<Row>
							<Col xs={24} sm={24} md={24} lg={16}>
								<Row gutter={ROW_GUTTER}>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Name"
											name="name"
											rules={[
												{
													required: true,
													message: 'Please input your name!',
												},
											]}
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Username"
											name="username"
											rules={[
												{
													required: true,
													message: 'Please input your username!'
												},
											]}
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Email"
											name="email"
											rules={[{
												required: true,
												type: 'email',
												message: 'Please enter a valid email!'
											}]}
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Date of Birth"
											name="dateOfBirth"
										>
											<DatePicker className="w-100"/>
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Phone Number"
											name="phone"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Website"
											name="website"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={24}>
										<Form.Item
											label="Address"
											name="address"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="City"
											name="city"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Post code"
											name="postcode"
										>
											<Input />
										</Form.Item>
									</Col>
								</Row>
								<Button type="primary" htmlType="submit" onClick={onChangesSubmit}>
									Save Change
								</Button>
							</Col>
						</Row>
					</Form>
				</div>
			</>
		)
	}
}

const mapStateToProps = ({ users }) => {
	const { usersList } = users
	return { usersList }
};

export default connect(mapStateToProps)(EditProfile);