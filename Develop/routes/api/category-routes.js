const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// FIND ALL categories
// include its associated Products
router.get("/", async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// FIND ONE category by its `id` value
// include its associated Products
router.get("/:id", async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!categoryData) {
      res.status(404).json({ message: "No Category found with that id" });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// CREATE a new category
router.post("/", async (req, res) => {
  try {
    const categoryData = await Category.create({
      category_id: req.body.category_id,
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});


// UPDATE a category by its `id` value
router.put("/:id", async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if(!categoryData) {
      res.status(404).json({ message: 'No category found with that id' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// DELETE a category by its `id` value
router.delete("/:id", async (req, res) => {
  try {
    const categoryData = await Category.destroy({ 
      where: {
        id: req.params.id,
      },
    });
    if(!categoryData) {
      res.status(404).json({ message: 'No Category found with that id' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
