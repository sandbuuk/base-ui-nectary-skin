import { useArgs, useRef } from '@storybook/addons'
import type { TSinchIconElement, TSinchIconReact } from '@sinch-engage/nectary/icon/types'
import type { Story, Meta } from '@storybook/html'
import '@sinch-engage/nectary/theme.css'
import '@sinch-engage/nectary/icon/arrow-back-ios'
import '@sinch-engage/nectary/icon/arrow-forward-ios'
import '@sinch-engage/nectary/icon/cancel'
import '@sinch-engage/nectary/icon/chevron-left'
import '@sinch-engage/nectary/icon/chevron-right'
import '@sinch-engage/nectary/icon/close'
import '@sinch-engage/nectary/icon/east'
import '@sinch-engage/nectary/icon/west'
import '@sinch-engage/nectary/icon/expand-less'
import '@sinch-engage/nectary/icon/expand-more'
import '@sinch-engage/nectary/icon/help-outline'
import '@sinch-engage/nectary/icon/more-horiz'
import '@sinch-engage/nectary/icon/more-vert'
import '@sinch-engage/nectary/icon/north'
import '@sinch-engage/nectary/icon/north-east'
import '@sinch-engage/nectary/icon/north-west'
import '@sinch-engage/nectary/icon/open-in-new'
import '@sinch-engage/nectary/icon/arrow-downward'
import '@sinch-engage/nectary/icon/arrow-upward'
import '@sinch-engage/nectary/icon/arrow-back'
import '@sinch-engage/nectary/icon/arrow-forward'
import '@sinch-engage/nectary/icon/keyboard-arrow-down'
import '@sinch-engage/nectary/icon/keyboard-arrow-left'
import '@sinch-engage/nectary/icon/keyboard-arrow-right'
import '@sinch-engage/nectary/icon/keyboard-arrow-up'
import '@sinch-engage/nectary/icon/south'
import '@sinch-engage/nectary/icon/south-east'
import '@sinch-engage/nectary/icon/south-west'
import '@sinch-engage/nectary/icon/add-alert'
import '@sinch-engage/nectary/icon/auto-delete'
import '@sinch-engage/nectary/icon/error'
import '@sinch-engage/nectary/icon/error-outline'
import '@sinch-engage/nectary/icon/notification-important'
import '@sinch-engage/nectary/icon/warning'
import '@sinch-engage/nectary/icon/warning-amber'
import '@sinch-engage/nectary/icon/attach-email'
import '@sinch-engage/nectary/icon/attachment'
import '@sinch-engage/nectary/icon/cloud'
import '@sinch-engage/nectary/icon/cloud-circle'
import '@sinch-engage/nectary/icon/cloud-done'
import '@sinch-engage/nectary/icon/cloud-download'
import '@sinch-engage/nectary/icon/cloud-off'
import '@sinch-engage/nectary/icon/cloud-queue'
import '@sinch-engage/nectary/icon/cloud-upload'
import '@sinch-engage/nectary/icon/create-new-folder'
import '@sinch-engage/nectary/icon/download'
import '@sinch-engage/nectary/icon/download-done'
import '@sinch-engage/nectary/icon/folder'
import '@sinch-engage/nectary/icon/folder-open'
import '@sinch-engage/nectary/icon/folder-shared'
import '@sinch-engage/nectary/icon/request-quote'
import '@sinch-engage/nectary/icon/rule-folder'
import '@sinch-engage/nectary/icon/snippet-folder'
import '@sinch-engage/nectary/icon/text-snippet'
import '@sinch-engage/nectary/icon/topic'
import '@sinch-engage/nectary/icon/upload'
import '@sinch-engage/nectary/icon/app-settings-alt'
import '@sinch-engage/nectary/icon/apps'
import '@sinch-engage/nectary/icon/arrow-drop-down'
import '@sinch-engage/nectary/icon/arrow-drop-down-circle'
import '@sinch-engage/nectary/icon/arrow-drop-up'
import '@sinch-engage/nectary/icon/arrow-left'
import '@sinch-engage/nectary/icon/arrow-right'
import '@sinch-engage/nectary/icon/campaign'
import '@sinch-engage/nectary/icon/check'
import '@sinch-engage/nectary/icon/double-arrow'
import '@sinch-engage/nectary/icon/first-page'
import '@sinch-engage/nectary/icon/fullscreen'
import '@sinch-engage/nectary/icon/fullscreen-exit'
import '@sinch-engage/nectary/icon/home-work'
import '@sinch-engage/nectary/icon/last-page'
import '@sinch-engage/nectary/icon/legend-toggle'
import '@sinch-engage/nectary/icon/menu'
import '@sinch-engage/nectary/icon/menu-open'
import '@sinch-engage/nectary/icon/payments'
import '@sinch-engage/nectary/icon/refresh'
import '@sinch-engage/nectary/icon/subdirectory-arrow-left'
import '@sinch-engage/nectary/icon/subdirectory-arrow-right'
import '@sinch-engage/nectary/icon/switch-left'
import '@sinch-engage/nectary/icon/switch-right'
import '@sinch-engage/nectary/icon/unfold-less'
import '@sinch-engage/nectary/icon/unfold-more'

const iconNames = [
  'sinch-icon-cancel',
  'sinch-icon-close',
  'sinch-icon-open-in-new',
  'sinch-icon-help-outline',
  'sinch-icon-more-horiz',
  'sinch-icon-more-vert',
  'sinch-icon-arrow-downward',
  'sinch-icon-arrow-back',
  'sinch-icon-arrow-forward',
  'sinch-icon-arrow-upward',
  'sinch-icon-keyboard-arrow-down',
  'sinch-icon-keyboard-arrow-left',
  'sinch-icon-keyboard-arrow-right',
  'sinch-icon-keyboard-arrow-up',
  'sinch-icon-arrow-back-ios',
  'sinch-icon-arrow-forward-ios',
  'sinch-icon-chevron-left',
  'sinch-icon-chevron-right',
  'sinch-icon-expand-less',
  'sinch-icon-expand-more',
  'sinch-icon-north',
  'sinch-icon-north-east',
  'sinch-icon-east',
  'sinch-icon-south-east',
  'sinch-icon-south',
  'sinch-icon-south-west',
  'sinch-icon-west',
  'sinch-icon-north-west',
  /* Alert */
  'sinch-icon-add-alert',
  'sinch-icon-auto-delete',
  'sinch-icon-error',
  'sinch-icon-error-outline',
  'sinch-icon-notification-important',
  'sinch-icon-warning',
  'sinch-icon-warning-amber',
  /* File */
  'sinch-icon-attach-email',
  'sinch-icon-attachment',
  'sinch-icon-cloud',
  'sinch-icon-cloud-circle',
  'sinch-icon-cloud-done',
  'sinch-icon-cloud-download',
  'sinch-icon-cloud-off',
  'sinch-icon-cloud-queue',
  'sinch-icon-cloud-upload',
  'sinch-icon-create-new-folder',
  'sinch-icon-download',
  'sinch-icon-download-done',
  'sinch-icon-folder',
  'sinch-icon-folder-open',
  'sinch-icon-folder-shared',
  'sinch-icon-request-quote',
  'sinch-icon-rule-folder',
  'sinch-icon-snippet-folder',
  'sinch-icon-text-snippet',
  'sinch-icon-topic',
  'sinch-icon-upload',
  /* Navigation */
  'sinch-icon-app-settings-alt',
  'sinch-icon-apps',
  'sinch-icon-arrow-drop-down',
  'sinch-icon-arrow-drop-down-circle',
  'sinch-icon-arrow-drop-up',
  'sinch-icon-arrow-left',
  'sinch-icon-arrow-right',
  'sinch-icon-campaign',
  'sinch-icon-check',
  'sinch-icon-double-arrow',
  'sinch-icon-first-page',
  'sinch-icon-fullscreen',
  'sinch-icon-fullscreen-exit',
  'sinch-icon-home-work',
  'sinch-icon-last-page',
  'sinch-icon-legend-toggle',
  'sinch-icon-menu',
  'sinch-icon-menu-open',
  'sinch-icon-payments',
  'sinch-icon-refresh',
  'sinch-icon-subdirectory-arrow-left',
  'sinch-icon-subdirectory-arrow-right',
  'sinch-icon-switch-left',
  'sinch-icon-switch-right',
  'sinch-icon-unfold-less',
  'sinch-icon-unfold-more',
]

export default {
  title: 'Components/Icons',
  argTypes: {
    size: {
      control: { type: 'range', min: 12, max: 64, step: 4 },
    },
  },
} as Meta

const Template = (): Story<TSinchIconReact> => () => {
  const [{ size }] = useArgs()
  const wrapperRef = useRef<Element | null>(null)
  const iconsRef = useRef<TSinchIconElement[] | null>(null)

  if (wrapperRef.current === null) {
    wrapperRef.current = document.createElement('div')
    iconsRef.current = iconNames.map((name) => document.createElement(name) as TSinchIconElement)

    iconsRef.current.forEach((icon) => wrapperRef.current!.appendChild(icon))
  }

  iconsRef.current!.forEach((icon) => {
    icon.size = size
  })

  return wrapperRef.current
}

export const Icons = Template()

Icons.args = {
  size: 16,
}

Icons.parameters = {
  docs: {
    source: {
      code: `<>\n${iconNames.map((ic) => `  <${ic}></${ic}>`).join('\n')}\n</>`,
    },
  },
}

