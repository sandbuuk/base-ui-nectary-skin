import { RichText } from '@nectary/react'
import type { ChipResolver } from '@nectary/react'
import type { FC } from 'react'

// Define chip configurations with icons and colors
const chipConfigs: Record<string, { icon: string, color: string }> = {
  JohnDoe: { icon: 'fa-user', color: 'blue' },
  JaneSmith: { icon: 'fa-user-crown', color: 'violet' },
  Priority: { icon: 'fa-flag', color: 'red' },
  Urgent: { icon: 'fa-circle-exclamation', color: 'red' },
  Review: { icon: 'fa-eye', color: 'orange' },
  Done: { icon: 'fa-check', color: 'green' },
}

const markdownWithChips = `Hello {{JohnDoe}} and {{JaneSmith}}, please {{Review}} this task marked as {{Priority}}.

Once complete, mark it as {{Done}}. Any {{Unknown}} chips will use the default chip style.`

const chipResolver: ChipResolver = (chipName) => {
  const config = chipConfigs[chipName]

  if (config !== undefined) {
    return { icon: config.icon, color: config.color }
  }

  // Return undefined for unknown chips - they will use the default chip-color
  return undefined
}

export const TagsExample: FC = () => (
  <RichText
    text={markdownWithChips}
    chipColor="violet"
    chipIcon="fa-tag"
    chipResolver={chipResolver}
  />
)
