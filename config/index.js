module.exports = {
  session: {
    secret: 'oadsjflsakjf;slf',
    key: 'k_id',
    host: 'localhost',
    port: 6379,
    ttl: 60*60*24*30 // auth timer
  }
}