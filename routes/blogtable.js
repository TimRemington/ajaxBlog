const express = require('express')
const router = express.Router()
const knex = require('../knex')

// READ ALL records for this table
router.get('/', (req, res, next) => {
  knex('blogtable')
    .then((rows) => {
      res.json(rows)
    })
    .catch((err) => {
      next(err)
    })
})
// READ ONE record for this table
router.get('/:id', (req, res, next) => {
  knex('blogtable')
    .where('id',req.params.id)
    .then((rows) => {
      res.json(rows)
    })
    .catch((err) => {
      next(err)
    })
})
// CREATE ONE record for this table
router.post('/', (req, res, next) => {
  knex('blogtable')
    .insert({
      "name": req.body.name,
      "blogpost": req.body.blogpost
    })
    .returning('*')
    .then((data) => {
      res.json(data[0])
    })
    .catch((err) => {
      next(err)
    })
})
// UPDATE ONE record for this table
router.put('/:id', (req, res, next) => {
  knex('blogtable')
    .where('id', req.params.id)
    .then((data) => {
  knex('blogtable')
    .where('id', req.params.id)
    .limit(1)
    .update({
      "name": req.body.name,
      "blogpost": req.body.blogpost
    })
    .returning('*')
    .then((data) => {
      res.json(data[0])
    })
  })
  .catch((err) => {
    next(err)
  })
})
// DELETE ONE record for this table
router.delete('/:id', (req, res, next) => {
  knex('blogtable')
  .where('id', req.params.id)
  .first()
  .then((row) => {
    if(!row) return next()
    knex('blogtable')
      .del()
      .where('id', req.params.id)
      .then(() => {
        res.send(`ID ${req.params.id} Deleted`)
      })
  })
  .catch((err) => {
    next(err)
  })
})

module.exports = router
