const db = require("../db-config");

function findTask() {
  return db("tasks");
}

function addTask(project) {
  return db("tasks").insert(project);
}

module.exports = {
  findTask,
  addTask
};
