import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const protect = asyncHandler(async (req, res, next) => {
  let token;

  const authToken = req.headers.authorization;

  if (authToken && authToken.startsWith('Bearer')) {
    try {
      token = authToken.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      console.log(decoded);
    } catch (error) {}
  }
});

export { protect };
