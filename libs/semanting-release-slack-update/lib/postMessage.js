import SemanticReleaseError from '@semantic-release/error'

export default async (
  message,
  logger
) => {
  let bodyText
  let isSuccess

  try {
    await fetch('https://hooks.slack.com/triggers/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', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message,
      }),
    }).then((res) => (isSuccess = res.ok))
  } catch (e) {
    throw new SemanticReleaseError(e.message, 'SLACK CONNECTION FAILED')
  }

  if (!isSuccess) {
    logger.log(`JSON message format invalid: ${bodyText}`)
    throw new SemanticReleaseError(bodyText, 'INVALID SLACK COMMAND')
  }
}
