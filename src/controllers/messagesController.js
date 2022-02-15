const Messages = require('../models/messages');

module.exports = {
  async create(req, res) {
    const { message, user_id } = req.body;
    const { animal_id } = req.params;

    try {
      if (!message) return res.status(400).json({ msg: 'message is required' });
      if (!user_id) return res.status(400).json({ msg: 'user id is required' });
      if (!animal_id) return res.status(400).json({ msg: 'animal id is required' });

      const messages = await Messages.create({
        message,
        animal_id,
        user_id,
      });

      return res.status(200).json(messages);
    } catch (error) {
      return res.status(500).json({ msg: 'Internal server error' });
    }
  },

  async read(req, res) {
    const { id: user_id } = req.user;
    try {
      const allMessages = await Messages.findAll({
        where: { user_id },
        include: [{
          association: 'users',
          attributes: ['name', 'telephone'],
          required: false,
        },
        {
          association: 'answers',
          required: false
        }
        ],
      });
      if (allMessages.length === 0) return res.status(404).json({ msg: 'No Messages found' });
      return res.status(200).json(allMessages);
    } catch (error) {
      return res.status(500).json({ msg: 'Internal server error' });
    }
  },

  async delete(req, res) {
    const { id } = req.params;
    try {
      if (!id) return res.status(400).json({ msg: 'Missing id' });

      const messages = await Messages.findByPk(id);

      if (!messages) return res.status(404).json({ msg: 'Messages not found' });

      await messages.destroy();

      return res.status(200).json('Messages deleted');
    } catch (error) {
      return res.status(500).json({ msg: 'Internal server error' });
    }
  },
};