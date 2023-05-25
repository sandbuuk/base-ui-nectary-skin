import image from '../illustration-theming/image.png'

export const ThemingIllustration = () => (
  <div className="theming-wrapper">
    <img src={image} loading="lazy" style={{ maxWidth: '600px', height: 'auto' }}/>
  </div>
)
