
exports.up = function(knex, Promise) {
  return knex.schema.createTable('riders', table => {
    table.increments('id')
    table.text('userName')
    table.text('destination')
    table.date('departing')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('riders')
};
