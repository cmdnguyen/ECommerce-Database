// Import Node packages and path files
const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
// GET route for tag
router.get('/', async (req, res) => {
  // finds all tags and includes associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [Product],
    });
    return res.json(tagData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET route for tag by id
router.get('/:id', async (req, res) => {
  // find a single tag by its `id`and includes associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [Product],
    });
    return res.json(tagData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// POST route for tag
router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create(req.body)
    return res.json(tagData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// PUT route for tag by id
router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  const tagId = req.params.id
  try {
    const tagData = await Tag.findByPk(tagId)

    if(!tagData) {
      return res.status(404).json({error: "Tag not found"})
    }
    const updatedData = req.body; 
    await tagData.update(updatedData)
    return res.json(tagData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// DELETE route for tag by id
router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    })
    return res.json(tagData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
