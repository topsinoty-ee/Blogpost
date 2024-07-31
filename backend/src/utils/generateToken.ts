/** @format */
import jwt from 'jsonwebtoken';


export const generateToken = (user: any, secret: string) => {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
      email: user.email,
    },
    secret,
    { expiresIn: '1h' }
  );
};
