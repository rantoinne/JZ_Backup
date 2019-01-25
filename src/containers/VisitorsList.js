import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { CSVLink } from 'react-csv';
import { fetchVisitors } from '../actions/VisitorsActions';
import '../custom.css';
import VisitorGroup from './VisitorGroup';
import SubHeader from './SubHeader';
import Loader from '../components/Loader';
import uuid from 'uuid';
import commons from '../utils/Commons';

class VisitorsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchPurpose: '',
			searchLocation: '',
			searchText: '',
			activePurpose: 'All',
			activeLocation: 'All',
			activeTime: 'Year'
		};
	}
	componentWillMount() {
		this.props.fetchVisitors("Year")
	}
	filterByPurpose(name) {
		if(name == 'All') {
			this.setState({searchPurpose: '', activePurpose: 'All'});
		} else {
			this.setState({searchPurpose: name, activePurpose: name});
		}
	}
	filterByLocation(name) {
		if(name == 'All') {
			this.setState({searchLocation: '', activeLocation: 'All'});
		} else {
			this.setState({searchLocation: name, activeLocation: name});
		}
	}
	filterByText(name) {
		this.setState({searchText: name});
	}
	filterByTime(name) {
		this.props.fetchVisitors(name)
		this.setState({activeTime: name});
	}
	getGroupedVisitorsByDate(visitors) {
		if (visitors) {
			visitors.map((v) => {
				v['date'] = new Date(v.start_time).toDateString()
			})
			return commons.groupBy(visitors, v => v.date);
		} else {
			return new Map();
		}
	}
	render () {
		console.log('Hee')
		let visitors;
		let purposes;
		let locations;
		let times;
		let purposesArr=['All'];
		let locationsArr=['All'];
		let timesArr = ['Today', 'Yesterday', 'Week', 'Month', 'Year']
		let filteredVisitors = this.props.visitors.visitorsArray;
		if(filteredVisitors) {
			filteredVisitors.map(visitor => {
				purposesArr.push(visitor.purpose)
				locationsArr.push(visitor.location)
			});
			purposesArr = purposesArr.filter((x, i, a) => a.indexOf(x) == i)
			purposes = purposesArr.map((purpose, i) => {
				return (
					<li key={i}><a onClick={this.filterByPurpose.bind(this, purpose)}
						className={this.state.activePurpose==purpose ? 'activeDropdown': null}>
					{purpose}</a></li>
				);
			});
			locationsArr = locationsArr.filter((x, i, a) => a.indexOf(x) == i)
			locations = locationsArr.map((location, i) => {
				return (
					<li key={i}><a onClick={this.filterByLocation.bind(this, location)}
						className={this.state.activeLocation==location ? 'activeDropdown': null}>
					{location}</a></li>
				);
			});
			times = timesArr.map((time, i) => {
				return (
					<li key={i}><a onClick={this.filterByTime.bind(this, time)}
						className={this.state.activeTime==time ? 'activeDropdown': null}>
					{time}</a></li>
				);
			});

			filteredVisitors = filteredVisitors.filter(
				(visitor) => {
					return visitor.purpose.toLowerCase().indexOf(this.state.searchPurpose.toLowerCase()) !== -1;
				}
			).filter(
				(visitor) => {
					return visitor.location.toLowerCase().indexOf(this.state.searchLocation.toLowerCase()) !== -1;
				}
			).filter(
				(visitor) => {
					return (visitor.full_name.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1 ||
									visitor.host_name.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1);
				}
			);
		}
		let contentMap = this.getGroupedVisitorsByDate(filteredVisitors);
		let arr = [];
		contentMap.forEach((k, v)=>{
			arr.push(v)
		})
		let groups = arr.map((date, i)=>{
			return (
				<VisitorGroup key={i} date={date} group={contentMap.get(date)} />
			);
		});
		let reportData = [
		  ['Guest Name', 'Purpose', 'Guest Company', 'Guest Mobile',
			 'Scheduled Time', 'In Time', 'Out Time', 'Host Name', 'Host Department',
		 	 'Badge Number', 'Accompanying Guests', 'Location']
		];
		if(filteredVisitors) {
			filteredVisitors.map(visitor => {
				reportData.push(
					[visitor.full_name, visitor.purpose, visitor.company, visitor.mobile,
					visitor.date, commons.displayTime(visitor.check_in_time),
					commons.displayTime(visitor.check_out_time), visitor.host_name,
					visitor.department.join(','), visitor.badge, visitor.guest_count,
					visitor.location])
			});
		}
		let title = filteredVisitors ? (
      <div>Visitors ({filteredVisitors.length})</div>
    ) : <div>Visitors ({0})</div>
		return ( !filteredVisitors ? <Loader title='Visitors' /> :
			filteredVisitors.length == 0 ?
				<div className="expense-claims">
					<SubHeader
						title={title}
						showLocation="true"
						showPurpose="true"
						showSearch="true"
						showDownload="true"
						showTime="true"
						purposes={purposes}
						activePurpose={this.state.activePurpose}
						locations={locations}
						activeLocation = {this.state.activeLocation}
						reportData={reportData}
						times={times}
						activeTime={this.state.activeTime}
						filterByText={this.filterByText.bind(this)} />
						<h1 className="midScreen">No Record Found.</h1>
				</div>
			 :
				<div className="expense-claims">
					<SubHeader
						title={title}
						showLocation="true"
						showPurpose="true"
						showSearch="true"
						showDownload="true"
						showTime="true"
						times={times}
						activeTime={this.state.activeTime}
						purposes={purposes}
						activePurpose={this.state.activePurpose}
						locations={locations}
						activeLocation = {this.state.activeLocation}
						reportData={reportData}
						filterByText={this.filterByText.bind(this)} />
					<div id="table-wrapper">
						<table className="table table-bordered box-shadow">
								<thead>
									<tr>
										<th>In Time</th>
										<th>Out Time</th>
										<th>Visitors Name</th>
										<th>Location</th>
										<th>Host Name</th>
										<th>Purpose</th>
									</tr>
								</thead>
								{groups}
						</table>
					</div>
				</div>
			);
	}
}

const mapDispatchToProps = dispatch => ({fetchVisitors: (query) => dispatch(fetchVisitors(query))})

function mapStateToProps(state){
	return {
		visitors: state.visitorsReducer
	};
}

VisitorsList.propTypes = {
		visitors: React.PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(VisitorsList);
