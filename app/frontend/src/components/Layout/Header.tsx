/** @format */

import React from 'react';
import SearchComponent from '../UI/Search'; // Adjust the import path as necessary

const HeaderComponent: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center space-x-4">
        <img
          src="https://via.placeholder.com/40" // Placeholder avatar, replace with user's avatar URL
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
        <SearchComponent />
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
        Add New
      </button>
    </header>
  );
};

export default HeaderComponent;
