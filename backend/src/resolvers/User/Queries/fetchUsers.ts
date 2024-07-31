/** @format */

export const fetchUsers = async (models: any, args: any) => {
  const { sort = {}, limit = 0, skip = 0 } = args;
  try {
    return await models.User.find({}).sort(sort).limit(limit).skip(skip);
  } catch (error) {
    throw new Error('Unable to fetch users at this time. Error: ' + error);
  }
};
