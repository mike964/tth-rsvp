import React from 'react';
import PropTypes from 'prop-types';

const ConfirmedFilter = props =>

<div>
  <h2>Tasks Todo Apps</h2>
  <label>
    <input 
    type="checkbox" 
    onChange={this.toggleFilter}
    checked={this.state.isFiltered}
    /> {" "} Hide those who haven't responded
  </label>
</div>;

ConfirmedFilter.propTypes ={
  toggleFilter: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired
};

export default ConfirmedFilter;