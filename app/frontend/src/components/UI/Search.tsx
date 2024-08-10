/** @format */

import React, { useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';

// Define the GraphQL query
const SEARCH_QUERY = gql`
  query Search($query: String!) {
    search(query: $query) {
      ... on UserSummary {
        username
        postCount
        followerCount
        avatar
      }
      ... on PostSummary {
        title
        author
        likeCount
        commentCount
      }
      ... on BlogSummary {
        name
        postCount
        totalLikes
        subscribers
      }
    }
  }
`;


const SearchComponent: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [getSearchResults, { loading, data }] = useLazyQuery<{
    users: SearchResult[];
  }>(SEARCH_QUERY);

  const handleSearch = () => {
    getSearchResults({ variables: { query } });
  };

  // Use the correct property based on the query
  const results = data?.users || [];

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="flex mb-4">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="flex-1 p-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleSearch}
          className="ml-2 p-2 bg-blue-500 text-white rounded"
          disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>
      <ul className="list-disc pl-5">
        {results.map((result, index) => (
          <li
            key={index}
            className="mb-2">
            {result.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
