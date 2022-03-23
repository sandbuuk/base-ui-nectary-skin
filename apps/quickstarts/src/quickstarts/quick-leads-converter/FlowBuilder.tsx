import { Fragment } from 'react'
import { Ruler } from '../../components/Ruler'
import type { FC } from 'react'
import '@sinch-engage/nectary/textarea'
import '@sinch-engage/nectary/input'
import '@sinch-engage/nectary/button'

type Props = {
  greeting: string,
  setGreeting: (s: string) => void,
  questions: string[],
  setQuestion: (index: number, s: string) => void,
  addQuestion: () => void,
}

export const FlowBuilder: FC<Props> = ({ greeting, setGreeting, questions, setQuestion, addQuestion }) => (
  <section style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
    <sinch-textarea
      label="Greeting"
      aria-label="Greeting"
      additionalText={(400 - greeting.length).toString()}
      value={greeting}
      onChange={(e) => setGreeting(e.nativeEvent.detail)}
    />

    <Ruler horizontal/>

    <p>You can add up to 6 questions before transfering your customer to your agent.</p>

    {questions.map((question, i) => (
      <Fragment key={i}>
        <sinch-input
          style={{ width: 'auto' }}
          label={`Question ${i + 1}`}
          aria-label={`Question ${i + 1}`}
          additionalText={(400 - question.length).toString()}
          value={question}
          onChange={(e) => setQuestion(i, e.nativeEvent.detail)}
        />
        {(i + 1) != questions.length && <Ruler horizontal/>}
      </Fragment>
    ))}
    <sinch-button
      style={{ width: 'fit-content' }}
      type="cta-primary"
      text="Add new question"
      aria-label="Add new question"
      onClick={addQuestion}
    />
  </section>
)
