import User from '../models/User';


export default new class UserController {
  async store(req, res) {
    const { first_name, last_name, email, password } = req.body;
    const emailAlreadyExits = await User.findOne({
      where: { email: email }
    });
  
    if(emailAlreadyExits) {
      return res.json({ error: "Email ja existe"});
    }
  
  
    const user = await User.create({ first_name, last_name, email, password });
    return res.json(user);
  };

  async index(req, res) {
    const users = await User.findAll();
    return res.json(users)
  };
};