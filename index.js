const express = require("express");
const projectRouter = require("./data/projects/projects-router");
const taskRouter = require("./data/tasks/tasks-router");
const resourceRouter = require("./data/resources/resources-router");
const server = express();

server.use(express.json());
server.use("/api/projects", projectRouter);
server.use("/api/tasks", taskRouter);
server.use("/api/resources", resourceRouter);
const port = 6000;

server.listen(port, () => {
  console.log(`server is up and running on port ${port}`);
});
