const router = require("express").Router();
const { Blogpost } = require("../models");
const moment = require("moment");
const e = require("express");


router.get("/", async (req, res) => {
    try {
        if (req.session.logged_in) {

      const blogData = await Blogpost.findAll({
        order: [["date_created", "ASC"]],
      });

      const blogposts = blogData.map((blogpost) => blogpost.get({ plain: true }));

      const date = blogposts.map((item) => item.date_created);
      const date_created = date.map((item) => moment(item).format("Do MMM YYYY"));

      for (let i = 0; i < blogposts.length; i++) {
        blogposts[i].date_created = date_created[i];
      }

      res.render("dashboard", {
        blogposts,
        logged_in: req.session.logged_in
      });
        } else {
            res.render("no-account")
        }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    } 
});

module.exports = router;
