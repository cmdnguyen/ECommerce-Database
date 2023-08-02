const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // finds all categories and include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [Product],
    });
    return res.json(categoryData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  // finds one category by its `id` value and includes its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [Product],
    });
    return res.json(categoryData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  // creates a new category
  try {
    const categoryData = await Category.create(req.body)
    return res.json(categoryData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res) => {
  // updates a category by its `id` value
  const categoryId = req.params.id
  try {
    const categoryData = await Category.findByPk(categoryId)

    if(!categoryData) {
      return res.status(404).json({error: "Category not found"})
    }

    const updatedData = req.body; 
    await categoryData.update(updatedData)
    return res.json(categoryData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    })
    return res.json(categoryData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
