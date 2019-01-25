import React from 'react';
import CSVReader from 'react-csv-reader'
import { toast } from 'react-toastify'

class ImportEmployees extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      imported: false
    }
  }
  handleSuccess(data) {
    let n = data[0].indexOf("Employee Name")
    let e = data[0].indexOf("Email ID")
    let m = data[0].indexOf("Mobile Number")
    let users = []
    for (let i=1; i<data.length; i++){
      let d = data[i]
      let user = {full_name: d[n], email: d[e], mobile: d[e]}
      users.push(user)
    }
    console.log(users)
    // this.setState({imported: true})
  }
  handleError() {
    console.log('handle dark force.')
  }
  render() {
    if (this.state.imported) {
      return (
        <div id="content-wrapper">
          <div className="row">
            <div className="col-md-2 pad-x mar-b-20">
              <a href="/employees" className="app-muted-text">
                  <img src="public/images/svg/down-arrow.svg" className="rotateArrow" width="15" height="15" /> Back</a>
            </div>
          </div>
          <h1>File Imported.</h1>
        </div>
    	);
    } else {
      return (
        <div id="content-wrapper">
          <div className="row">
            <div className="col-md-2 pad-x mar-b-20">
              <a href="/employees" className="app-muted-text">
                  <img src="public/images/svg/down-arrow.svg" className="rotateArrow" width="15" height="15" /> Back</a>
            </div>
          </div>
          <CSVReader
            cssClass="csv-input"
            label="Import CSV with employees list."
            onFileLoaded={this.handleSuccess.bind(this)}
            onError={this.handleError.bind(this)}
          />
        </div>
    	);
    }
  }
}

export default ImportEmployees;
