import React from 'react';
import md5 from 'md5';
import { Button, FormGroup, ControlLabel, FormControl, HelpBlock, Image } from 'react-bootstrap';
import { toast } from 'react-toastify'
import homeApi from '../apis/HomeApi';

class Login extends React.Component {
	constructor(props) {
		super(props);
	}

	handleSubmit(e) {
		e.preventDefault()
		if (''!=this.username.value || ''!=this.password.value) {
			homeApi.loginApi(this.username.value, md5(this.password.value),
				this.handleLoginSuccess.bind(this), this.handleLoginFailure.bind(this))
		} else {
			toast.error("Username or password should not be blank.")
		}
	}

	handleLoginSuccess() {
		this.props.loginCallback({ loggedIn: true })
	}

	handleLoginFailure(message) {
		alert(message)
	}

	render() {
		return (
			<div className="loginContainer">
				<div>
					<Image src="https://storage.googleapis.com/jzb/logos/justzaap_logo.png" responsive />
					<br/>
					<form onSubmit={this.handleSubmit.bind(this)}>
					    <FormGroup controlId="formBasicUsername">
				          <FormControl
				            type="text"
				            placeholder="Email"
										inputRef={(ref) => {this.username = ref}}
				          />
				        </FormGroup>
				        <FormGroup controlId="formBasicPassword">
				          <FormControl
				            type="password"
				            placeholder="Password"
										inputRef={(ref) => {this.password = ref}}
				          />
				        </FormGroup><br/>
						<Button type="submit" className="btn btn-lg btn-primary btn-block">Sign In</Button>
					</form>
					<br/>
					<a href="/forgot_password">Forgot Password?</a>
				</div>
			</div>
		);
	}
}

Login.propTypes = {
	loginCallback: React.PropTypes.func
}

export default Login;
