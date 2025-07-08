import '@nectary/labs/phone-preview'
import '@nectary/labs/phone-preview-rcs-chat'
import '@nectary/labs/phone-preview-rcs-chat-message'

export const RcsChatExample = () => (
  <sinch-labs-phone-preview>
    <sinch-labs-phone-preview-rcs-chat
      name="Sample Company"
      description="Your trusted business partner"
      logo="https://www.sinch.com/sites/default/files/favicon_0.ico"
    >
      <sinch-labs-phone-preview-rcs-chat-message
        slot="messages"
        text="Hello! How can I help you today?"
      />
      <sinch-labs-phone-preview-rcs-chat-message
        slot="messages"
        text="We're here to assist you with any questions."
      />
    </sinch-labs-phone-preview-rcs-chat>
  </sinch-labs-phone-preview>
)
