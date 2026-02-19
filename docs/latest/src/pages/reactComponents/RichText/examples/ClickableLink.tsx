import { RichText } from '@nectary/react'
import type { FC } from 'react'

const mdText = `
Read [our Terms and conditions](.){prevent-default #open-tc}.
`

export const ClickableLinkExample: FC = () => (
  <RichText
    size="m"
    text={mdText}
    onElementClick={(e, element) => {
      if (element.id === 'open-tc') {
        // eslint-disable-next-line no-alert
        alert('Opening terms and conditions')
      }
    }}
  />
)
