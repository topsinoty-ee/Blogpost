/** @format */

import React from 'react';

interface SearchInputProps {
  query: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  loading: boolean;
}

const SearchInput: React.FC<SearchInputProps> = ({
  query,
  onChange,
  onSearch,
  loading,
}) => (
  <div className="flex mb-4">
    <input
      type="search"
      value={query}
      onChange={onChange}
      placeholder="Search..."
      className="flex-1 p-2 border border-gray-300 rounded"
    />
    <button
      onClick={onSearch}
      className="ml-2 p-2 bg-blue-500 text-white rounded"
      disabled={loading}>
      {loading ? 'Searching...' : 'Search'}
    </button>
  </div>
);

export default SearchInput;
