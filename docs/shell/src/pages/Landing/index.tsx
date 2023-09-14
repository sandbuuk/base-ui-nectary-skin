import { BigToast, Cards, Cat, Introduction, SpacingY } from './components'
import type { FC } from 'react'
import '@nectary/components/text'
import '@nectary/components/title'
import './styles.css'

const nectaryDesignSystem = `The nectary design system offers a number of resources to help designers and developers work with the system. These include a Figma library, which contains design components and templates, as well as a git lab repository with the code for the system. The brand library provides information on the sinch brand, including its tone of voice, logo usage, and color palette.`

export const LandingPage: FC = () => (
  <div id="landing-page-content-wrapper">
    <div id="landing-page-content">
      <SpacingY height={25}/>
      <Introduction/>
      <SpacingY height={85}/>
      <div className="content-wrapper" style={{ position: 'relative' }}>
        <BigToast/>
        <Cat/>
        <SpacingY height={76}/>
      </div>
      <div className="content-wrapper">
        <sinch-title type="l" level="2" text="Resources"/>
        <SpacingY height={24}/>
        <sinch-text type="m">
          {nectaryDesignSystem}
        </sinch-text>
      </div>
      <SpacingY height={24}/>
      <Cards/>
    </div>
  </div>
)
