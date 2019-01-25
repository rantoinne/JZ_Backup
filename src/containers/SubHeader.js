import React from 'react'
import { CSVLink } from 'react-csv'
import PurposeElement from './elements/PurposeElement'
import TimeElement from './elements/TimeElement'
import LocationElement from './elements/LocationElement'
import DoorElement from './elements/DoorElement'
import GroupElement from './elements/GroupElement'
import SearchElement from './elements/SearchElement'
import DownloadElement from './elements/DownloadElement'
import ButtonElement from './elements/ButtonElement'

class SubHeader extends React.Component {
  constructor(props) {
		super(props);
	}

  filterByText(value) {
    this.props.filterByText(value)
	}

  render() {
    let title = this.props.title
    let locations = this.props.locations
    let purposes = this.props.purposes
    let times = this.props.times
    let groupsList = this.props.groupsList
    let reportData = (this.props.reportData) ? this.props.reportData : []

    let activeTime = this.props.activeTime
    let activeLocation = this.props.activeLocation
    let activePurpose = this.props.activePurpose
    let activeGroup = this.props.activeGroup

    let showTime = (this.props.showTime) ? true : false
    let showLocation = (this.props.showLocation) ? true : false
    let showDoors = (this.props.showDoors) ? true : false
    let showPurpose = (this.props.showPurpose) ? true : false
    let showSearch = (this.props.showSearch) ? true : false
    let showDownload = (this.props.showDownload) ? true : false
    let showGroup = (this.props.showGroup) ? true : false
    let showAddEmployee = (this.props.showAddEmployee) ? true : false
    let showImportEmployees = (this.props.showImportEmployees) ? true : false

    return (
      <div className="row">
        <div className="col-md-2 col-lg-2 pad-x">
          <h3>{title}</h3>
        </div>
        <div className="col-md-10 col-lg-10 pad-x right-items">
          <ul>
            <TimeElement times={times} showTime={showTime} activeTime={activeTime} />
            <LocationElement locations={locations} showLocation={showLocation} activeLocation={activeLocation} />
            <DoorElement showDoors={showDoors} />
            <PurposeElement purposes={purposes} showPurpose={showPurpose} activePurpose={activePurpose} />
            <GroupElement groupsList={groupsList} showGroup={showGroup} activeGroup={activeGroup}/>
            <SearchElement showSearch={showSearch} filterByText={this.filterByText.bind(this)} />
            <DownloadElement reportData={reportData} showDownload={showDownload} />
            <ButtonElement showButton={showAddEmployee} title="Add New" redirectUrl='/add_employee' />
            <ButtonElement showButton={showImportEmployees} title="Import" redirectUrl='/import_employees' />
          </ul>
        </div>
      </div>
    );
  }
}

export default SubHeader;
