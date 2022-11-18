const knex = require("../db/connection");

function list() {
  return knex("businesscards").select("*").orderBy("first_name");
}

function create(businessCard) {
  return knex("businesscards")
    .insert(businessCard)
    .returning("*")
    .then((createdRecord) => createdRecord[0]);
}

function read(businesscard_id){
    return knex("businesscards")
    .select("*")
    .where({businesscard_id: businesscard_id})
    .first();
}

function update(updatedBusinessCard){
    return knex("businesscards")
    .select("*")
    .where({businesscard_id: updatedBusinessCard.businesscard_id})
    .update(updatedBusinessCard)
    .returning("*")
    .then((updatedRecord) => updatedRecord[0]);
}

module.exports = {
  list,
  create,
  read,
  update,
};
