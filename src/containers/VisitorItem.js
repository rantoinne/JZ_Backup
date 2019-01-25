import React from 'react';
import { Lightbox } from "react-modal-image";
import commons from '../utils/Commons';

class VisitorItem extends React.Component {
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
    let visitor = this.props.visitor;
  	return (
      this.state.showModal ? <Lightbox medium={visitor.profile_pic_uri} onClose={this.closeImageModal.bind(this)}/> :
      <tr>
          <td>
              <div className="wrapper">
                  <span className="colorTextDarker">{commons.displayTime(visitor.check_in_time)}</span>
              </div>
          </td>
          <td>
              <div className="wrapper">
                  <span className="colorTextDarker">{commons.displayTime(visitor.check_out_time)}</span>
              </div>
          </td>
          <td>
              <div className="wrapper pull-left">
                  <i className="ic-user">
                    <img src={visitor.profile_pic_uri} className="img-circle" width="35" height="35"
                      onClick={this.showImageModal.bind(this, visitor.profile_pic_uri)} />
                  </i>
                  <span className="font-16 colorTextDarkest">{visitor.full_name}</span>
              </div>
          </td>
          <td>
              <div className="wrapper">
                  <span className="colorTextDarker">{visitor.location}</span>
              </div>
          </td>
          <td>
              <div className="wrapper pull-left">
                  <i className="ic-user"></i>
                  <span className="font-16 colorTextDarkest">{visitor.host_name}</span>
              </div>
          </td>
          <td>
              <div className="wrapper">
                  <span className="colorTextDarker">{visitor.purpose}</span>
              </div>
          </td>
      </tr>
  	);
  }
}

VisitorItem.propTypes = {
    visitor: React.PropTypes.object
}

export default VisitorItem;
