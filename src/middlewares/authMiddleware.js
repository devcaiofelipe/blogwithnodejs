import jwt from 'jsonwebtoken';
import authConfig from '../config/auth';


export default async (req, res, next) => {
  const tokenHeader = req.headers.authorization;
  if(!tokenHeader) {
    return res.status(400).json({ error: "Token not provided" });
  };
  
  const [, token] = tokenHeader.split(' ');

  try {
    const tokenDecoded = await jwt.verify(token, authConfig.secret);
    req.userId = tokenDecoded.id;
    req.adminUser = tokenDecoded.admin;
    return next();
  } catch(error) {
    return res.status(400).json({
      error: "Invalid token"
    });
  };
};