/*
  Since late 2020, Netlify has put up a pay wall on its built-in Slack notifications for CI/CD. 
  This gist shows you a workaround using the still-free Netlify's deploy webhook that triggers a Netlify Function calling Slack Incoming Webhook.
  
  Steps:
  1. Deploy this Netlify Function
  2. Have the corresponding link pasted into Netlify's deploy webhook, i.e. https://example.com/.netlify/functions/<your-function>
  3. In next deploy, Netlify will trigger the deploy webhook, which in turn calls your Slack Incoming Webhook  
*/

const fetch = require('node-fetch'); // Don't forget to hit `npm i node-fetch`
const WebHookURL = process.env.SLACK_WEBHOOK; // Store the Slack Incoming Webhook in Netlify's environment

const messageBody = {
  "username": "Deploy to Netlify",
  "text": "Successful deploy of Can We Play Together",
  "attachments": [
    {
      "color": "#2eb886", // Green
      "fields": [ // Green bar
        {
          "title": "Status",
          "value": "Success",
          "short": true
        }
      ],
      "actions": [ // Slack supports many kind of different types, we'll use buttons here
        {
          "type": "button",
          "text": "Website",
          "style": "primary", // you can have buttons styled either primary(green) or danger(red)
          "url": "https://can-we-play-together.netlify.app/"
        },
        // {
        //   "type": "button",
        //   "text": "Deploy Status", // text on the button
        //   "url": "<Your Netlify's Build Status Link>" // url the button will take the user if clicked
        // },
        {
          "type": "button",
          "text": "Github Repo",
          "url": "https://github.com/ferreirasara/can-we-play-together"
        }
      ]
    }
  ]
};

// main
module.exports.handler = async function () {
  if (!WebHookURL) {
    console.error('Please fill in your Webhook URL');
    return {
      statusCode: 400,
      body: JSON.stringify({
        msg: "Couldn't find SLACK_WEBHOOK"
      })
    };
  }

  console.log('Sending slack message');

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(messageBody)
  };

  const response = await fetch(WebHookURL, options);
  console.log(response)
  return {
    statusCode: 200,
    body: JSON.stringify({
      msg: "Success"
    })
  };
}