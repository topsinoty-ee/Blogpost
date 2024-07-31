/** @format */

import { UserInputError } from "apollo-server";

// Function to fetch a single user based on different criteria
export const fetchUserByQuery = async (models: any, query: string) => {
  try {
    const user = await models.User.findOne({
      $or: [
        { username: query.startsWith('@') ? query.substring(1) : undefined },
        { id: query.startsWith('user_') ? query.substring(1) : undefined },
        {
          email:
            !query.startsWith('@') && !query.startsWith('#')
              ? query
              : undefined,
        },
      ],
    });
    if (!user) {
      throw new UserInputError('User not found');
    }
    return user;
  } catch (error) {
    throw new Error('Unable to fetch user. Error: ' + error);
  }
};
