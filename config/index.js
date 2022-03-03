if (process.env.NODE_ENV != 'production') {
  require('dotenv').config()
}

module.exports = {
  slack: {
    botToken: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET
  }
}
