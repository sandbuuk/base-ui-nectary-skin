const fs = require('fs')
const https = require('https')
const slackifyMarkdown = require('slackify-markdown')

// eslint-disable-next-line node/no-sync
const changelogMd = fs.readFileSync('components/changelog.md', 'utf-8')
const md = slackifyMarkdown(changelogMd.split('\n\n##')[0].replace('##', '## Components'))

const dataString = encodeURI(
  `payload=${JSON.stringify({
    channel: '#nectary',
    username: 'Bot',
    icon_emoji: ':bee:',
    blocks: [{
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: md,
      },
    }],
  })}`
)

const req = https.request(
  process.env.SLACK_HOOK_URL,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'Content-Length': Buffer.byteLength(dataString),
    },
    timeout: 3000,
  },
  (res) => {
    if (res.statusCode < 200 || res.statusCode > 299) {
      throw new Error(`HTTP status code ${res.statusCode}: ${res.statusMessage}`)
    }

    console.log('OK')
  }
)

req.on('timeout', () => {
  req.destroy()
  throw new Error('Request timeout')
})

req.write(dataString)
req.end()
