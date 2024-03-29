import { App, GenericMessageEvent, MessageEvent } from '@slack/bolt'

const isGenericMessageEvent = (message: MessageEvent): message is GenericMessageEvent => (message as GenericMessageEvent).subtype === undefined

import config from './config'

const app = new App({
  token: config.slack.botToken,
  signingSecret: config.slack.signingSecret
});

app.message('hello', async ({ message, say }) => {
  if (!isGenericMessageEvent(message)) return;

  await say({
    blocks: [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `Hey there <@${message.user}>!`
        },
        "accessory": {
          "type": "button",
          "text": {
            "type": "plain_text",
            "text": "Click Me!"
          },
          "action_id": "button_click"
        }
      }
    ],
    text: `Hey there <@${message.user}>!`
  });
});

app.action('button_click', async ({ body, ack, say }) => {
  await ack();
  await say(`<@${body.user.id}> clicked the button`)
});

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log('Bolt app is running!');
})();
