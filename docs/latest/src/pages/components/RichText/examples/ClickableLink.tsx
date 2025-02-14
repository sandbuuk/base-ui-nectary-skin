import { type FC } from 'react'
import '@nectary/components/rich-text'

const mdText = `
Read [our Terms and conditions](.){prevent-default #open-tc}.
`

export const ClickableLinkExample: FC = () => (
  <sinch-rich-text
    size="m"
    text={mdText}
    on-element-click={(e) => {
      if (e.currentTarget?.id === 'open-tc') {
        // eslint-disable-next-line no-alert
        alert('Opening terms and conditions')
      }
    }}
  />
)
