import React from 'react';
import VisitorsList from '../containers/VisitorsList';
import { Table, FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap';
import '../custom.css'

class AddUser extends React.Component {

	constructor(props) {
		super(props)
		this.state= {
			name: '',
			email: '',
			location: ''
		};
		this.myEmployeeArray= [];
		this.acceptNewLocationEmployee = this.acceptNewLocationEmployee.bind(this);
	}

	componentWillMount() {
		this.pushMoreEmployee();
		this.myEmployeeArray.push(1);
	}

	pushMoreEmployee() {
		this.myEmployeeArray.push(1);
	}

	handleUserName(e) {
		e.preventDefault();
		this.setState({ name: e.target.value })
	}

	handleUserLocation(e) {
		e.preventDefault();
		this.setState({ location: e.target.value })
	}

	handleUserEmail(e) {
		e.preventDefault();
		this.setState({ email: e.target.value })
	}

	acceptNewLocationEmployee() {
		return this.myEmployeeArray.map((item, idx)=> {

			return (<form>
	      <FormGroup
	          controlId="formBasicText"
	      >

	        <ControlLabel>Location Name</ControlLabel>
	        <div id= "rowAlign">
	    	  <FormControl
	            type="text"
	            value={this.state.location}
	            placeholder="Location_Name"
	            onChange= {(e)=> this.handleUserLocation(e)}
	          />

	          <Button style= {{marginLeft: 10}} onClick={()=> this.pushMoreEmployee()} >Add</Button>

	        </div>
	        <hr style= {{borderWidth: 4}} />

	        <div id= "rowAlign">
	          <FormControl
	          	style= {{margin: 2}}
	            type="text"
	            value={this.state.name}
	            placeholder="Employee_Name"
	            onChange= {(e)=> this.handleUserName(e)}
	          />
	          <FormControl
	          	style= {{margin: 2}}
	            type="text"
	            value={this.state.email}
	            placeholder="Employee_Email"
	            onChange= {(e)=> this.handleUserEmail(e)}
	          />
	          <Button type="submit">
	          	+
	          </Button>
	          <FormControl.Feedback />
	          </div>

	        </FormGroup>
	        </form>)
		});
	}

  render() {
  	// console.log(this.state.name)
  	return (
      <div id="content-wrapper">
      	{this.acceptNewLocationEmployee()}
      </div>
  	);
  }
}

export default AddUser;
