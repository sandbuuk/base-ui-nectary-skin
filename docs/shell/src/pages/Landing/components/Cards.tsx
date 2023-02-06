import './landing-page-grid'
import '@sinch-engage/nectary/grid-item'
import '@sinch-engage/nectary/card'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/link'
import '@sinch-engage/nectary-assets/logo/sinch-icon'
import '../logos/figma-icon'
import '../logos/gitlab-icon'

const figmaLink = 'https://www.figma.com/file/1jOZ4kiqo1BNWGsmEjsWrR/%F0%9F%90%9D-Nectary-%E2%80%93-Global-Library?node-id=116%3A2660&t=0WvLyVZROGUSIwDX-1'
const gitlabLink = 'https://gitlab.com/sinch/sinch-projects/applications/teams/nectary/components'
const brandLink = 'https://brand.sinch.com/'

const gitLabText = `Want to stay up-to-date on the latest developments in our design system? Check out our GitLab repository, where you can access the latest version of our codebase and collaborate with others on improving our design system.`
const figmaText = `Looking for the latest components and design assets for your project? Visit our Figma Library, where you can access the latest versions of all our design system assets, including UI components, colors, and typography. Happy designing! Typography`
const brandLibraryText = `Looking for the latest guidelines and assets for our company's brand and visual identity? Visit our Brand Hub, where you can access all the latest brand assets, including our logo, color palette, and typography guidelines. Typography`

export const Cards = () => (
  <landing-page-grid noPadding>
    <sinch-grid-item slot="item" xl={4} l={4} m={2} s={2}>
      <sinch-card slot="content" caption="Git lab" text={gitLabText}>
        <gitlab-icon size={24} slot="icon"/>
        <sinch-link
          slot="action"
          href={gitlabLink}
          text="Go to the Git lab reposirory"
          aria-label="Link"
          standalone
        />
      </sinch-card>
    </sinch-grid-item>
    <sinch-grid-item slot="item" xl={4} l={4} m={2} s={2}>
      <sinch-card
        slot="content"
        caption="Figma library"
        text={figmaText}
      >
        <figma-icon size={24} slot="icon"/>
        <sinch-link
          slot="action"
          href={figmaLink}
          text="Go to the figma library"
          aria-label="Link"
          standalone
        />
      </sinch-card>
    </sinch-grid-item>
    <sinch-grid-item slot="item" xl={4} l={4} m={2} s={2}>
      <sinch-card
        slot="content"
        caption="Brand library"
        text={brandLibraryText}
      >
        <sinch-logo-sinch-icon size={24} slot="icon"/>
        <sinch-link
          slot="action"
          href={brandLink}
          text="Go to the brand library"
          aria-label="Link"
          standalone
        />
      </sinch-card>
    </sinch-grid-item>
  </landing-page-grid>
)
