import User from '../models/User';
import bcrypt from 'bcryptjs';


export default new class CreateAdminController {
  async store(req, res) {
    const { first_name, last_name, email, password, admin } = req.body;

    if(!first_name || !last_name || !email || !password || !admin === true) {
      return res.json({ error: "all fields need be send" })
    };

    const emailAlreadyExits = await User.findOne({
      where: { email: email }
    });
    
    if(emailAlreadyExits) {
      return res.status(400).json({ error: "email already exists, please choose another" });
    };

    const passwordHash = await bcrypt.hash(password, 8);

    const adminCreated = await User.create({ first_name, last_name, email, password: passwordHash, admin });

    return res.status(201).json(adminCreated);
  }
};