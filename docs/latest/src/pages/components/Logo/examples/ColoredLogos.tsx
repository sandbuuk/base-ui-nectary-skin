import type { CSSProperties, FC } from 'react'
import '@nectary/components/table'
import '@nectary/components/table-head'
import '@nectary/components/table-head-cell'
import '@nectary/components/table-body'
import '@nectary/components/table-row'
import '@nectary/components/table-cell'
import '@nectary/assets/logo/engage-icon-wordmark'
import '@nectary/assets/logo/portal-engage-icon-wordmark'
import '@nectary/assets/logo/email-on-acid-icon-wordmark'
import '@nectary/assets/logo/mailgun-icon-wordmark'
import '@nectary/assets/logo/mailjet-icon-wordmark'
import '@nectary/assets/logo/email-on-acid-icon'
import '@nectary/assets/logo/engage-icon'
import '@nectary/assets/logo/portal-engage-icon'
import '@nectary/assets/logo/mailgun-icon'
import '@nectary/assets/logo/mailjet-icon'
import '@nectary/assets/logo/message-media-icon'
import '@nectary/assets/logo/simple-texting-icon'
import '@nectary/assets/logo/simple-texting-icon-wordmark'
import '@nectary/assets/logo/portal-mailgun-icon'
import '@nectary/assets/logo/portal-mailgun-icon-wordmark'
import '@nectary/assets/logo/portal-mailjet-icon'
import '@nectary/assets/logo/portal-mailjet-icon-wordmark'
import '@nectary/assets/logo/portal-build-icon'
import '@nectary/assets/logo/portal-build-icon-wordmark'
import '@nectary/assets/logo/portal-connect-icon'
import '@nectary/assets/logo/portal-connect-icon-wordmark'
import '@nectary/assets/logo/message-media-icon-wordmark'
import '@nectary/assets/logo/portal-message-media-icon'
import '@nectary/assets/logo/portal-message-media-icon-wordmark'

const tableStyle: CSSProperties = {
  width: '100%',
}

export const ColoredLogosExample: FC = () => {
  return (
    <sinch-table style={tableStyle}>
      <sinch-table-head>
        <sinch-table-row>
          <sinch-table-head-cell text="Logo" fit/>
          <sinch-table-head-cell text="Logo Wordmark" fit/>
        </sinch-table-row>
      </sinch-table-head>
      <sinch-table-body>
        <sinch-table-row>
          <sinch-table-cell>
            <sinch-logo-engage-icon colored size={24}/>
          </sinch-table-cell>
          <sinch-table-cell>
            <sinch-logo-engage-icon-wordmark colored size={24}/>
          </sinch-table-cell>
        </sinch-table-row>
        <sinch-table-row>
          <sinch-table-cell>
            <sinch-logo-email-on-acid-icon colored size={24}/>
          </sinch-table-cell>
          <sinch-table-cell>
            <sinch-logo-email-on-acid-icon-wordmark colored size={24}/>
          </sinch-table-cell>
        </sinch-table-row>
        <sinch-table-row>
          <sinch-table-cell>
            <sinch-logo-mailgun-icon colored size={24}/>
          </sinch-table-cell>
          <sinch-table-cell>
            <sinch-logo-mailgun-icon-wordmark colored size={24}/>
          </sinch-table-cell>
        </sinch-table-row>
        <sinch-table-row>
          <sinch-table-cell>
            <sinch-logo-mailjet-icon colored size={24}/>
          </sinch-table-cell>
          <sinch-table-cell>
            <sinch-logo-mailjet-icon-wordmark colored size={24}/>
          </sinch-table-cell>
        </sinch-table-row>
        <sinch-table-row>
          <sinch-table-cell>
            <sinch-logo-message-media-icon colored size={24}/>
          </sinch-table-cell>
          <sinch-table-cell>
            <sinch-logo-message-media-icon-wordmark colored size={24}/>
          </sinch-table-cell>
        </sinch-table-row>
        <sinch-table-row>
          <sinch-table-cell>
            <sinch-logo-simple-texting-icon colored size={24}/>
          </sinch-table-cell>
          <sinch-table-cell>
            <sinch-logo-simple-texting-icon-wordmark colored size={24}/>
          </sinch-table-cell>
        </sinch-table-row>
        <sinch-table-row>
          <sinch-table-cell>
            <sinch-logo-portal-engage-icon colored size={24}/>
          </sinch-table-cell>
          <sinch-table-cell>
            <sinch-logo-portal-engage-icon-wordmark colored size={24}/>
          </sinch-table-cell>
        </sinch-table-row>
        <sinch-table-row>
          <sinch-table-cell>
            <sinch-logo-portal-mailgun-icon colored size={24}/>
          </sinch-table-cell>
          <sinch-table-cell>
            <sinch-logo-portal-mailgun-icon-wordmark colored size={24}/>
          </sinch-table-cell>
        </sinch-table-row>
        <sinch-table-row>
          <sinch-table-cell>
            <sinch-logo-portal-mailjet-icon colored size={24}/>
          </sinch-table-cell>
          <sinch-table-cell>
            <sinch-logo-portal-mailjet-icon-wordmark colored size={24}/>
          </sinch-table-cell>
        </sinch-table-row>
        <sinch-table-row>
          <sinch-table-cell>
            <sinch-logo-portal-message-media-icon colored size={24}/>
          </sinch-table-cell>
          <sinch-table-cell>
            <sinch-logo-portal-message-media-icon-wordmark colored size={24}/>
          </sinch-table-cell>
        </sinch-table-row>
        <sinch-table-row>
          <sinch-table-cell>
            <sinch-logo-portal-build-icon colored size={24}/>
          </sinch-table-cell>
          <sinch-table-cell>
            <sinch-logo-portal-build-icon-wordmark colored size={24}/>
          </sinch-table-cell>
        </sinch-table-row>
        <sinch-table-row>
          <sinch-table-cell>
            <sinch-logo-portal-connect-icon colored size={24}/>
          </sinch-table-cell>
          <sinch-table-cell>
            <sinch-logo-portal-connect-icon-wordmark colored size={24}/>
          </sinch-table-cell>
        </sinch-table-row>
      </sinch-table-body>
    </sinch-table>
  )
}
