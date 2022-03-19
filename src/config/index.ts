if (process.env.NODE_ENV != 'production') {
  require('dotenv').config()
}

export default {
  slack: {
    botToken: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET
  }
}
