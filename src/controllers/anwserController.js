

const Answer = require('../models/answer');
const Messages = require('../models/messages');

module.exports = {
  async create(req, res) {
    const { answer } = req.body;
    const { id: user_id } = req.user;
    const { message_id } = req.params;
    try {
      if (!message_id) return res.status(400).json({ msg: 'missing the required message id' });
      const messages = await Messages.findByPk(message_id);
      if (!messages) return res.status(400).json({ msg: 'messages not found' });
      if (!answer) return res.status(400).json({ msg: 'missing the field answer' });

      const answerResponse = await Answer.create({ user_id, message_id, answer });
      return res.status(200).json(answerResponse);
    } catch (error) {
      console.log({ error });
      return res.status(500).json({ msg: 'Internal server error' });
    }
  },

};