const businesscards = require("./00-businesscards.json");


exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return knex
  .raw("TRUNCATE TABLE businesscards RESTART IDENTITY CASCADE")
  .then(function(){
    return knex("businesscards").insert(businesscards)
  });
};
