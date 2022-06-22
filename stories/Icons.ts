import { useRef } from '@storybook/addons'
import type { TSinchIconElement, TSinchIconReact } from '@sinch-engage/nectary/icons/types'
import type { Story, Meta } from '@storybook/html'
import '@sinch-engage/nectary/icons/arrow-back-ios'
import '@sinch-engage/nectary/icons/arrow-forward-ios'
import '@sinch-engage/nectary/icons/cancel'
import '@sinch-engage/nectary/icons/chevron-left'
import '@sinch-engage/nectary/icons/chevron-right'
import '@sinch-engage/nectary/icons/close'
import '@sinch-engage/nectary/icons/east'
import '@sinch-engage/nectary/icons/west'
import '@sinch-engage/nectary/icons/expand-less'
import '@sinch-engage/nectary/icons/expand-more'
import '@sinch-engage/nectary/icons/help-outline'
import '@sinch-engage/nectary/icons/more-horiz'
import '@sinch-engage/nectary/icons/more-vert'
import '@sinch-engage/nectary/icons/north'
import '@sinch-engage/nectary/icons/north-east'
import '@sinch-engage/nectary/icons/north-west'
import '@sinch-engage/nectary/icons/open-in-new'
import '@sinch-engage/nectary/icons/arrow-downward'
import '@sinch-engage/nectary/icons/arrow-upward'
import '@sinch-engage/nectary/icons/arrow-back'
import '@sinch-engage/nectary/icons/arrow-forward'
import '@sinch-engage/nectary/icons/keyboard-arrow-down'
import '@sinch-engage/nectary/icons/keyboard-arrow-left'
import '@sinch-engage/nectary/icons/keyboard-arrow-right'
import '@sinch-engage/nectary/icons/keyboard-arrow-up'
import '@sinch-engage/nectary/icons/south'
import '@sinch-engage/nectary/icons/south-east'
import '@sinch-engage/nectary/icons/south-west'
import '@sinch-engage/nectary/icons/add-alert'
import '@sinch-engage/nectary/icons/auto-delete'
import '@sinch-engage/nectary/icons/error'
import '@sinch-engage/nectary/icons/error-outline'
import '@sinch-engage/nectary/icons/notification-important'
import '@sinch-engage/nectary/icons/warning'
import '@sinch-engage/nectary/icons/warning-amber'
import '@sinch-engage/nectary/icons/attach-email'
import '@sinch-engage/nectary/icons/attachment'
import '@sinch-engage/nectary/icons/cloud'
import '@sinch-engage/nectary/icons/cloud-circle'
import '@sinch-engage/nectary/icons/cloud-done'
import '@sinch-engage/nectary/icons/cloud-download'
import '@sinch-engage/nectary/icons/cloud-off'
import '@sinch-engage/nectary/icons/cloud-queue'
import '@sinch-engage/nectary/icons/cloud-upload'
import '@sinch-engage/nectary/icons/create-new-folder'
import '@sinch-engage/nectary/icons/download'
import '@sinch-engage/nectary/icons/download-done'
import '@sinch-engage/nectary/icons/folder'
import '@sinch-engage/nectary/icons/folder-open'
import '@sinch-engage/nectary/icons/folder-shared'
import '@sinch-engage/nectary/icons/request-quote'
import '@sinch-engage/nectary/icons/rule-folder'
import '@sinch-engage/nectary/icons/snippet-folder'
import '@sinch-engage/nectary/icons/text-snippet'
import '@sinch-engage/nectary/icons/topic'
import '@sinch-engage/nectary/icons/upload'
import '@sinch-engage/nectary/icons/app-settings-alt'
import '@sinch-engage/nectary/icons/apps'
import '@sinch-engage/nectary/icons/arrow-drop-down'
import '@sinch-engage/nectary/icons/arrow-drop-down-circle'
import '@sinch-engage/nectary/icons/arrow-drop-up'
import '@sinch-engage/nectary/icons/arrow-left'
import '@sinch-engage/nectary/icons/arrow-right'
import '@sinch-engage/nectary/icons/campaign'
import '@sinch-engage/nectary/icons/check'
import '@sinch-engage/nectary/icons/double-arrow'
import '@sinch-engage/nectary/icons/first-page'
import '@sinch-engage/nectary/icons/fullscreen'
import '@sinch-engage/nectary/icons/fullscreen-exit'
import '@sinch-engage/nectary/icons/home-work'
import '@sinch-engage/nectary/icons/last-page'
import '@sinch-engage/nectary/icons/legend-toggle'
import '@sinch-engage/nectary/icons/menu'
import '@sinch-engage/nectary/icons/menu-open'
import '@sinch-engage/nectary/icons/payments'
import '@sinch-engage/nectary/icons/refresh'
import '@sinch-engage/nectary/icons/subdirectory-arrow-left'
import '@sinch-engage/nectary/icons/subdirectory-arrow-right'
import '@sinch-engage/nectary/icons/switch-left'
import '@sinch-engage/nectary/icons/switch-right'
import '@sinch-engage/nectary/icons/unfold-less'
import '@sinch-engage/nectary/icons/unfold-more'
import '@sinch-engage/nectary/icons/filter-list'
import '@sinch-engage/nectary/icons/assignment'
import '@sinch-engage/nectary/icons/access-time'
import '@sinch-engage/nectary/icons/notes'
import '@sinch-engage/nectary/icons/alt-route'
import '@sinch-engage/nectary/icons/play-circle-outline'
import '@sinch-engage/nectary/icons/pause-circle-outline'
import '@sinch-engage/nectary/icons/check-circle-outline'
import '@sinch-engage/nectary/icons/send'
import '@sinch-engage/nectary/icons/add-comment'
import '@sinch-engage/nectary/icons/star-outline'
import '@sinch-engage/nectary/icons/undo'
import '@sinch-engage/nectary/icons/mark-chat-unread'
import '@sinch-engage/nectary/icons/comment'
import '@sinch-engage/nectary/icons/smart-toy'
import '@sinch-engage/nectary/icons/volume-up'
import '@sinch-engage/nectary/icons/volume-off'
import '@sinch-engage/nectary/icons/update'
import '@sinch-engage/nectary/icons/swap-vert'
import '@sinch-engage/nectary/icons/stop'
import '@sinch-engage/nectary/icons/settings'
import '@sinch-engage/nectary/icons/search'
import '@sinch-engage/nectary/icons/notifications-none'
import '@sinch-engage/nectary/icons/more-time'
import '@sinch-engage/nectary/icons/mic-none'
import '@sinch-engage/nectary/icons/mark-chat-read'
import '@sinch-engage/nectary/icons/insert-emoticon'
import '@sinch-engage/nectary/icons/done-all'
import '@sinch-engage/nectary/icons/create'
import '@sinch-engage/nectary/icons/chat'
import '@sinch-engage/nectary/icons/reply'
import '@sinch-engage/nectary/icons/local-offer'
import '@sinch-engage/nectary/icons/info-outline'
import '@sinch-engage/nectary/icons/history'
import '@sinch-engage/nectary/icons/forum'
import '@sinch-engage/nectary/icons/chat-bubble-outline'
import '@sinch-engage/nectary/icons/star'
import '@sinch-engage/nectary/icons/wrap-text'
import '@sinch-engage/nectary/icons/vertical-align-top'
import '@sinch-engage/nectary/icons/vertical-align-center'
import '@sinch-engage/nectary/icons/vertical-align-bottom'
import '@sinch-engage/nectary/icons/title'
import '@sinch-engage/nectary/icons/text-fields'
import '@sinch-engage/nectary/icons/table-rows'
import '@sinch-engage/nectary/icons/table-chart'
import '@sinch-engage/nectary/icons/superscript'
import '@sinch-engage/nectary/icons/subscript'
import '@sinch-engage/nectary/icons/strikethrough-s'
import '@sinch-engage/nectary/icons/stacked-line-chart'
import '@sinch-engage/nectary/icons/space-bar'
import '@sinch-engage/nectary/icons/show-chart'
import '@sinch-engage/nectary/icons/short-text'
import '@sinch-engage/nectary/icons/score'
import '@sinch-engage/nectary/icons/scatter-plot'
import '@sinch-engage/nectary/icons/publish'
import '@sinch-engage/nectary/icons/post-add'
import '@sinch-engage/nectary/icons/pie-chart-outline'
import '@sinch-engage/nectary/icons/pie-chart'
import '@sinch-engage/nectary/icons/multiline-chart'
import '@sinch-engage/nectary/icons/money-off-csred'
import '@sinch-engage/nectary/icons/money-off'
import '@sinch-engage/nectary/icons/monetization-on'
import '@sinch-engage/nectary/icons/mode-comment'
import '@sinch-engage/nectary/icons/mode'
import '@sinch-engage/nectary/icons/merge-type'
import '@sinch-engage/nectary/icons/linear-scale'
import '@sinch-engage/nectary/icons/insert-photo'
import '@sinch-engage/nectary/icons/insert-link'
import '@sinch-engage/nectary/icons/insert-invitation'
import '@sinch-engage/nectary/icons/insert-drive-file'
import '@sinch-engage/nectary/icons/insert-comment'
import '@sinch-engage/nectary/icons/insert-chart-outlined'
import '@sinch-engage/nectary/icons/insert-chart'
import '@sinch-engage/nectary/icons/horizontal-rule'
import '@sinch-engage/nectary/icons/highlight'
import '@sinch-engage/nectary/icons/height'
import '@sinch-engage/nectary/icons/functions'
import '@sinch-engage/nectary/icons/format-underlined'
import '@sinch-engage/nectary/icons/format-textdirection-r-to-l'
import '@sinch-engage/nectary/icons/format-textdirection-l-to-r'
import '@sinch-engage/nectary/icons/format-strikethrough'
import '@sinch-engage/nectary/icons/format-size'
import '@sinch-engage/nectary/icons/format-shapes'
import '@sinch-engage/nectary/icons/format-quote'
import '@sinch-engage/nectary/icons/format-paint'
import '@sinch-engage/nectary/icons/format-list-numbered-rtl'
import '@sinch-engage/nectary/icons/format-list-numbered'
import '@sinch-engage/nectary/icons/format-list-bulleted'
import '@sinch-engage/nectary/icons/format-line-spacing'
import '@sinch-engage/nectary/icons/format-italic'
import '@sinch-engage/nectary/icons/format-indent-increase'
import '@sinch-engage/nectary/icons/format-indent-decrease'
import '@sinch-engage/nectary/icons/format-color-reset'
import '@sinch-engage/nectary/icons/format-clear'
import '@sinch-engage/nectary/icons/format-bold'
import '@sinch-engage/nectary/icons/format-align-right'
import '@sinch-engage/nectary/icons/format-align-left'
import '@sinch-engage/nectary/icons/format-align-justify'
import '@sinch-engage/nectary/icons/format-align-center'
import '@sinch-engage/nectary/icons/drag-handle'
import '@sinch-engage/nectary/icons/bubble-chart'
import '@sinch-engage/nectary/icons/border-vertical'
import '@sinch-engage/nectary/icons/border-top'
import '@sinch-engage/nectary/icons/border-style'
import '@sinch-engage/nectary/icons/border-right'
import '@sinch-engage/nectary/icons/border-outer'
import '@sinch-engage/nectary/icons/border-left'
import '@sinch-engage/nectary/icons/border-inner'
import '@sinch-engage/nectary/icons/border-horizontal'
import '@sinch-engage/nectary/icons/border-clear'
import '@sinch-engage/nectary/icons/border-bottom'
import '@sinch-engage/nectary/icons/border-all'
import '@sinch-engage/nectary/icons/bar-chart'
import '@sinch-engage/nectary/icons/attach-money'
import '@sinch-engage/nectary/icons/attach-file'
// {{icon import}}

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
  /* Content */
  'sinch-icon-filter-list',
  'sinch-icon-send',
  'sinch-icon-undo',
  /* Action */
  'sinch-icon-assignment',
  'sinch-icon-check-circle-outline',
  /* Device */
  'sinch-icon-access-time',
  /* Hardware */
  'sinch-icon-smart-toy',
  /* Editor */
  'sinch-icon-notes',
  'sinch-icon-add-comment',
  'sinch-icon-wrap-text',
  'sinch-icon-vertical-align-top',
  'sinch-icon-vertical-align-center',
  'sinch-icon-vertical-align-bottom',
  'sinch-icon-title',
  'sinch-icon-text-fields',
  'sinch-icon-table-rows',
  'sinch-icon-table-chart',
  'sinch-icon-superscript',
  'sinch-icon-subscript',
  'sinch-icon-strikethrough-s',
  'sinch-icon-stacked-line-chart',
  'sinch-icon-space-bar',
  'sinch-icon-show-chart',
  'sinch-icon-short-text',
  'sinch-icon-score',
  'sinch-icon-scatter-plot',
  'sinch-icon-publish',
  'sinch-icon-post-add',
  'sinch-icon-pie-chart-outline',
  'sinch-icon-pie-chart',
  'sinch-icon-multiline-chart',
  'sinch-icon-money-off-csred',
  'sinch-icon-money-off',
  'sinch-icon-monetization-on',
  'sinch-icon-mode-comment',
  'sinch-icon-mode',
  'sinch-icon-merge-type',
  'sinch-icon-linear-scale',
  'sinch-icon-insert-photo',
  'sinch-icon-insert-link',
  'sinch-icon-insert-invitation',
  'sinch-icon-insert-drive-file',
  'sinch-icon-insert-comment',
  'sinch-icon-insert-chart-outlined',
  'sinch-icon-insert-chart',
  'sinch-icon-horizontal-rule',
  'sinch-icon-highlight',
  'sinch-icon-height',
  'sinch-icon-functions',
  'sinch-icon-format-underlined',
  'sinch-icon-format-textdirection-r-to-l',
  'sinch-icon-format-textdirection-l-to-r',
  'sinch-icon-format-strikethrough',
  'sinch-icon-format-size',
  'sinch-icon-format-shapes',
  'sinch-icon-format-quote',
  'sinch-icon-format-paint',
  'sinch-icon-format-list-numbered-rtl',
  'sinch-icon-format-list-numbered',
  'sinch-icon-format-list-bulleted',
  'sinch-icon-format-line-spacing',
  'sinch-icon-format-italic',
  'sinch-icon-format-indent-increase',
  'sinch-icon-format-indent-decrease',
  'sinch-icon-format-color-reset',
  'sinch-icon-format-clear',
  'sinch-icon-format-bold',
  'sinch-icon-format-align-right',
  'sinch-icon-format-align-left',
  'sinch-icon-format-align-justify',
  'sinch-icon-format-align-center',
  'sinch-icon-drag-handle',
  'sinch-icon-bubble-chart',
  'sinch-icon-border-vertical',
  'sinch-icon-border-top',
  'sinch-icon-border-style',
  'sinch-icon-border-right',
  'sinch-icon-border-outer',
  'sinch-icon-border-left',
  'sinch-icon-border-inner',
  'sinch-icon-border-horizontal',
  'sinch-icon-border-clear',
  'sinch-icon-border-bottom',
  'sinch-icon-border-all',
  'sinch-icon-bar-chart',
  'sinch-icon-attach-money',
  'sinch-icon-attach-file',
  'sinch-icon-update',
  'sinch-icon-swap-vert',
  'sinch-icon-settings',
  'sinch-icon-search',
  'sinch-icon-notifications-none',
  'sinch-icon-more-time',
  'sinch-icon-mic-none',
  'sinch-icon-mark-chat-read',
  'sinch-icon-insert-emoticon',
  'sinch-icon-done-all',
  'sinch-icon-create',
  'sinch-icon-reply',
  'sinch-icon-local-offer',
  'sinch-icon-info-outline',
  'sinch-icon-history',
  'sinch-icon-forum',
  'sinch-icon-chat-bubble-outline',
  /* Maps */
  'sinch-icon-alt-route',
  /* Audio & Video */
  'sinch-icon-play-circle-outline',
  'sinch-icon-pause-circle-outline',
  'sinch-icon-volume-up',
  'sinch-icon-volume-off',
  'sinch-icon-stop',
  /* Toggle */
  'sinch-icon-star-outline',
  'sinch-icon-star',
  /* Communication */
  'sinch-icon-mark-chat-unread',
  'sinch-icon-comment',
  'sinch-icon-chat',
  // {{icon name}}
]

export default {
  title: 'Components/Icons',
  argTypes: {},
} as Meta

const Template = (): Story<TSinchIconReact> => () => {
  const wrapperRef = useRef<Element | null>(null)

  if (wrapperRef.current === null) {
    wrapperRef.current = document.createElement('div')

    const $wrapper = wrapperRef.current as HTMLElement

    $wrapper.style.display = 'flex'
    $wrapper.style.flexWrap = 'wrap'
    $wrapper.style.gap = '16px'

    const $icons = iconNames.map((name) => {
      const $icon = document.createElement(name) as TSinchIconElement

      $icon.setAttribute('title', name)

      return $icon
    })

    $wrapper.append(...$icons)
  }

  return wrapperRef.current
}

export const Icons = Template()

Icons.parameters = {
  docs: {
    source: {
      code: `<>\n${iconNames.map((ic) => `  <${ic}></${ic}>`).join('\n')}\n</>`,
    },
  },
}

