import { SpacingY } from './SpacingY'
import './landing-page-grid'
import '@nectary/assets/illustrations/on-a-cloud'
import '@nectary/components/grid-item'
import '@nectary/components/title'
import '@nectary/components/text'

const introductionText: string = 'With Nectary, you can easily build consistent and high-quality interfaces that are both functional and aesthetically pleasing. Our modular approach allows for maximum composability, so you can create unique and personalized designs without sacrificing consistency or quality.'

export const Introduction = () => (
  <>
    <landing-page-grid noPadding>
      <sinch-grid-item slot="item" xl={7} l={7} m={4} s={2}>
        <div slot="content">
          <SpacingY height={35}/>
          <sinch-title type="xl" level="1" text="Meet Nectary,"/>
          <sinch-title type="xl" level="1" text="Sinch’s design system"/>
          <SpacingY height={44}/>
          <sinch-text type="m">{introductionText}</sinch-text>
        </div>
      </sinch-grid-item>
      <sinch-grid-item slot="item" xl={5} l={5} m={4} s={2}>
        <div slot="content">
          <SpacingY height={40}/>
          <sinch-illustration-on-a-cloud halign="right" size={222}/>
        </div>
      </sinch-grid-item>
    </landing-page-grid>
  </>
)

