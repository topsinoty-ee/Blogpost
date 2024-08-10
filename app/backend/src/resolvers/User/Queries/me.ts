/** @format */

import { User } from '@blogpost/types';
import { BaseContext } from '../../../utils/context.js';
import TokenManager from '../../../utils/TokenManager.js';

export const me = async (context: BaseContext): Promise<User> => {
  try {
    // Ensure the context is valid
    if (!context) {
      throw new Error('Invalid context provided');
    }

    // Call the authToken function to get the current user
    const decodedUser = await TokenManager.authToken(context);

    // Check if user is valid
    if (!decodedUser) {
      throw new Error('User not found');
    }
    // Ensure the user conforms to the expected structure
    return context.currentUser;
  } catch (error) {
    // Handle errors and return a meaningful message
    console.error('Error fetching user:', error);
    throw new Error(
      'Unable to retrieve user information. Please try again later.'
    );
  }
};
