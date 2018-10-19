exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blogtable').del()
    .then(function() {
      // Inserts seed entries
      return knex('blogtable').insert([
        {id: 1, name: 'Tim', blogpost: 'I really like Star Wars and Lord of the Rings.  But I would NEVER use them for a password.'}
      ])
      .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('blogtable_id_seq', (SELECT MAX(id) FROM blogtable))")
      })
    })
}
