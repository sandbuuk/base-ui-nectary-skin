import { useState } from 'react'
import styled from 'styled-components'
import { Ruler } from '../../components/Ruler'
import type { Agent } from './types'
import type { FC } from 'react'
import '@sinch-engage/nectary/textarea'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/button'

type HumanHandoverProps = {
  handoverMessage: string,
  setHandoverMessage: (s: string) => void,
  agents: Agent[],
  addAgent: (agent: Agent, index: number | null) => void,
  removeAgent: (i: number) => void,
}

const Table = styled.table`
  border-collapse: collapse;
  margin-top: 100px;
  text-align: left;
  
  tbody tr {
    border-top: 1px solid #999999;
  }

  th {
    padding: 5px 16px;
  }

  td {
    padding: 24px 16px;
    max-width: 100px;
    overflow-wrap: break-word;
  }

  td:last-child {
    white-space: nowrap;
  }

  sinch-button {
    margin-right: 13px;
  }
  sinch-button:last-child {
    margin-right: 0;
  }
`

const MAX_AGENTS = 5

export const HumanHandover: FC<HumanHandoverProps> = ({ handoverMessage, setHandoverMessage, agents, addAgent, removeAgent }) => {
  const [agentName, setAgentName] = useState<string>('')
  const [agentEmail, setAgentEmail] = useState<string>('')
  const [invalidNameMessage, setInvalidNameMessage] = useState<string | undefined>(undefined)
  const [invalidEmailMessage, setInvalidEmailMessage] = useState<string | undefined>(undefined)
  const [selectedAgent, setSelectedAgent] = useState<number | null>(null)

  const validInputs = (): boolean => {
    // Validate email.
    if (agentName.length == 0) {
      setInvalidNameMessage('You must give an agent name.')

      return false
    }

    setInvalidNameMessage(undefined)

    if (!/.@./.test(agentEmail)) {
      setInvalidEmailMessage('Enter a valid e-mail address.')

      return false
    }

    setInvalidEmailMessage(undefined)

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
    <section style={{ display: 'flex', flexDirection: 'column', position: 'relative', flex: 1, padding: '0 10% 0' }}>
      <sinch-textarea
        label="Human handover message"
        aria-label="Human handover message"
        additionalText={(400 - handoverMessage.length).toString()}
        value={handoverMessage}
        placeholder={'I am transferring you to a human agent.'}
        onChange={(e) => setHandoverMessage(e.nativeEvent.detail)}
      />

      <Ruler horizontal/>

      <sinch-input
        label="Agent name"
        aria-label="Agent name"
        value={agentName}
        invalidText={invalidNameMessage}
        disabled={agents.length === MAX_AGENTS && selectedAgent === null}
        placeholder="Insert name"
        onChange={(e) => setAgentName(e.nativeEvent.detail)}
      />

      <sinch-input
        label="Agent e-mail"
        aria-label="Agent e-mail"
        value={agentEmail}
        invalidText={invalidEmailMessage}
        disabled={agents.length === MAX_AGENTS && selectedAgent === null}
        placeholder="Insert e-mail"
        onChange={(e) => setAgentEmail(e.nativeEvent.detail)}
      />

      <sinch-button
        disabled={agents.length === MAX_AGENTS}
        style={{ width: 'fit-content' }}
        type="cta-primary"
        text={selectedAgent != null
          ? 'Save changes'
          : `Add more agents (Up to ${MAX_AGENTS - agents.length})`}
        aria-label={selectedAgent != null
          ? 'Save changes'
          : `Add more agents (Up to ${MAX_AGENTS - agents.length})`}
        onClick={onAddAgent}
      />

      {agents.length > 0 && (
        <Table>
          <thead><tr><th>Name</th><th>E-mail</th><th>Action</th></tr></thead>
          <tbody>
            {agents.map(({ name, email }, i) => (
              <tr key={i}>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                  <sinch-button
                    text="Edit"
                    aria-label="Edit"
                    type="primary"
                    small
                    onClick={() => {
                      setAgentName(name)
                      setAgentEmail(email)
                      setSelectedAgent(i)
                    }}
                  />
                  <sinch-button
                    text="Delete"
                    aria-label="Delete"
                    type="destructive"
                    small
                    onClick={() => removeAgent(i)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </section>
  )
}
