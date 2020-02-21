const express = require("express");
const projects = require("./projects-model");
const router = express();

router.use(express.json());

router.get("/", (req, res) => {
  projects
    .find()
    .then(projects => {
      res.status(201).json(projects);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "cannot find projects" });
    });
});

router.post("/", (req, res) => {
  const info = req.body;
  projects
    .add(info)
    .then(post => {
      res.status(200).json(post);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "cannot post" });
    });
});

router.get("/:id/tasks", (req, res) => {
  const { id } = req.params;

  projects
    .getAll(id)
    .then(getall => {
      if (getall.length) {
        res.json(getall);
      } else {
        res
          .status(404)
          .json({ message: "Could not find tasks for given scheme" });
      }
    })
    .catch(err => {
      console.log("getall error", err);
      res.status(500).json({ message: "Failed to get steps" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  projects
    .remove(id)
    .then(deleted => {
      res.json(deleted);
    })
    .catch(err => {
      console.log("remove error", err);
      res.status(500).json({ message: "Failed to delete project" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  projects
    .update(body, id)
    .then(edit => {
      res.status(201).json(edit);
    })
    .catch(err => {
      console.log("put error", err);
      res
        .status(500)
        .json({ errorMessage: "cannot edit project at this time" });
    });
});

module.exports = router;
