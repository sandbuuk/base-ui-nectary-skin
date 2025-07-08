import '@nectary/labs/phone-preview'
import '@nectary/labs/phone-preview-rcs-chat'
import '@nectary/labs/phone-preview-rcs-chat-message'
import { useState } from 'react'

const paramsExample = `{
    "name": "Sinch",
    "description": "Build meaningful connections with your customers.",
    "logo": "https://www.sinch.com/sites/default/files/favicon_0.ico",
    "messages": [
        "Hello, how are you?",
        "I'm here to help you with any questions you may have.",
        "Feel free to ask me anything about our services."
    ]
}`

export const RcsChatEditExample = () => {
  const [params, setParams] = useState(paramsExample)
  const [parsed, setParsed] = useState(() => JSON.parse(params))
  const [error, setError] = useState<Error | undefined>()

  return (
    <section>
      <div>Params: </div>
      <textarea
        style={{ blockSize: '12rem', inlineSize: '100%' }}
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
      {error !== undefined && <pre style={{ color: 'red' }}>{error.message}</pre>}
      <sinch-labs-phone-preview>
        <sinch-labs-phone-preview-rcs-chat
          name={parsed?.name}
          description={parsed?.description}
          logo={parsed?.logo}
        >
          {parsed?.messages?.map((message: string, index: number) => (
            <sinch-labs-phone-preview-rcs-chat-message
              key={`message-${index}`}
              slot="messages"
              text={message}
            />
          ))}
        </sinch-labs-phone-preview-rcs-chat>
      </sinch-labs-phone-preview>
    </section>
  )
}
