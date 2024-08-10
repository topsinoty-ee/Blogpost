/** @format */

import React from 'react';
import { SearchResult } from '@blogpost/types';

interface SearchResultsProps {
  results: SearchResult[];
  loading: boolean;
  error?: Error | null;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  loading,
  error,
}) => (
  <div>
    {error && <div className="text-red-500">Error: {error.message}</div>}
    <ul className="list-disc pl-5">
      {loading && results.length === 0 ? (
        <li>Loading...</li>
      ) : results.length > 0 ? (
        results.map((result, index) => {
          switch (result.__typename) {
            case 'UserSummary':
              return <li key={index}>{result.username}</li>;
            case 'PostSummary':
              return <li key={index}>{result.title}</li>;
            case 'BlogSummary':
              return <li key={index}>{result.name}</li>;
            default:
              return null;
          }
        })
      ) : (
        <li>No results found</li>
      )}
    </ul>
  </div>
);

export default SearchResults;
