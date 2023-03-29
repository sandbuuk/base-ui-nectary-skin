import './styles.css'
import '@sinch-engage/nectary-assets/illustrations/lightbulb'
import '@sinch-engage/nectary-assets/icons/open-in-new'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/title'

export const BigToast = () => (
  <div className="big-toast">
    <sinch-illustration-lightbulb size={40}/>
    <div className="big-toast-title">
      <sinch-title type="m" level="3" text="Get started with us!"/>
    </div>
    <sinch-button
      text="Start now"
      aria-label="Click"
      type="cta-secondary"
      size="m"
      on-click={() => console.log('click')}
    >
      <sinch-icon-open-in-new slot="left-icon"/>
    </sinch-button>
  </div>
)
