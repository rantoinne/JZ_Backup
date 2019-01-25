import React from 'react';
import qs from 'query-string';
import md5 from 'md5';
import homeApi from '../apis/HomeApi';
import { toast } from 'react-toastify'
import { Button, FormGroup, ControlLabel, FormControl, HelpBlock, Image } from 'react-bootstrap';

class ResetPassword extends React.Component {
  handleSubmit(e) {
    let token = qs.parse(location.search).token
		e.preventDefault()
		if (''==this.password.value || ''==this.repassword.value ||
              this.password.value != this.repassword.value) {
      toast.error("password should not be blank or different.")
		} else {
      let hashed = md5(this.password.value)
      homeApi.resetPasswordApi(token, hashed,
				this.handleLoginSuccess.bind(this), this.handleLoginFailure.bind(this))
		}
	}
  handleLoginSuccess() {
    toast.success("Success, Please login to continue.")
    this.props.history.push('/')
  }
  handleLoginFailure(message) {
    toast.error(message)
  }
  render() {
  	return (
      <div className="loginContainer">
				<div>
					<Image src="https://storage.googleapis.com/jzb/logos/justzaap_logo.png" responsive />
          <br/>
          <h3>Reset Password</h3>
					<br/>
					<form onSubmit={this.handleSubmit.bind(this)}>
			      <FormGroup controlId="formBasicPassword">
		          <FormControl
		            type="password"
		            placeholder="Password"
								inputRef={(ref) => {this.password = ref}}
		          />
		        </FormGroup>
            <FormGroup controlId="formBasicRePassword">
		          <FormControl
		            type="password"
		            placeholder="Confirm Password"
								inputRef={(ref) => {this.repassword = ref}}
		          />
		        </FormGroup>
						<Button type="submit" className="btn btn-lg btn-primary btn-block">Reset</Button>
					</form>
          <br/>
				</div>
			</div>
  	);
  }
}

export default ResetPassword;
