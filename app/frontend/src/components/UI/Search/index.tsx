/** @format */

import React, { useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';
import SearchInput from './input';
import SearchResults from './results';
import { SearchResult } from '@blogpost/types';

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

// Define types for the query result
interface SearchQueryResult {
  search: SearchResult[];
}

interface SearchQueryVariables {
  query: string;
}

const SearchComponent: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [getSearchResults, { loading, data, error }] = useLazyQuery<
    SearchQueryResult,
    SearchQueryVariables
  >(SEARCH_QUERY);

  const handleSearch = () => {
    if (query.trim()) {
      getSearchResults({ variables: { query } });
    }
  };

  const results = data?.search || [];

  return (
    <div className="p-4 max-w-md mx-auto">
      <SearchInput
        query={query}
        onChange={(e) => setQuery(e.target.value)}
        onSearch={handleSearch}
        loading={loading}
      />
      <SearchResults
        results={results}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default SearchComponent;
