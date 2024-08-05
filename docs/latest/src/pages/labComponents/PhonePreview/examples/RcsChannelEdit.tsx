import '@nectary/labs/phone-preview-rcs-channel'
import '@nectary/labs/phone-preview-skeleton'
import { useState } from 'react'

const paramsExample = `{
    "name": "Sinch",
    "description": "Build meaningful connections with your customers.",
    "color": "#dcede1",
    "banner": null,
    "logo": "https://www.sinch.com/sites/default/files/favicon_0.ico",
    "phones": [
        { "label": "Americas - Atlanta, GA, USA", "number": "+18448474624" },
        { "label": "EMEA - Stockholm, Sweden", "number": "+46844682803" },
        { "label": "APAC - Singapore", "number": "+6531583155" }
    ],
    "websites": [
        {"label": "Sinch Home", "url": "https://www.sinch.com/" },
        {"label": "Sinch Dashboard", "url": "https://dashboard.sinch.com/" },
        {"label": "Sinch Engage", "url": "https://engage.sinch.com/" }
    ],
    "emails": []
}`

export const RcsChannelEditExample = () => {
  const [params, setParams] = useState(paramsExample)
  const [parsed, setParsed] = useState(() => JSON.parse(params))
  const [error, setError] = useState<Error>()

  return (
    <section>
      <div>Params: </div>
      <textarea
        style={{ blockSize: '25rem', inlineSize: '100%' }}
        value={params}
        onChange={(e) => {
          setParams(e.target.value)

          try {
            setParsed(JSON.parse(e.target.value))
            setError(undefined)
          } catch (e: any) {
            setError(e)
          }
        }}
      />
      {error != undefined && <pre style={{ color: 'red' }}>{error.message}</pre>}
      <sinch-labs-phone-preview-skeleton>
        <sinch-labs-phone-preview-rcs-channel
          {...parsed}
          // react limitation - manual serialization required
          phones={JSON.stringify(parsed?.phones ?? [])}
          websites={JSON.stringify(parsed?.websites ?? [])}
          emails={JSON.stringify(parsed?.emails ?? [])}
        />
      </sinch-labs-phone-preview-skeleton>
    </section>
  )
}
