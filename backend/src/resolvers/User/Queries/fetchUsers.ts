/** @format */

import { QueryUsersArgs } from 'src/generated/types';
import { BaseContext } from 'src/utils/context';

export const fetchUsers = async (
  models: BaseContext['models'],
  args: QueryUsersArgs
) => {
  const { query = '', sort = [], limit = 0, skip = 0 } = args;

  try {
    // Create a regex for partial matching
    const regex = query ? new RegExp(query, 'i') : null;

    // Determine the search conditions
    const searchConditions = regex
      ? {
          $or: Object.keys(models.User.schema.paths)
            .filter(
              (field) => models.User.schema.paths[field].instance === 'String'
            )
            .map((field) => ({ [field]: regex })),
        }
      : {};

    // Validate and sanitize the sort parameter
    const validSort = Array.isArray(sort)
      ? sort.reduce((acc, { field, order }) => {
          if (field && [1, -1].includes(order)) {
            acc[field] = order;
          }
          return acc;
        }, {} as Record<string, number>[])
      : {};

    // Find users based on the search conditions
    const users: any[] = await models.User.find(searchConditions)
      .sort(validSort) // Apply sorting
      .limit(limit) // Apply limit
      .skip(skip); // Apply skip

    return users;
  } catch (error) {
    throw new Error('Unable to fetch users at this time. Error: ' + error);
  }
};
