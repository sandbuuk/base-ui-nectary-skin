import successFN from './lib/success.js'

// See docs: https://semantic-release.gitbook.io/semantic-release/developer-guide/plugin#multiple-analyzecommits-plugins
// See inspiration for this: https://github.com/juliuscc/semantic-release-slack-bot/blob/master/index.js
export const success = () => successFN()
