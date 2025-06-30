import '@nectary/labs/phone-preview'
import '@nectary/labs/phone-preview-rcs-channel'
import '@nectary/labs/phone-preview-rcs-channel-info-option'

export const RcsChannelExample = () => (
  <sinch-labs-phone-preview>
    <sinch-labs-phone-preview-rcs-channel
      name="Sample Company"
      description="Your trusted business partner"
      color="#007bff"
    >
      <sinch-labs-phone-preview-rcs-channel-info-option
        slot="contacts"
        type="phone"
        label="Customer Service"
        contact="+1-555-0123"
      />
      <sinch-labs-phone-preview-rcs-channel-info-option
        slot="contacts"
        type="website"
        label="Main Website"
        contact="https://example.com"
      />
      <sinch-labs-phone-preview-rcs-channel-info-option
        slot="contacts"
        type="email"
        label="Support"
        contact="support@example.com"
      />
    </sinch-labs-phone-preview-rcs-channel>
  </sinch-labs-phone-preview>
)
