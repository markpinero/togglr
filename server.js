const express       = require('express')
    , app           = express()
    , bodyParser    = require('body-parser')
    , config        = require('./config')
    , redis         = require('redis')
    , session       = require('express-session')
    , redis_store   = require('connect-redis')(session)
    , redis_client  = redis.createClient();

app.listen(process.env.PORT || 8080, () => {
  console.log(`Listening on port ${process.env.PORT || 8080}`)
})