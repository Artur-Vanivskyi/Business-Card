
exports.up = function(knex) {
  return knex.schema.createTable("businesscards", (table) =>{
    table.increments("businesscard_id").primary();
    table.string("first_name");
    table.string("last_name");
    table.string("job_title")
    table.string("mobile_number");
    table.string("email");
    table.string("company_name");
    table.string("comments");
    table.timestamps(true, true);


  })
};


exports.down = function(knex) {
  return knex.schema.dropTable("businesscards");
};
