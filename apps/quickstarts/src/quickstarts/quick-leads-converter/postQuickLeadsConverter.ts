import type { Agent } from './types'

// TODO: This should move out to some configuration file or similar.
const baseUrl = 'https://quickstart.engage.contour.stagingengage.sinch.com/quick_leads_converter'

type RequestBody = {
  agents: {name: string, email: string}[],
  questions: {
    greetings: string,
    offloading: string,
    questionListAfterOffloading: {name: string, description: string}[],
  },
}

export const postQuickLeadsConverter = (token: string) => (greeting: string, questions: string[], handover: string, agents: Agent[]) => {
  const body: RequestBody = {
    questions: {
      greetings: greeting,
      offloading: handover,
      questionListAfterOffloading: questions.map((description, i) => ({ name: `Question ${i + 1}`, description })),
    },
    agents,
  }

  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  })
}
