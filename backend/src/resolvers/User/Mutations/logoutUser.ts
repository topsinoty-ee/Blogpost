/** @format */

import { BaseContext } from 'src/utils/context';
import TokenManager from '../../../utils/TokenManager.js';
import { LogoutResponse } from 'src/generated/types';

export const LogoutUser = async (
  context: BaseContext
): Promise<LogoutResponse> => {
  if (!context.currentUser) {
    throw new Error('User not authenticated');
  }
  const message = context.currentUser.username + 'is logged out.';
  await TokenManager.logout(context);
  return {
    message: message,
    success: true,
  };
};
