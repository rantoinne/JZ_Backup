import React from 'react';
import { Lightbox } from "react-modal-image";

class Employee extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
			showModal: false
		};
  }
  showImageModal(thumbnail_uri) {
    if (thumbnail_uri != undefined) {
      this.setState({showModal: true})
    }
  }
  closeImageModal() {
    this.setState({showModal: false})
  }
  render() {
    let employee = this.props.employee;
  	return (
      this.state.showModal ? <Lightbox medium={employee.thumbnail_uri} onClose={this.closeImageModal.bind(this)}/> :
      <tr>
        <td>
            <div className="wrapper pull-left">
                <i className="ic-user">
                  <img src={employee.thumbnail_uri} className="img-circle" width="35" height="35"
                    onClick={this.showImageModal.bind(this, employee.thumbnail_uri)} />
                </i>
                <span className="font-16">{employee.full_name}</span>
            </div>
        </td>
        <td>
            <div className="wrapper">
                {employee.email}
            </div>
        </td>
        <td>
            <div className="wrapper">
                {employee.mobile}
            </div>
        </td>
        <td>
            <div className="wrapper">
                {employee.groups.join(', ')}
            </div>
        </td>
      </tr>
  	);
  }
}

export default Employee;
