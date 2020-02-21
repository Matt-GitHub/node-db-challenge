const express = require("express");
const resourceRouter = require("./resources-model");
const router = express();

router.use(express.json());

router.get("/", (req, res) => {
  resourceRouter
    .findResource()
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  resourceRouter
    .postResource(req.body)
    .then(post => {
      res.status(200).json(post);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
