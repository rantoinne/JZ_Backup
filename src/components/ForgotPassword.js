import React from 'react';
import homeApi from '../apis/HomeApi';
import { Button, FormGroup, ControlLabel, FormControl, HelpBlock, Image } from 'react-bootstrap';
import { toast } from 'react-toastify'

class ForgotPassword extends React.Component {
  handleSubmit(e) {
		e.preventDefault()
		if (''==this.username.value) {
      toast.error("Email should not be blank.")
		} else {
      homeApi.forgotPasswordApi(this.username.value,
				this.handleLoginSuccess.bind(this), this.handleLoginFailure.bind(this))
		}
	}
  handleLoginSuccess() {
    toast.success("Succes, Please check your email.")
    this.username.value=''
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
          <h3>Forgot Password</h3>
					<br/>
					<form onSubmit={this.handleSubmit.bind(this)}>
					    <FormGroup controlId="formBasicUsername">
				          <FormControl
				            type="text"
				            placeholder="Email"
										inputRef={(ref) => {this.username = ref}}
				          />
				        </FormGroup>
						<Button type="submit" className="btn btn-lg btn-primary btn-block">Send</Button>
					</form>
          <br/>
					<a href="/">back</a>
				</div>
			</div>
  	);
  }
}

export default ForgotPassword;
