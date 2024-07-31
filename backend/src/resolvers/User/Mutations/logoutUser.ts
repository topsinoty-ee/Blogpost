/** @format */

export const logoutUser = async (context:any) => {
    return context.currentUser = null;
};
