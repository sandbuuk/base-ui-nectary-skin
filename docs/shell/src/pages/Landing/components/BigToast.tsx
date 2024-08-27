import './styles.css'
import '@nectary/assets/illustrations/lightbulb'
import '@nectary/components/button'
import '@nectary/components/title'
import '@nectary/components/icon'
import { useNavigate } from 'react-router-dom'
import { useNavigateLink } from '~/hooks'

export const BigToast = () => {
  const { to } = useNavigateLink('/intro')
  const navigate = useNavigate()

  return (
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
        on-click={() => navigate(to)}
      >
        <sinch-icon name="fa-arrow-up-right-from-square" slot="left-icon"/>
      </sinch-button>
    </div>
  )
}

