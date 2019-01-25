import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';

var CreatableDemo = createClass({
	displayName: 'CreatableDemo',
	propTypes: {
		hint: PropTypes.string,
		label: PropTypes.string
	},
	getInitialState () {
		return {
			multiValue: [],
			options: [
				{ value: 'R', label: 'Red' },
				{ value: 'G', label: 'Green' },
				{ value: 'B', label: 'Blue' }
			],
			value: undefined
		};
	},
	handleOnChange (value) {
		const { multi } = this.state;
		if (multi) {
			this.setState({ multiValue: value });
		} else {
			this.setState({ value });
		}
	},
	render () {
		const { atTop, multi, multiValue, options, value } = this.state;
		return (
      <div className="section">
        <Select.Creatable
          multi={true}
          options={options}
          onChange={this.handleOnChange}
          value={multi ? multiValue : value}
        />
      </div>
		);
	}
});

module.exports = CreatableDemo;
