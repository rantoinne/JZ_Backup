import React from 'react';
import { Button } from 'react-bootstrap';
import SubHeader from './SubHeader';
import phoneBookApi from '../apis/PhoneBookApi';
import { toast } from 'react-toastify';
import CreatableDemo from '../components/CreatableDemo'

class AddEmployee extends React.Component {
  notify(){
    toast.success("Employee Added!");
  }

  constructor(props) {
    super(props)
    this.state = {
      atTop: true,
      multi: true,
      multiValue: [],
      options: [
        { value: 'R', label: 'Red' },
        { value: 'G', label: 'Green' },
        { value: 'B', label: 'Blue' }
      ],
      value: undefined
    }
  }

  handleSubmit(e) {
		e.preventDefault()
    if (''!=this.username.value && ''!=this.email.value && ''!=this.mobile.value ) {
			phoneBookApi.addEmployee(this.username.value, this.mobile.value, this.email.value, this.handleSuccess)
		} else {
      toast.error("Username or Email or Mobile should not be blank.");
		}
	}

  handleSuccess() {
    this.notify();
  }

  render() {
    const { atTop, multi, multiValue, options, value } = this.state;
  	return (
      <div id="content-wrapper">
        <SubHeader title="Add Employee" />
        <br />
        <div id="content-container" className="box-shadow-sm">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="row group-details">
              <div className="col-md-12 pad-x">
                <div>
                  <div className="row pad-x">
                      <div className="col-md-6 pad-x">
                          <div className="inputBox">
                              <div className="inputText">Name</div>
                              <input type="text" name="username" className="input"
                                ref={(ref) => {this.username = ref}}/>
                          </div>
                      </div>
                  </div>
                  <div className="row pad-x">
                      <div className="col-md-6 pad-x">
                          <div className="inputBox">
                              <div className="inputText">Email</div>
                              <input type="text" name="email" className="input"
                                ref={(ref) => {this.email = ref}}/>
                          </div>
                      </div>
                  </div>
                  <div className="row pad-x">
                      <div className="col-md-6 pad-x">
                          <div className="inputBox">
                              <div className="inputText">Mobile</div>
                              <input type="text" name="mobile" className="input"
                                ref={(ref) => {this.mobile = ref}}/>
                          </div>
                      </div>
                  </div>
                  <div className="row pad-x">
                    <div className="col-md-6 pad-x">
                      <CreatableDemo />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row container-footer">
                <div className="col-md-2">
                    <Button type="submit" className="btn btn-lg btn-primary btn-block">Add</Button>
                </div>
                <div className="col-md-2">
                    <a href="/employees" className="btn btn-link">Cancel</a>
                </div>
            </div>
          </form>
        </div>
      </div>
  	);
  }
}

export default AddEmployee;
