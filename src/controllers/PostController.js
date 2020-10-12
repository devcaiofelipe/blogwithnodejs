export default new class PostController {
  async index(req, res) {
    return res.json({ ok: true });
  };
};