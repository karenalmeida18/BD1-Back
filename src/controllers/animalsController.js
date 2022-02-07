const Animals = require('../models/animals');

module.exports = {
  async create(req, res) {
    const {
      name, species, race, reward, description
    } = req.body;

    const { id: user_id } = req.user;

    try {
      if (!name) return res.status(400).json({ msg: 'name is required' });
      if (!user_id) return res.status(400).json({ msg: 'user id is required' });

      const animals = await Animals.create({
        name,
        species,
        race,
        reward,
        description,
        user_id,
      });

      return res.status(200).json(animals);
    } catch (error) {
      return res.status(500).json({ msg: 'Internal server error' });
    }
  },

  async read(req, res) {
    try {
      const allAnimals = await Animals.findAll();
      if (allAnimals?.length === 0) return res.status(404).json({ msg: 'No Animals found' });
      return res.status(200).json(allAnimals);
    } catch (error) {
      return res.status(500).json({ msg: 'Internal server error' });
    }
  },

  async delete(req, res) {
    const { id } = req.params;
    try {
      if (!id) return res.status(400).json({ msg: 'Missing id' });

      const animals = await Animals.findByPk(id);

      if (!animals) return res.status(404).json({ msg: 'Animals not found' });

      await animals.destroy();

      return res.status(200).json('Animals deleted');
    } catch (error) {
      return res.status(500).json({ msg: 'Internal server error' });
    }
  },

  async update(req, res) {
    const {
      name, species, race, reward, description
    } = req.body;
    
    const { id } = req.Animals;
    
    try {
      const animals = await Animals.findByPk(id);
      
      animals.update({
        name,
        species,
        race,
        reward,
        description,
      });

      return res.status(200).json(animals);
    } catch (error) {
      return res.status(500).json({ msg: 'Internal server error' });
    }
  },
};