import Comment from '../models/Comment';


export default new class CommentController {
  async store(req, res) {
    if(req.adminUser) {
      return res.status(401).json({ ok: "comment are available to common users" })
    };
    const commentContent = req.body.content;


    const commentCreated = await Comment.create({
      content: commentContent,
      user_id: req.userId,
      post_id: req.params.postId
    });

    return res.json(commentContent);
  };
};