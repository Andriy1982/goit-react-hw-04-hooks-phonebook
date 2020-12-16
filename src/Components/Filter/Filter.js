import React from 'react';
import PropTypes from 'prop-types';
import { FilterContainer } from './FilterStyledComponents';

function Filter({ name, onChangeFilter }) {
  return (
    <FilterContainer>
      Find contacts by name
      <input
        type="text"
        value={name}
        onChange={e => onChangeFilter(e.target.value)}
      />
    </FilterContainer>
  );
}

Filter.propTypes = {
  name: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func,
};

export default Filter;
