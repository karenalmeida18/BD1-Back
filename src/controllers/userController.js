const { hash } = require('bcryptjs');
const User = require('../models/User');

module.exports = {
  async create(req, res) {
    const {
      name, password, telephone, address
    } = req.body;

    try {
      if (!name || !password) return res.status(400).json({ msg: 'Missing fields' });

      const passwordHash = await hash(password, 8);

      const user = await User.create({
        name,
        password: passwordHash,
        telephone,
        address,
      });

      delete user.password;

      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ msg: 'Internal server error' });
    }
  },

  async read(req, res) {
    try {
      const allUser = await User.findAll();
      if (allUser.length === 0) return res.status(404).json({ msg: 'No users found' });
      return res.status(200).json(allUser);
    } catch (error) {
      return res.status(500).json({ msg: 'Internal server error' });
    }
  },

  async delete(req, res) {
    const { id } = req.params;
    try {
      if (!id) return res.status(400).json({ msg: 'Missing id' });

      const user = await User.findByPk(id);

      if (!user) return res.status(404).json({ msg: 'User not found' });

      await user.destroy();

      return res.status(200).json('user deleted');
    } catch (error) {
      return res.status(500).json({ msg: 'Internal server error' });
    }
  },

  async update(req, res) {
    const {
      name, password, telephone, address
    } = req.body;
    
    const { id } = req.user;
    
    try {
      const user = await User.findByPk(id);
      
      user.update({
        name, password, telephone, address
      });

      return res.status(200).json(info);
    } catch (error) {
      return res.status(500).json({ msg: 'Internal server error' });
    }
  },
};