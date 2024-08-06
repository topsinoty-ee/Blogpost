/** @format */

import React, { useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';

interface SearchResult {
  id: number;
  name: string;
}

// Define the GraphQL query
const SEARCH_QUERY = gql`
  query Search($query: String!) {
    search(query: $query) {
      id
      name
    }
  }
`;

const SearchComponent: React.FC = () => {
//   const [query, setQuery] = useState<string>('');
//   const [getSearchResults, { loading, data }] = useLazyQuery(SEARCH_QUERY);

//   const handleSearch = () => {
//     getSearchResults({ variables: { query } });
//   };

//   const results = data?.search || [];

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="flex mb-4">
        <input
          type="text"
        //   value={query}
        //   onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="flex-1 p-2 border border-gray-300 rounded"
        />
        <button
        //   onClick={handleSearch}
          className="ml-2 p-2 bg-blue-500 text-white rounded"
        //   disabled={loading}
        >
          {/* {loading ? 'Searching...' : 'Search'} */}
        </button>
      </div>
      <ul className="list-disc pl-5">
        {/* {results.map((result: SearchResult) => (
          <li key={result.id} className="mb-2">
            {result.name}
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default SearchComponent;
