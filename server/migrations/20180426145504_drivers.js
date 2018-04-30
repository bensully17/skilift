
exports.up = function(knex, Promise) {
  return knex.schema.createTable('drivers', (table) => {
    table.increments('id')
    table.text('userName')
    table.float('lat')
    table.float('long')
    table.text('destination')
    table.date('departing')
    table.integer('time')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('drivers')
};
