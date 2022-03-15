import { useState } from 'react'
import { Ruler } from '../../components/Ruler'
import type { Agent } from './types'
import type { FC } from 'react'
import '@sinch-engage/nectary/textarea'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/button'

type Props = {
  handoverMessage: string,
  setHandoverMessage: (s: string) => void,
  agents: Agent[],
  addAgent: (agent: Agent, index: number | null) => void,
  removeAgent: (i: number) => void,
}

const MAX_AGENTS = 5

export const HumanHandover: FC<Props> = ({ handoverMessage, setHandoverMessage, agents, addAgent }) => {
  const [agentName, setAgentName] = useState<string>('')
  const [agentEmail, setAgentEmail] = useState<string>('')
  const [invalidNameMessage, setInvalidNameMessage] = useState<string | undefined>(undefined)
  const [invalidEmailMessage, setInvalidEmailMessage] = useState<string | undefined>(undefined)
  const [selectedAgent, setSelectedAgent] = useState<number | null>(null)

  const validInputs = (): boolean => {
    // Validate email.
    if (agentName.length < 0) {
      setInvalidNameMessage('You must give an agent name.')

      return false
    }

    setInvalidEmailMessage(undefined)

    if (!/.@./.test(agentEmail)) {
      setInvalidNameMessage('You must give an agent name.')

      return false
    }

    return true
  }

  const onAddAgent = () => {
    if (!validInputs()) {
      return
    }

    addAgent({ name: agentName, email: agentEmail }, selectedAgent)
    setSelectedAgent(null)
    setAgentName('')
    setAgentEmail('')
  }

  return (
    <section style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <sinch-textarea
        label="Human handover message"
        invalidText={invalidNameMessage}
        additionalText={(400 - handoverMessage.length).toString()}
        value={handoverMessage}
        onChange={(e) => setHandoverMessage(e.nativeEvent.detail)}
      />

      <Ruler horizontal/>

      <sinch-input
        label="Agent name"
        invalidText={invalidEmailMessage}
        value={agentName}
        disabled={agents.length === MAX_AGENTS && selectedAgent === null}
        placeholder="John"
        onChange={(e) => setAgentName(e.nativeEvent.detail)}
      />

      <sinch-input
        label="Agent e-mail"
        value={agentEmail}
        disabled={agents.length === MAX_AGENTS && selectedAgent === null}
        placeholder="john@example.com"
        onChange={(e) => setAgentEmail(e.nativeEvent.detail)}
      />

      <sinch-button disabled={agents.length === MAX_AGENTS} style={{ width: 'fit-content' }} type="cta-primary" text={`Add more agents (Up to ${MAX_AGENTS - agents.length})`} onClick={onAddAgent}/>

      {agents.map((agent, i) => (
        <>
          <div key={`${i}name`}>{agent.name}</div>
          <div key={`${i}email`}>{agent.email}</div>
          <Ruler horizontal/>
        </>
      ))}
    </section>
  )
}
