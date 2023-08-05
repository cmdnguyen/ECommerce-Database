// Import Node packages and path files
const router = require("express").Router();
const { Product, Category, Tag, ProductTag } = require("../../models");

// The `/api/products` endpoint

// GET route of product
router.get("/", async (req, res) => {
  // finds all products and includes associated Category and Tag data
  try {
    const productData = await Product.findAll({
      include: [Category, Tag],
    });
    return res.json(productData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET route of product by id
router.get("/:id", async (req, res) => {
  // finds a single product by its `id` and includes associated Category and Tag data
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [Category, Tag],
    });
    return res.json(productData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// POST route of product
router.post("/", async (req, res) => {
  /* req.body should look like this when you want to create the product
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  try {
    //Creating a Product
    const newProduct = await Product.create(req.body);
    //CheckS if there's tagIds in the body, so that we can create the product tags
    if (!req.body.tagIds) {
      return res.status(200).json(newProduct);
    }

    const productTagIdArr = req.body.tagIds.map((tag_id) => {
      return {
        product_id: newProduct.id,
        tag_id,
      };
    });
    const productTags = await ProductTag.bulkCreate(productTagIdArr);
    res.status(200).json(productTags);
    //3rd: If no tagIds, just send back the product, else, the product tag array
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

// PUT route of product by id
router.put('/:id', (req, res) => {
  // update product data
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      // find all associated tags from ProductTag
      return ProductTag.findAll({ where: { product_id: req.params.id } });
    })
    .then((productTags) => {
      // get list of current tag_ids
      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      // create filtered list of new tag_ids
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });
      // figure out which ones to remove
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      // run both actions
      return Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    })
    .then((updatedProductTags) => res.json(updatedProductTags))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

// DELETE route for product by id
router.delete("/:id", async (req, res) => {
  // deletes a product by its `id` value
  try {
    const productData = await Product.destroy({
      where: {
        id: req.params.id
      }
    })
    return res.json(productData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
