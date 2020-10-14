import bcrypt from 'bcryptjs';
import User from '../models/User';
import jwt from 'jsonwebtoken';
import authConfig from '../config/auth';


export default new class LoginController {
  async store(req, res) {
    const { email, password } = req.body;
    if(!email || !password) {
      return res.status(400).json({ error: "Email and Password needed to be sent"});
    };

    const user = await User.findOne({ where: { email } });

    if(!user) {
      return res.status(400).json({ error: "Email not registered"})
    };

    const passwordIsValid = await bcrypt.compare(password, user.password);

    if(!passwordIsValid) {
      return res.status(400).json({ error: "Password invalid" })
    };

    const { id, name, admin } = user;
    
    const token = jwt.sign({ id, admin }, authConfig.secret, { expiresIn:authConfig.expiresIn });

    return res.json({
      id,
      name,
      email,
      token
    });
  };
};