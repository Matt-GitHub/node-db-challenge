const db = require("../db-config");

function find() {
  return db("projects");
}

function add(project) {
  return db("projects").insert(project);
}

function getAll(project_id) {
  return db("projects")
    .join("tasks", "tasks.project_id", "=", "projects.id")
    .select("projects.name", "projects.description", "tasks.notes")
    .where({ project_id });
}

function remove(id) {
  return db("projects")
    .where({ id })
    .delete();
}

function update(changes, id) {
  return db("projects")
    .update(changes)
    .where({ id });
}

module.exports = {
  find,
  add,
  getAll,
  remove,
  update
};
