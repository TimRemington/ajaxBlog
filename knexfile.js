module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/blog'
  },
  test: {},
  production: {
    client: 'pg',
    connection: 'postgres://xwhhzqbtmtxmmz:d8287c4983ef03b702c533d79c6a885bf365d96cd761f4a2cb17b7ed352a5285@ec2-54-204-14-96.compute-1.amazonaws.com:5432/det80vg40r1t2j'
  }
}
