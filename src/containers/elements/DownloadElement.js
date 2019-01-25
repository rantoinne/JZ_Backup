import React from 'react'
import { CSVLink } from 'react-csv'

class DownloadElement extends React.Component {
  render() {
    let showDownload = this.props.showDownload
    let reportData = this.props.reportData
    let downloadUI = (
      <li style={{display: showDownload ? "" : "none"}}>
          <CSVLink data={reportData} filename="visitor-report.csv" className="ic-download_reports"></CSVLink>
      </li>
    )
    return (
      downloadUI
  	);
  }
}

export default DownloadElement;
