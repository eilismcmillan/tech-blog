const router = require("express").Router();
const { Blogpost } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const blogData = await Blogpost.findAll();
    res.status(200).json(blogData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    if (req.session.logged_in) {
      const newBlogpost = await Blogpost.create({
        title: req.body.title,
        contents: req.body.contents,
        user_name: req.body.user_name,
        date_created: req.body.date_created,
        user_id: req.session.user_id,
      });
      res.status(200).json(newBlogpost);
    }
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const blogData = await Blogpost.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
