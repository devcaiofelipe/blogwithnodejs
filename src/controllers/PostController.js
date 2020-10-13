import Post from '../models/Post';
import Comment from '../models/Comment';


export default new class PostController {
  async index(req, res) {
    const allPosts = await Post.findAll({
      attributes: ['id', 'title', 'subtitle', 'content'],
      include: {
        model: Comment, as: 'comments',
        attributes: ['id', 'content']
      }
    });
    return res.status(200).json(allPosts);
  };

  async store(req, res) {
    if(!req.adminUser) {
      return res.status(401).json({ error: "only admins"})
    };

    const { content, title, subtitle } = req.body;

    const postCreated = await Post.create({ content, title, subtitle });

    return res.status(201).json(postCreated);
  };
};