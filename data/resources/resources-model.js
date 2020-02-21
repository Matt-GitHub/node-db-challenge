const db = require("../db-config");

function findResource() {
  return db("resources");
}

function postResource(resource) {
  return db("resources").insert(resource);
}

module.exports = {
  findResource,
  postResource
};
