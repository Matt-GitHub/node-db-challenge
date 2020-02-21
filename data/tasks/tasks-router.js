const express = require("express");
const taskRouter = require("./tasks-model");
const router = express();

router.use(express.json());

router.get("/", (req, res) => {
  taskRouter
    .findTask()
    .then(task => {
      res.status(200).json(task);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "cannot get task's at this time" });
    });
});

router.post("/", (req, res) => {
  const info = req.body;
  taskRouter
    .addTask(info)
    .then(post => {
      res.status(200).json(post);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "cannot post" });
    });
});

module.exports = router;
