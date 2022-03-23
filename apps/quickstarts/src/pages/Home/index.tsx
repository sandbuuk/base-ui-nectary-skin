import { BoxBanner } from '../../components/BoxBanner'
import { MainHeading } from '../../components/MainHeading'
import { QuickStartsCards } from '../../quickstarts/QuickStartCards'
import homeImage from './person.png'

export const Home = () => (
  <div>
    <MainHeading>Quick Starts</MainHeading>
    <BoxBanner>
      {/* todo: style properly */}
      <img style={{ float: 'right', height: '92px' }} src={homeImage}/>
      <h3>Pre-built solutions for your business</h3>
      <p>Offer conversational experiences with ready-to-use solutions</p>
      <div style={{ clear: 'right' }}/>
    </BoxBanner>
    <QuickStartsCards/>
  </div>
)
