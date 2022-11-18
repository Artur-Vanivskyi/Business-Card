
exports.up = function(knex) {
  return knex.schema.createTable("businesscards", (table) =>{
    table.increments("businesscard_id").primary();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("job_title").notNullable();
    table.string("mobile_number").notNullable();
    table.string("email").notNullable();
    table.string("company_name").notNullable();
    table.string("comments");
    table.timestamps(true, true);


  })
};


exports.down = function(knex) {
  return knex.schema.dropTable("businesscards");
};
