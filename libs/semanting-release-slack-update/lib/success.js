import slackifyMarkdown from 'slackify-markdown'
import postMessage from './postMessage.js'

export default async (_pluginConfig, context) => {
  const {
    logger,
    nextRelease,
  } = context

  logger.log('Sending slack notification on success')
  logger.log(nextRelease)

  const releaseNotes = slackifyMarkdown(nextRelease.notes)

  const messageBlocks = `
    A new version of \`${nextRelease.name}\` has been released!
    Current version is *${nextRelease.version}*
    ${releaseNotes}
  `

  await postMessage(messageBlocks, logger)
}
