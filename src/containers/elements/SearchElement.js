import React from 'react';

class SearchElement extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			searchText: ''
		};
	}
  filterByText(event) {
		this.setState({searchText: event.target.value});
    this.props.filterByText(event.target.value)
	}
  render() {
    let showSearch = this.props.showSearch
    let searchUI = (
      <li style={{display: showSearch ? "" : "none"}}>
          <form className="filter-search no-help" data-url="/justzaap/jz_html/commits/all" data-search-term="search">
              <input type="search" results="5" value={this.state.searchText} placeholder="Search"
              onChange={this.filterByText.bind(this)} />
          </form>
      </li>
    )
    return (
      searchUI
  	);
  }
}

export default SearchElement;
