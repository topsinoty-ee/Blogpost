/** @format */

import { QueryUsersArgs } from '@blogpost/types';
import { BaseContext } from 'src/utils/context';

interface UsersQueryCondition {
  username?: string;
  id?: string;
  email?: string;
  $or?: { [x: string]: RegExp }[];
}

export const fetchUsers = async (
  models: BaseContext['models'],
  args: QueryUsersArgs
) => {
  const { query, sort = [], limit = 0, skip = 0 } = args;

  let searchCondition: UsersQueryCondition = {};

  try {
    if (query.startsWith('@')) {
      searchCondition.username = query.substring(1);
    } else if (query.startsWith('#')) {
      searchCondition.id = query.substring(1);
    } else if (query.startsWith('/')) {
      searchCondition.email = query.substring(1);
    } else {
      const regex = query ? new RegExp(query, 'i') : null;
      if (regex) {
        const stringFields = Object.keys(models.User.schema.paths).filter(
          (field) => models.User.schema.paths[field].instance === 'String'
        );

        searchCondition.$or = stringFields.map((field) => ({
          [field]: regex,
        }));
      }
    }

    // Construct the query
    const userQuery = models.User.find(
      Object.keys(searchCondition).length ? searchCondition : {}
    );

    // Apply sorting
    if (sort && sort.length) {
      userQuery.sort(sort.join(' '));
    }

    // Apply limit and skip
    if (limit && limit > 0) {
      userQuery.limit(limit);
    }
    if (skip && skip > 0) {
      userQuery.skip(skip);
    }

    // Fetch the users
    const users: any = await userQuery.exec();

    return users;
  } catch (error) {
    throw new Error(`Unable to fetch users at this time. Error: ${error}`);
  }
};
