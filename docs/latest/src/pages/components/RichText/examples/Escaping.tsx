import type { FC } from 'react'
import '@nectary/components/rich-text'

export const EscapingExample: FC = () => (
  <>
    <sinch-rich-text size="m" text={'This is \\_not italic\\_ but this is _italic_'}/>
    <sinch-rich-text size="m" text={'This is \\*\\*not bold\\*\\* but this is **bold**'}/>
    <sinch-rich-text size="m" text={'This is \\`not code\\` but this is `code`'}/>
  </>
)
