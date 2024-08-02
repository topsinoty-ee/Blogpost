/** @format */

import { BaseContext } from 'src/utils/context';
import TokenManager from '../../../utils/TokenManager.js';
import { LogoutResponse } from 'src/generated/types';

export const LogoutUser = async (
  context: BaseContext
): Promise<LogoutResponse> => {
  const currentUser = await context.currentUser;

  if (!currentUser) {
    return {
      message: 'User not logged in',
      success: false,
    };
  }

  try {
    console.log('logout', await currentUser);
    const message = `${currentUser.username} is logged out.`;
    await TokenManager.logout(context);

    return {
      message: message,
      success: true,
    };
  } catch (error) {
    console.error('Logout failed:', error);
    throw new Error('Logout failed');
  }
};
