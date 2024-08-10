/** @format */

import { UserSummary } from 'lib/types/dist';
import React from 'react';

export const UserSearchCard: React.FC<UserSummary> = (props) => {
  return (
    <figure>
      <img src={props.avatar} alt={props.username}/>
    </figure>
  );
};
