import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import Employee from './Employee';
import SubHeader from './SubHeader';
import { fetchUsers } from '../actions/PhoneBookActions';
import Loader from '../components/Loader';

class Employees extends React.Component {
  constructor(props) {
		super(props);
    this.state = {
      searchGroup: '',
			searchText: '',
      activeGroup: 'All'
		};
	}
	componentWillMount() {
		this.props.fetchUsers()
	}
  filterByGroup(name) {
		if(name == 'All') {
			this.setState({searchGroup: '', activeGroup: 'All'});
		} else {
			this.setState({searchGroup: name, activeGroup: name});
		}
	}
  filterByText(name) {
		this.setState({searchText: name});
	}
  render() {
    let employees;
    let groupsArr=['All'];
    let groupsList;
    let filteredUsers = this.props.employees.usersData;
    if(filteredUsers) {
      filteredUsers.map(employee => {
        employee.groups.forEach(function(entry) {
          groupsArr.push(entry)
        });
			});
			groupsArr = groupsArr.filter((x, i, a) => a.indexOf(x) == i)
			groupsList = groupsArr.map((group, i) => {
				return (
					<li key={i}><a onClick={this.filterByGroup.bind(this, group)}
            className={this.state.activeGroup==group ? 'activeDropdown': null}>
            {group}</a></li>
				);
			});
      filteredUsers = filteredUsers.filter(
				(employee) => {
          if(this.state.searchGroup!='' && employee.groups!=undefined) {
            for (let group in employee.groups) {
              return employee.groups[group].toLowerCase()==this.state.searchGroup.toLowerCase()
            }
          } else if(this.state.searchGroup==''){
            return true
          }
				}
			).filter(
				(employee) => {
					return (employee.email.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1 ||
									employee.mobile.toString().indexOf(this.state.searchText.toLowerCase()) !== -1 ||
                  employee.full_name.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1);
				}
			);
			employees = filteredUsers.map(employee => {
				return (
					<Employee key={uuid.v4()} employee={employee}/>
				);
			})
		}
    let title = filteredUsers ? (
      <div>Employees ({filteredUsers.length})</div>
    ) : <div>Employees ({0})</div>
  	return ( !filteredUsers ? <Loader title='Employees' /> :
      filteredUsers.length == 0 ?
      <div id="content-wrapper">
        <div className="expense-claims">
          <SubHeader
            title={title}
            groupsList={groupsList}
            activeGroup={this.state.activeGroup}
            showSearch="true"
            showGroup="true"
            showAddEmployee=""
            showImportEmployees=""
            filterByText={this.filterByText.bind(this)} />
        </div>
        <h1 className="midScreen">No Record Found.</h1>
      </div>
      :
      <div id="content-wrapper">
        <div className="expense-claims">
          <SubHeader
            title={title}
            groupsList={groupsList}
            activeGroup={this.state.activeGroup}
            showSearch="true"
            showGroup="true"
            showAddEmployee=""
            showImportEmployees=""
            filterByText={this.filterByText.bind(this)} />
          <div id="table-wrapper">
            <table className="table table-bordered box-shadow">
                <thead>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Group</th>
                </thead>
                <tbody>
                  {employees}
                </tbody>
            </table>
          </div>
        </div>
      </div>
  	);
  }
}

const mapDispatchToProps = dispatch => ({fetchUsers: () => dispatch(fetchUsers())})

function mapStateToProps(state){
	return {
		employees: state.phoneBookReducer
	};
}

Employees.propTypes = {
		employees: React.PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(Employees);
