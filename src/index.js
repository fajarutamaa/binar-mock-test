require('dotenv').config()
const express = require('express')
const app = express()
const router = require('./routes/route')
const Sentry = require('@sentry/node')
const cookieparser = require('cookie-parser')
const cors = require('cors')

const sentryDsn = process.env.SENTRY_DSN
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieparser())
app.use('/api/v1/', router)

Sentry.init({
    dsn: sentryDsn,
    tracesSampleRate: 1.0,
})

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`)
})

