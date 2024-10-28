import React, { memo } from 'react';

const Filter = memo(({ onFilterChange }) => {
  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="Filter by title..."
        onChange={(e) => onFilterChange('title', e.target.value)}
        className="filter-input"
      />
      <input
        type="number"
        min="0"
        max="5"
        step="0.5"
        placeholder="Filter by rating..."
        onChange={(e) => onFilterChange('rating', e.target.value)}
        className="filter-input"
      />
    </div>
  );
});

export default Filter;