exports.up = function(knex, Promise) {
  return knex.schema.createTable('blogtable', function(table) {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments()
    table.string('name').notNullable().defaultTo('')
    table.string('blogpost').defaultTo('')
    table.timestamps(true, true)
    // OR
    // table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'))
    // table.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'))
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('blogtable')
}
