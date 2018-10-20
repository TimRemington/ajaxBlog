exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blogtable').del()
    .then(function() {
      // Inserts seed entries
      return knex('blogtable').insert([
        {id: 1, name: 'Shadowrun', blogpost: 'This RPG is a mix of fantasy and cyberpunk.  It was made in the late 80s, and has come into a lot of recent popularity.'},
        {id: 2, name: 'Vampire The Masquerade', blogpost: 'An early 90s RPG that allowed players to be vampires in the modern age. The best horror RPG on the market.'},
        {id: 3, name: 'Eclipse Phase', blogpost: 'Modern sci fi RPG that has heavy themes of extinction, transhumanism, first contact and cosmic horror.  Really decent.'},
        {id: 4, name: 'Legend of the Five Rings', blogpost: 'Fantasy Japanese RPG set during a Sengoku Jidai type period of time. Has Samurai, Ninjas, and Oni... worth a try.'},
        {id: 5, name: 'All Flesh Must Be Eater', blogpost: 'Poorly designed by fun zombies RPG with various scenarios to accomodate all kinds of zombies for your players to fight.'}

      ])
      .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('blogtable_id_seq', (SELECT MAX(id) FROM blogtable))")
      })
    })
}
