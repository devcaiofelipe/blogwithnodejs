import User from '../models/User';
import bcrypt from 'bcryptjs';
import Queue from '../lib/Queue';
import ConfirmationMail from '../jobs/ConfirmationMail';

export default new class UserController {
  async store(req, res) {
    const { first_name, last_name, email, password } = req.body;
    const emailAlreadyExits = await User.findOne({
      where: { email: email }
    });
  
    if(emailAlreadyExits) {
      return res.json({ error: "Email ja existe"});
    };

    const passwordHash = await bcrypt.hash(password, 8);
  
    const user = await User.create({ first_name, last_name, email, password:passwordHash });

    await Queue.add(ConfirmationMail.key, {
      user,
    });

    return res.json({ first_name, last_name, email });
  };

  async index(req, res) {
    if(req.adminUser) {
      const users = await User.findAll();
      return res.json(users)
    };
    return res.status(401).json({ error: "Only admins"});
  };
};