import User from '../models/User';


export default new class ConfirmUserController {
  async update(req, res) {
    const user = await User.update({ active: true }, {
      where: { id: req.params.userId }
    });

    return res.status(200).json({ message: "user confirmed successfully" })
  };
};