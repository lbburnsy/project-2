const router = require("express").Router();
const { User, FullStack, BackEnd, FrontEnd } = require("../../models");
const withAuth = require("../../utils/auth");
const jobRoutes = require("./jobRoutes");

router.post("/frontend", withAuth, async (req, res) => {
    try {
      const frontEndData = await FrontEnd.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(frontEndData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.post("/backend", withAuth, async (req, res) => {
    try {
      const backEndData = await BackEnd.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(backEndData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.post("/fullstack", withAuth, async (req, res) => {
    try {
      const fullStackData = await FullStack.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(fullStackData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.delete("/frontend/:id", withAuth, async (req, res) => {
    try {
      const jobData = await FrontEnd.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      res.status(200).json(jobData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.delete("/backend/:id", withAuth, async (req, res) => {
    try {
      const jobData = await BackEnd.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      res.status(200).json(jobData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.delete("/fullstack/:id", withAuth, async (req, res) => {
    try {
      const jobData = await FullStack.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      res.status(200).json(jobData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;