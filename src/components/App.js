import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { ToastContainer } from 'react-toastify';
import '../ReactToastify.css';

import DashBoard from './DashBoard';
import AddUser from './AddUser';
import Header from './Header';
import Sidebar from './Sidebar';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './Resetpassword';
import Profile from '../containers/Profile';
import AddEmployee from '../containers/AddEmployee';
import ImportEmployees from '../containers/ImportEmployees';
import cookieUtils from '../apis/CookieUtils';
import Todo from './Todo';
import Employees from '../containers/Employees';
import Groups from '../containers/Groups';
import rootReducer from '../reducers/RootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends React.Component {
	constructor() {
		super();
		this.state={
			loggedIn: cookieUtils.isLoggedIn()
		}
		if(window.location.href.endsWith("/")) {
      cookieUtils.setActiveIndex(0);
			cookieUtils.setParentIndex(0);
    }
	}

	loginCallback(dataFromLogin) {
		this.setState({ loggedIn: dataFromLogin.loggedIn });
	}

	logoutCallback(dataFromLogin) {
		this.setState({ loggedIn: false });
		cookieUtils.cleanUp();
	}

	render() {
		const L_Login = () => {
			return (
				<Login loginCallback={this.loginCallback.bind(this)}/>
			);
		}

		const L_Header = () => {
			if (this.state.loggedIn) {
				return (
					<Header logoutCallback={this.logoutCallback.bind(this)} />
				);
			} else {
				return (
					<div></div>
				);
			}
		}

		const L_Sidebar = () => {
			if (this.state.loggedIn) {
				return (
					<Sidebar />
				);
			} else {
				return (
					<div></div>
				);
			}
		}

		const PrivateRoute = ({ component: Component, ...rest }) => (
			<Route {...rest} render={(props) => (
				this.state.loggedIn === true
					? <Component {...rest} {...props} />
					: <Redirect to='/' />
				)} />
		);

		return (
			<Provider store={store}>
				<div>
					<ToastContainer autoClose={4000} />
					<Route component={L_Header} />
					<Route component={L_Sidebar} />
					<Switch>
						<Route exact path="/" component={this.state.loggedIn ? DashBoard : L_Login} />
						<Route exact path="/forgot_password" component={ForgotPassword} />
						<Route exact path="/reset_password" component={ResetPassword} />
						<PrivateRoute exact path="/visitors" title="VMS Overview - Yet to implement" component={Todo} />
						<PrivateRoute exact path="/visitors_activity" component={DashBoard} />
						<PrivateRoute exact path="/visitors_settings" title="Visitor Configuration - Yet to implement" component={Todo} />
						<PrivateRoute exact path="/employees" component={Employees} />
						<PrivateRoute exact path="/employees_adduser" component={AddUser} />
						<PrivateRoute exact path="/employee_groups" component={Groups} />
						<PrivateRoute exact path="/expenses" title="Expenses - Yet to implement" component={Todo} />
						<PrivateRoute exact path="/expenses_claims" title="Expenses - Yet to implement" component={Todo} />
						<PrivateRoute exact path="/expenses_approved_claims" title="Expenses Approved Claims - Yet to implement" component={Todo} />
						<PrivateRoute exact path="/expenses_settled_claims" title="Expenses Settled Claims - Yet to implement" component={Todo} />
						<PrivateRoute exact path="/expenses_settings" title="Expenses Settings - Yet to implement" component={Todo} />
						<PrivateRoute exact path="/profile" component={Profile} />
						<PrivateRoute exact path="/add_employee" component={AddEmployee} />
						<PrivateRoute exact path="/import_employees" component={ImportEmployees} />
					</Switch>
				</div>
			</Provider>
		);
	}
}

export default App;
