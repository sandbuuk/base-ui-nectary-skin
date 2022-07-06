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
import '@sinch-engage/nectary/icons/where-to-vote'
import '@sinch-engage/nectary/icons/weekend'
import '@sinch-engage/nectary/icons/waves'
import '@sinch-engage/nectary/icons/unarchive'
import '@sinch-engage/nectary/icons/text-format'
import '@sinch-engage/nectary/icons/square-foot'
import '@sinch-engage/nectary/icons/sort'
import '@sinch-engage/nectary/icons/select-all'
import '@sinch-engage/nectary/icons/save-alt'
import '@sinch-engage/nectary/icons/save'
import '@sinch-engage/nectary/icons/report-off'
import '@sinch-engage/nectary/icons/report-outline'
import '@sinch-engage/nectary/icons/report'
import '@sinch-engage/nectary/icons/reply-all'
import '@sinch-engage/nectary/icons/remove-circle-outline'
import '@sinch-engage/nectary/icons/remove-circle'
import '@sinch-engage/nectary/icons/remove'
import '@sinch-engage/nectary/icons/redo'
import '@sinch-engage/nectary/icons/push-pin'
import '@sinch-engage/nectary/icons/policy'
import '@sinch-engage/nectary/icons/outlined-flag'
import '@sinch-engage/nectary/icons/next-week'
import '@sinch-engage/nectary/icons/move-to-inbox'
import '@sinch-engage/nectary/icons/markunread'
import '@sinch-engage/nectary/icons/mail'
import '@sinch-engage/nectary/icons/low-priority'
import '@sinch-engage/nectary/icons/link-off'
import '@sinch-engage/nectary/icons/link'
import '@sinch-engage/nectary/icons/insights'
import '@sinch-engage/nectary/icons/inbox'
import '@sinch-engage/nectary/icons/how-to-vote'
import '@sinch-engage/nectary/icons/how-to-reg'
import '@sinch-engage/nectary/icons/gesture'
import '@sinch-engage/nectary/icons/forward'
import '@sinch-engage/nectary/icons/font-download'
import '@sinch-engage/nectary/icons/flag'
import '@sinch-engage/nectary/icons/file-copy'
import '@sinch-engage/nectary/icons/dynamic-feed'
import '@sinch-engage/nectary/icons/drafts'
import '@sinch-engage/nectary/icons/delete-sweep'
import '@sinch-engage/nectary/icons/content-paste'
import '@sinch-engage/nectary/icons/content-cut'
import '@sinch-engage/nectary/icons/content-copy'
import '@sinch-engage/nectary/icons/clear'
import '@sinch-engage/nectary/icons/calculate'
import '@sinch-engage/nectary/icons/block'
import '@sinch-engage/nectary/icons/biotech'
import '@sinch-engage/nectary/icons/ballot'
import '@sinch-engage/nectary/icons/backspace'
import '@sinch-engage/nectary/icons/attribution'
import '@sinch-engage/nectary/icons/archive'
import '@sinch-engage/nectary/icons/amp-stories'
import '@sinch-engage/nectary/icons/add-circle-outline'
import '@sinch-engage/nectary/icons/add-circle'
import '@sinch-engage/nectary/icons/add-box'
import '@sinch-engage/nectary/icons/add'
import '@sinch-engage/nectary/icons/zoom-out'
import '@sinch-engage/nectary/icons/zoom-in'
import '@sinch-engage/nectary/icons/youtube-searched-for'
import '@sinch-engage/nectary/icons/wysiwyg'
import '@sinch-engage/nectary/icons/work-outline'
import '@sinch-engage/nectary/icons/work-off'
import '@sinch-engage/nectary/icons/work'
import '@sinch-engage/nectary/icons/wifi-protected-setup'
import '@sinch-engage/nectary/icons/watch-later'
import '@sinch-engage/nectary/icons/voice-over-off'
import '@sinch-engage/nectary/icons/visibility-off'
import '@sinch-engage/nectary/icons/visibility'
import '@sinch-engage/nectary/icons/view-week'
import '@sinch-engage/nectary/icons/view-stream'
import '@sinch-engage/nectary/icons/view-sidebar'
import '@sinch-engage/nectary/icons/view-quilt'
import '@sinch-engage/nectary/icons/view-module'
import '@sinch-engage/nectary/icons/view-list'
import '@sinch-engage/nectary/icons/view-headline'
import '@sinch-engage/nectary/icons/view-day'
import '@sinch-engage/nectary/icons/view-column'
import '@sinch-engage/nectary/icons/view-carousel'
import '@sinch-engage/nectary/icons/view-array'
import '@sinch-engage/nectary/icons/view-agenda'
import '@sinch-engage/nectary/icons/vertical-split'
import '@sinch-engage/nectary/icons/verified-user'
import '@sinch-engage/nectary/icons/verified'
import '@sinch-engage/nectary/icons/upgrade'
import '@sinch-engage/nectary/icons/unpublished'
import '@sinch-engage/nectary/icons/turned-in-not'
import '@sinch-engage/nectary/icons/turned-in'
import '@sinch-engage/nectary/icons/trending-up'
import '@sinch-engage/nectary/icons/trending-flat'
import '@sinch-engage/nectary/icons/trending-down'
import '@sinch-engage/nectary/icons/translate'
import '@sinch-engage/nectary/icons/track-changes'
import '@sinch-engage/nectary/icons/tour'
import '@sinch-engage/nectary/icons/touch-app'
import '@sinch-engage/nectary/icons/toll'
import '@sinch-engage/nectary/icons/today'
import '@sinch-engage/nectary/icons/toc'
import '@sinch-engage/nectary/icons/timeline'
import '@sinch-engage/nectary/icons/thumbs-up-down'
import '@sinch-engage/nectary/icons/thumb-up'
import '@sinch-engage/nectary/icons/thumb-down'
import '@sinch-engage/nectary/icons/theaters'
import '@sinch-engage/nectary/icons/text-rotation-none'
import '@sinch-engage/nectary/icons/text-rotation-down'
import '@sinch-engage/nectary/icons/text-rotation-angleup'
import '@sinch-engage/nectary/icons/text-rotation-angledown'
import '@sinch-engage/nectary/icons/text-rotate-vertical'
import '@sinch-engage/nectary/icons/text-rotate-up'
import '@sinch-engage/nectary/icons/table-view'
import '@sinch-engage/nectary/icons/tab-unselected'
import '@sinch-engage/nectary/icons/tab'
import '@sinch-engage/nectary/icons/system-update-alt'
import '@sinch-engage/nectary/icons/sync-alt'
import '@sinch-engage/nectary/icons/swap-vertical-circle'
import '@sinch-engage/nectary/icons/swap-horizontal-circle'
import '@sinch-engage/nectary/icons/swap-horiz'
import '@sinch-engage/nectary/icons/support'
import '@sinch-engage/nectary/icons/supervisor-account'
import '@sinch-engage/nectary/icons/supervised-user-circle'
import '@sinch-engage/nectary/icons/subtitles-off'
import '@sinch-engage/nectary/icons/subject'
import '@sinch-engage/nectary/icons/store'
import '@sinch-engage/nectary/icons/sticky-note-2'
import '@sinch-engage/nectary/icons/stars'
import '@sinch-engage/nectary/icons/star-rate'
import '@sinch-engage/nectary/icons/spellcheck'
import '@sinch-engage/nectary/icons/speaker-notes-off'
import '@sinch-engage/nectary/icons/speaker-notes'
import '@sinch-engage/nectary/icons/source'
import '@sinch-engage/nectary/icons/smart-button'
import '@sinch-engage/nectary/icons/shopping-cart'
import '@sinch-engage/nectary/icons/shopping-basket'
import '@sinch-engage/nectary/icons/shopping-bag'
import '@sinch-engage/nectary/icons/shop-two'
import '@sinch-engage/nectary/icons/shop'
import '@sinch-engage/nectary/icons/settings-voice'
import '@sinch-engage/nectary/icons/settings-remote'
import '@sinch-engage/nectary/icons/settings-power'
import '@sinch-engage/nectary/icons/settings-phone'
import '@sinch-engage/nectary/icons/settings-overscan'
import '@sinch-engage/nectary/icons/settings-input-svideo'
import '@sinch-engage/nectary/icons/settings-input-hdmi'
import '@sinch-engage/nectary/icons/settings-input-composite'
import '@sinch-engage/nectary/icons/settings-input-component'
import '@sinch-engage/nectary/icons/settings-input-antenna'
import '@sinch-engage/nectary/icons/settings-ethernet'
import '@sinch-engage/nectary/icons/settings-cell'
import '@sinch-engage/nectary/icons/settings-brightness'
import '@sinch-engage/nectary/icons/settings-bluetooth'
import '@sinch-engage/nectary/icons/settings-backup-restore'
import '@sinch-engage/nectary/icons/settings-applications'
import '@sinch-engage/nectary/icons/search-off'
import '@sinch-engage/nectary/icons/schedule'
import '@sinch-engage/nectary/icons/rule'
import '@sinch-engage/nectary/icons/rowing'
import '@sinch-engage/nectary/icons/rounded-corner'
import '@sinch-engage/nectary/icons/room'
import '@sinch-engage/nectary/icons/restore-page'
import '@sinch-engage/nectary/icons/restore-from-trash'
import '@sinch-engage/nectary/icons/restore'
import '@sinch-engage/nectary/icons/request-page'
import '@sinch-engage/nectary/icons/report-problem'
import '@sinch-engage/nectary/icons/reorder'
import '@sinch-engage/nectary/icons/remove-shopping-cart'
import '@sinch-engage/nectary/icons/redeem'
import '@sinch-engage/nectary/icons/record-voice-over'
import '@sinch-engage/nectary/icons/receipt'
import '@sinch-engage/nectary/icons/quickreply'
import '@sinch-engage/nectary/icons/question-answer'
import '@sinch-engage/nectary/icons/query-builder'
import '@sinch-engage/nectary/icons/published-with-changes'
import '@sinch-engage/nectary/icons/privacy-tip'
import '@sinch-engage/nectary/icons/print'
import '@sinch-engage/nectary/icons/preview'
import '@sinch-engage/nectary/icons/pregnant-woman'
import '@sinch-engage/nectary/icons/power-settings-new'
import '@sinch-engage/nectary/icons/polymer'
import '@sinch-engage/nectary/icons/play-for-work'
import '@sinch-engage/nectary/icons/plagiarism'
import '@sinch-engage/nectary/icons/picture-in-picture-alt'
import '@sinch-engage/nectary/icons/picture-in-picture'
import '@sinch-engage/nectary/icons/pets'
import '@sinch-engage/nectary/icons/perm-scan-wifi'
import '@sinch-engage/nectary/icons/perm-phone-msg'
import '@sinch-engage/nectary/icons/perm-media'
import '@sinch-engage/nectary/icons/perm-identity'
import '@sinch-engage/nectary/icons/perm-device-information'
import '@sinch-engage/nectary/icons/perm-data-setting'
import '@sinch-engage/nectary/icons/perm-contact-calendar'
import '@sinch-engage/nectary/icons/perm-camera-mic'
import '@sinch-engage/nectary/icons/pending-actions'
import '@sinch-engage/nectary/icons/pending'
import '@sinch-engage/nectary/icons/payment'
import '@sinch-engage/nectary/icons/pan-tool'
import '@sinch-engage/nectary/icons/pageview'
import '@sinch-engage/nectary/icons/outlet'
import '@sinch-engage/nectary/icons/outbond'
import '@sinch-engage/nectary/icons/open-with'
import '@sinch-engage/nectary/icons/open-in-full'
import '@sinch-engage/nectary/icons/open-in-browser'
import '@sinch-engage/nectary/icons/opacity'
import '@sinch-engage/nectary/icons/online-prediction'
import '@sinch-engage/nectary/icons/offline-pin'
import '@sinch-engage/nectary/icons/offline-bolt'
import '@sinch-engage/nectary/icons/note-add'
import '@sinch-engage/nectary/icons/not-started'
import '@sinch-engage/nectary/icons/not-accessible'
import '@sinch-engage/nectary/icons/next-plan'
import '@sinch-engage/nectary/icons/model-training'
import '@sinch-engage/nectary/icons/minimize'
import '@sinch-engage/nectary/icons/mediation'
import '@sinch-engage/nectary/icons/maximize'
import '@sinch-engage/nectary/icons/markunread-mailbox'
import '@sinch-engage/nectary/icons/loyalty'
import '@sinch-engage/nectary/icons/logout'
import '@sinch-engage/nectary/icons/login'
import '@sinch-engage/nectary/icons/lock-outline'
import '@sinch-engage/nectary/icons/lock-open'
import '@sinch-engage/nectary/icons/lock'
import '@sinch-engage/nectary/icons/list'
import '@sinch-engage/nectary/icons/line-weight'
import '@sinch-engage/nectary/icons/line-style'
import '@sinch-engage/nectary/icons/lightbulb-outline'
import '@sinch-engage/nectary/icons/leaderboard'
import '@sinch-engage/nectary/icons/launch'
import '@sinch-engage/nectary/icons/language'
import '@sinch-engage/nectary/icons/label-outline'
import '@sinch-engage/nectary/icons/label-off'
import '@sinch-engage/nectary/icons/label-important-outline'
import '@sinch-engage/nectary/icons/label-important'
import '@sinch-engage/nectary/icons/label'
import '@sinch-engage/nectary/icons/invert-colors'
import '@sinch-engage/nectary/icons/integration-instructions'
import '@sinch-engage/nectary/icons/input'
import '@sinch-engage/nectary/icons/info'
import '@sinch-engage/nectary/icons/important-devices'
import '@sinch-engage/nectary/icons/https'
import '@sinch-engage/nectary/icons/http'
import '@sinch-engage/nectary/icons/hourglass-full'
import '@sinch-engage/nectary/icons/hourglass-empty'
import '@sinch-engage/nectary/icons/hourglass-disabled'
import '@sinch-engage/nectary/icons/horizontal-split'
import '@sinch-engage/nectary/icons/home'
import '@sinch-engage/nectary/icons/history-toggle-off'
import '@sinch-engage/nectary/icons/highlight-off'
import '@sinch-engage/nectary/icons/highlight-alt'
import '@sinch-engage/nectary/icons/help-center'
import '@sinch-engage/nectary/icons/help'
import '@sinch-engage/nectary/icons/group-work'
import '@sinch-engage/nectary/icons/grading'
import '@sinch-engage/nectary/icons/grade'
import '@sinch-engage/nectary/icons/gif'
import '@sinch-engage/nectary/icons/get-app'
import '@sinch-engage/nectary/icons/gavel'
import '@sinch-engage/nectary/icons/g-translate'
import '@sinch-engage/nectary/icons/flip-to-front'
import '@sinch-engage/nectary/icons/flip-to-back'
import '@sinch-engage/nectary/icons/flight-takeoff'
import '@sinch-engage/nectary/icons/flight-land'
import '@sinch-engage/nectary/icons/flaky'
import '@sinch-engage/nectary/icons/fingerprint'
import '@sinch-engage/nectary/icons/find-replace'
import '@sinch-engage/nectary/icons/find-in-page'
import '@sinch-engage/nectary/icons/filter-alt'
import '@sinch-engage/nectary/icons/feedback'
import '@sinch-engage/nectary/icons/favorite-border'
import '@sinch-engage/nectary/icons/favorite'
import '@sinch-engage/nectary/icons/fact-check'
import '@sinch-engage/nectary/icons/face-unlock'
import '@sinch-engage/nectary/icons/face'
import '@sinch-engage/nectary/icons/extension'
import '@sinch-engage/nectary/icons/explore-off'
import '@sinch-engage/nectary/icons/explore'
import '@sinch-engage/nectary/icons/exit-to-app'
import '@sinch-engage/nectary/icons/event-seat'
import '@sinch-engage/nectary/icons/event'
import '@sinch-engage/nectary/icons/euro-symbol'
import '@sinch-engage/nectary/icons/eject'
import '@sinch-engage/nectary/icons/eco'
import '@sinch-engage/nectary/icons/dynamic-form'
import '@sinch-engage/nectary/icons/drag-indicator'
import '@sinch-engage/nectary/icons/donut-small'
import '@sinch-engage/nectary/icons/donut-large'
import '@sinch-engage/nectary/icons/done-outline'
import '@sinch-engage/nectary/icons/done'
import '@sinch-engage/nectary/icons/dns'
import '@sinch-engage/nectary/icons/disabled-by-default'
import '@sinch-engage/nectary/icons/description'
import '@sinch-engage/nectary/icons/delete-outline'
import '@sinch-engage/nectary/icons/delete-forever'
import '@sinch-engage/nectary/icons/delete'
import '@sinch-engage/nectary/icons/date-range'
import '@sinch-engage/nectary/icons/dashboard'
import '@sinch-engage/nectary/icons/credit-card'
import '@sinch-engage/nectary/icons/copyright'
import '@sinch-engage/nectary/icons/contactless'
import '@sinch-engage/nectary/icons/contact-support'
import '@sinch-engage/nectary/icons/contact-page'
import '@sinch-engage/nectary/icons/compare-arrows'
import '@sinch-engage/nectary/icons/commute'
import '@sinch-engage/nectary/icons/comment-bank'
import '@sinch-engage/nectary/icons/code'
import '@sinch-engage/nectary/icons/close-fullscreen'
import '@sinch-engage/nectary/icons/class'
import '@sinch-engage/nectary/icons/chrome-reader-mode'
import '@sinch-engage/nectary/icons/check-circle'
import '@sinch-engage/nectary/icons/change-history'
import '@sinch-engage/nectary/icons/card-travel'
import '@sinch-engage/nectary/icons/card-membership'
import '@sinch-engage/nectary/icons/card-giftcard'
import '@sinch-engage/nectary/icons/cancel-schedule-send'
import '@sinch-engage/nectary/icons/camera-enhance'
import '@sinch-engage/nectary/icons/calendar-view-day'
import '@sinch-engage/nectary/icons/calendar-today'
import '@sinch-engage/nectary/icons/cached'
import '@sinch-engage/nectary/icons/build-circle'
import '@sinch-engage/nectary/icons/build'
import '@sinch-engage/nectary/icons/bug-report'
import '@sinch-engage/nectary/icons/bookmarks'
import '@sinch-engage/nectary/icons/bookmark-border'
import '@sinch-engage/nectary/icons/bookmark'
import '@sinch-engage/nectary/icons/book-online'
import '@sinch-engage/nectary/icons/book'
import '@sinch-engage/nectary/icons/batch-prediction'
import '@sinch-engage/nectary/icons/backup-table'
import '@sinch-engage/nectary/icons/backup'
import '@sinch-engage/nectary/icons/autorenew'
import '@sinch-engage/nectary/icons/assignment-turned-in'
import '@sinch-engage/nectary/icons/assignment-returned'
import '@sinch-engage/nectary/icons/assignment-return'
import '@sinch-engage/nectary/icons/assignment-late'
import '@sinch-engage/nectary/icons/assignment-ind'
import '@sinch-engage/nectary/icons/assessment'
import '@sinch-engage/nectary/icons/aspect-ratio'
import '@sinch-engage/nectary/icons/article'
import '@sinch-engage/nectary/icons/arrow-right-alt'
import '@sinch-engage/nectary/icons/arrow-circle-up'
import '@sinch-engage/nectary/icons/arrow-circle-down'
import '@sinch-engage/nectary/icons/app-blocking'
import '@sinch-engage/nectary/icons/api'
import '@sinch-engage/nectary/icons/announcement'
import '@sinch-engage/nectary/icons/android'
import '@sinch-engage/nectary/icons/anchor'
import '@sinch-engage/nectary/icons/analytics'
import '@sinch-engage/nectary/icons/all-out'
import '@sinch-engage/nectary/icons/all-inbox'
import '@sinch-engage/nectary/icons/alarm-on'
import '@sinch-engage/nectary/icons/alarm-off'
import '@sinch-engage/nectary/icons/alarm-add'
import '@sinch-engage/nectary/icons/alarm'
import '@sinch-engage/nectary/icons/admin-panel-settings'
import '@sinch-engage/nectary/icons/addchart'
import '@sinch-engage/nectary/icons/add-task'
import '@sinch-engage/nectary/icons/add-shopping-cart'
import '@sinch-engage/nectary/icons/account-circle'
import '@sinch-engage/nectary/icons/account-box'
import '@sinch-engage/nectary/icons/account-balance-wallet'
import '@sinch-engage/nectary/icons/account-balance'
import '@sinch-engage/nectary/icons/accessible-forward'
import '@sinch-engage/nectary/icons/accessible'
import '@sinch-engage/nectary/icons/accessibility-new'
import '@sinch-engage/nectary/icons/accessibility'
import '@sinch-engage/nectary/icons/3d-rotation'
import '@sinch-engage/nectary/icons/wifi-calling'
import '@sinch-engage/nectary/icons/vpn-key'
import '@sinch-engage/nectary/icons/voicemail'
import '@sinch-engage/nectary/icons/unsubscribe'
import '@sinch-engage/nectary/icons/textsms'
import '@sinch-engage/nectary/icons/swap-calls'
import '@sinch-engage/nectary/icons/stop-screen-share'
import '@sinch-engage/nectary/icons/stay-primary-portrait'
import '@sinch-engage/nectary/icons/stay-primary-landscape'
import '@sinch-engage/nectary/icons/stay-current-portrait'
import '@sinch-engage/nectary/icons/stay-current-landscape'
import '@sinch-engage/nectary/icons/speaker-phone'
import '@sinch-engage/nectary/icons/sentiment-satisfied-alt'
import '@sinch-engage/nectary/icons/screen-share'
import '@sinch-engage/nectary/icons/rss-feed'
import '@sinch-engage/nectary/icons/ring-volume'
import '@sinch-engage/nectary/icons/read-more'
import '@sinch-engage/nectary/icons/qr-code-scanner'
import '@sinch-engage/nectary/icons/qr-code'
import '@sinch-engage/nectary/icons/print-disabled'
import '@sinch-engage/nectary/icons/present-to-all'
import '@sinch-engage/nectary/icons/portable-wifi-off'
import '@sinch-engage/nectary/icons/phonelink-setup'
import '@sinch-engage/nectary/icons/phonelink-ring'
import '@sinch-engage/nectary/icons/phonelink-lock'
import '@sinch-engage/nectary/icons/phonelink-erase'
import '@sinch-engage/nectary/icons/phone-enabled'
import '@sinch-engage/nectary/icons/phone-disabled'
import '@sinch-engage/nectary/icons/phone'
import '@sinch-engage/nectary/icons/person-search'
import '@sinch-engage/nectary/icons/person-add-disabled'
import '@sinch-engage/nectary/icons/pause-presentation'
import '@sinch-engage/nectary/icons/no-sim'
import '@sinch-engage/nectary/icons/nat'
import '@sinch-engage/nectary/icons/mobile-screen-share'
import '@sinch-engage/nectary/icons/message'
import '@sinch-engage/nectary/icons/mark-email-unread'
import '@sinch-engage/nectary/icons/mark-email-read'
import '@sinch-engage/nectary/icons/mail-outline'
import '@sinch-engage/nectary/icons/location-on'
import '@sinch-engage/nectary/icons/location-off'
import '@sinch-engage/nectary/icons/live-help'
import '@sinch-engage/nectary/icons/list-alt'
import '@sinch-engage/nectary/icons/invert-colors-off'
import '@sinch-engage/nectary/icons/import-export'
import '@sinch-engage/nectary/icons/import-contacts'
import '@sinch-engage/nectary/icons/hourglass-top'
import '@sinch-engage/nectary/icons/hourglass-bottom'
import '@sinch-engage/nectary/icons/forward-to-inbox'
import '@sinch-engage/nectary/icons/email'
import '@sinch-engage/nectary/icons/duo'
import '@sinch-engage/nectary/icons/domain-verification'
import '@sinch-engage/nectary/icons/domain-disabled'
import '@sinch-engage/nectary/icons/dialpad'
import '@sinch-engage/nectary/icons/dialer-sip'
import '@sinch-engage/nectary/icons/desktop-access-disabled'
import '@sinch-engage/nectary/icons/contacts'
import '@sinch-engage/nectary/icons/contact-phone'
import '@sinch-engage/nectary/icons/contact-mail'
import '@sinch-engage/nectary/icons/clear-all'
import '@sinch-engage/nectary/icons/chat-bubble'
import '@sinch-engage/nectary/icons/cancel-presentation'
import '@sinch-engage/nectary/icons/call-split'
import '@sinch-engage/nectary/icons/call-received'
import '@sinch-engage/nectary/icons/call-missed-outgoing'
import '@sinch-engage/nectary/icons/call-missed'
import '@sinch-engage/nectary/icons/call-merge'
import '@sinch-engage/nectary/icons/call-made'
import '@sinch-engage/nectary/icons/call-end'
import '@sinch-engage/nectary/icons/call'
import '@sinch-engage/nectary/icons/business'
import '@sinch-engage/nectary/icons/alternate-email'
import '@sinch-engage/nectary/icons/add-ic-call'
import '@sinch-engage/nectary/icons/whatshot'
import '@sinch-engage/nectary/icons/thumb-up-alt'
import '@sinch-engage/nectary/icons/thumb-down-alt'
import '@sinch-engage/nectary/icons/sports-volleyball'
import '@sinch-engage/nectary/icons/sports-tennis'
import '@sinch-engage/nectary/icons/sports-soccer'
import '@sinch-engage/nectary/icons/sports-rugby'
import '@sinch-engage/nectary/icons/sports-motorsports'
import '@sinch-engage/nectary/icons/sports-mma'
import '@sinch-engage/nectary/icons/sports-kabaddi'
import '@sinch-engage/nectary/icons/sports-hockey'
import '@sinch-engage/nectary/icons/sports-handball'
import '@sinch-engage/nectary/icons/sports-golf'
import '@sinch-engage/nectary/icons/sports-football'
import '@sinch-engage/nectary/icons/sports-esports'
import '@sinch-engage/nectary/icons/sports-cricket'
import '@sinch-engage/nectary/icons/sports-basketball'
import '@sinch-engage/nectary/icons/sports-baseball'
import '@sinch-engage/nectary/icons/sports'
import '@sinch-engage/nectary/icons/single-bed'
import '@sinch-engage/nectary/icons/sick'
import '@sinch-engage/nectary/icons/share'
import '@sinch-engage/nectary/icons/sentiment-very-satisfied'
import '@sinch-engage/nectary/icons/sentiment-very-dissatisfied'
import '@sinch-engage/nectary/icons/sentiment-satisfied'
import '@sinch-engage/nectary/icons/sentiment-neutral'
import '@sinch-engage/nectary/icons/sentiment-dissatisfied'
import '@sinch-engage/nectary/icons/self-improvement'
import '@sinch-engage/nectary/icons/science'
import '@sinch-engage/nectary/icons/school'
import '@sinch-engage/nectary/icons/sanitizer'
import '@sinch-engage/nectary/icons/reduce-capacity'
import '@sinch-engage/nectary/icons/public-off'
import '@sinch-engage/nectary/icons/public'
import '@sinch-engage/nectary/icons/psychology'
import '@sinch-engage/nectary/icons/precision-manufacturing'
import '@sinch-engage/nectary/icons/poll'
import '@sinch-engage/nectary/icons/plus-one'
import '@sinch-engage/nectary/icons/person-remove-alt-1'
import '@sinch-engage/nectary/icons/person-remove'
import '@sinch-engage/nectary/icons/person-outline'
import '@sinch-engage/nectary/icons/person-add-alt-1'
import '@sinch-engage/nectary/icons/person-add'
import '@sinch-engage/nectary/icons/person'
import '@sinch-engage/nectary/icons/people-outline'
import '@sinch-engage/nectary/icons/people-alt'
import '@sinch-engage/nectary/icons/people'
import '@sinch-engage/nectary/icons/party-mode'
import '@sinch-engage/nectary/icons/pages'
import '@sinch-engage/nectary/icons/outdoor-grill'
import '@sinch-engage/nectary/icons/notifications-paused'
import '@sinch-engage/nectary/icons/notifications-off'
import '@sinch-engage/nectary/icons/notifications-active'
import '@sinch-engage/nectary/icons/notifications'
import '@sinch-engage/nectary/icons/no-luggage'
import '@sinch-engage/nectary/icons/nights-stay'
import '@sinch-engage/nectary/icons/mood-bad'
import '@sinch-engage/nectary/icons/mood'
import '@sinch-engage/nectary/icons/military-tech'
import '@sinch-engage/nectary/icons/masks'
import '@sinch-engage/nectary/icons/luggage'
import '@sinch-engage/nectary/icons/location-city'
import '@sinch-engage/nectary/icons/king-bed'
import '@sinch-engage/nectary/icons/history-edu'
import '@sinch-engage/nectary/icons/groups'
import '@sinch-engage/nectary/icons/group-add'
import '@sinch-engage/nectary/icons/group'
import '@sinch-engage/nectary/icons/follow-the-signs'
import '@sinch-engage/nectary/icons/fireplace'
import '@sinch-engage/nectary/icons/facebook'
import '@sinch-engage/nectary/icons/engineering'
import '@sinch-engage/nectary/icons/emoji-transportation'
import '@sinch-engage/nectary/icons/emoji-symbols'
import '@sinch-engage/nectary/icons/emoji-people'
import '@sinch-engage/nectary/icons/emoji-objects'
import '@sinch-engage/nectary/icons/emoji-nature'
import '@sinch-engage/nectary/icons/emoji-food-beverage'
import '@sinch-engage/nectary/icons/emoji-flags'
import '@sinch-engage/nectary/icons/emoji-events'
import '@sinch-engage/nectary/icons/emoji-emotions'
import '@sinch-engage/nectary/icons/elderly'
import '@sinch-engage/nectary/icons/domain'
import '@sinch-engage/nectary/icons/deck'
import '@sinch-engage/nectary/icons/coronavirus'
import '@sinch-engage/nectary/icons/construction'
import '@sinch-engage/nectary/icons/connect-without-contact'
import '@sinch-engage/nectary/icons/clean-hands'
import '@sinch-engage/nectary/icons/cake'
import '@sinch-engage/nectary/icons/architecture'
import '@sinch-engage/nectary/icons/6-ft-apart'
import '@sinch-engage/nectary/icons/wifi-tethering'
import '@sinch-engage/nectary/icons/wifi-lock'
import '@sinch-engage/nectary/icons/widgets'
import '@sinch-engage/nectary/icons/wallpaper'
import '@sinch-engage/nectary/icons/usb'
import '@sinch-engage/nectary/icons/thermostat'
import '@sinch-engage/nectary/icons/storage'
import '@sinch-engage/nectary/icons/signal-wifi-off'
import '@sinch-engage/nectary/icons/signal-wifi-4-bar-lock'
import '@sinch-engage/nectary/icons/signal-wifi-4-bar'
import '@sinch-engage/nectary/icons/signal-cellular-off'
import '@sinch-engage/nectary/icons/signal-cellular-null'
import '@sinch-engage/nectary/icons/signal-cellular-no-sim'
import '@sinch-engage/nectary/icons/signal-cellular-connected-no-internet-4-bar'
import '@sinch-engage/nectary/icons/signal-cellular-alt'
import '@sinch-engage/nectary/icons/signal-cellular-4-bar'
import '@sinch-engage/nectary/icons/settings-system-daydream'
import '@sinch-engage/nectary/icons/sd-storage'
import '@sinch-engage/nectary/icons/screen-rotation'
import '@sinch-engage/nectary/icons/screen-lock-rotation'
import '@sinch-engage/nectary/icons/screen-lock-portrait'
import '@sinch-engage/nectary/icons/screen-lock-landscape'
import '@sinch-engage/nectary/icons/nfc'
import '@sinch-engage/nectary/icons/mobile-off'
import '@sinch-engage/nectary/icons/mobile-friendly'
import '@sinch-engage/nectary/icons/location-searching'
import '@sinch-engage/nectary/icons/location-disabled'
import '@sinch-engage/nectary/icons/graphic-eq'
import '@sinch-engage/nectary/icons/gps-off'
import '@sinch-engage/nectary/icons/gps-not-fixed'
import '@sinch-engage/nectary/icons/gps-fixed'
import '@sinch-engage/nectary/icons/dvr'
import '@sinch-engage/nectary/icons/devices'
import '@sinch-engage/nectary/icons/developer-mode'
import '@sinch-engage/nectary/icons/data-usage'
import '@sinch-engage/nectary/icons/brightness-medium'
import '@sinch-engage/nectary/icons/brightness-low'
import '@sinch-engage/nectary/icons/brightness-high'
import '@sinch-engage/nectary/icons/brightness-auto'
import '@sinch-engage/nectary/icons/bluetooth-searching'
import '@sinch-engage/nectary/icons/bluetooth-disabled'
import '@sinch-engage/nectary/icons/bluetooth-connected'
import '@sinch-engage/nectary/icons/bluetooth'
import '@sinch-engage/nectary/icons/battery-unknown'
import '@sinch-engage/nectary/icons/battery-std'
import '@sinch-engage/nectary/icons/battery-full'
import '@sinch-engage/nectary/icons/battery-charging-full'
import '@sinch-engage/nectary/icons/battery-alert'
import '@sinch-engage/nectary/icons/airplanemode-inactive'
import '@sinch-engage/nectary/icons/airplanemode-active'
import '@sinch-engage/nectary/icons/add-to-home-screen'
import '@sinch-engage/nectary/icons/add-alarm'
import '@sinch-engage/nectary/icons/ad-units'
import '@sinch-engage/nectary/icons/access-alarms'
import '@sinch-engage/nectary/icons/access-alarm'
// {{icon import}}

const iconNames = [
  'sinch-icon-keyboard-arrow-down',
  'sinch-icon-keyboard-arrow-left',
  'sinch-icon-keyboard-arrow-right',
  'sinch-icon-keyboard-arrow-up',
  /* Hardware */
  'sinch-icon-smart-toy',
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
  // {{icon name}}
]

export default {
  title: 'Components/Icons',
  argTypes: {},
} as Meta

const Template = (iconNames: string[]): Story<TSinchIconReact> => () => {
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

export const Icons = Template(iconNames)

Icons.parameters = {
  docs: {
    source: {
      code: `<>\n${iconNames.map((ic) => `  <${ic}></${ic}>`).join('\n')}\n</>`,
    },
  },
}

const editorIconNames = [
  /* Editor */
  'sinch-icon-add-comment',
  'sinch-icon-attach-file',
  'sinch-icon-attach-money',
  'sinch-icon-bar-chart',
  'sinch-icon-border-all',
  'sinch-icon-border-bottom',
  'sinch-icon-border-clear',
  'sinch-icon-border-horizontal',
  'sinch-icon-border-inner',
  'sinch-icon-border-left',
  'sinch-icon-border-outer',
  'sinch-icon-border-right',
  'sinch-icon-border-style',
  'sinch-icon-border-top',
  'sinch-icon-border-vertical',
  'sinch-icon-bubble-chart',
  'sinch-icon-chat-bubble-outline',
  'sinch-icon-done-all',
  'sinch-icon-drag-handle',
  'sinch-icon-format-align-center',
  'sinch-icon-format-align-justify',
  'sinch-icon-format-align-left',
  'sinch-icon-format-align-right',
  'sinch-icon-format-bold',
  'sinch-icon-format-clear',
  'sinch-icon-format-color-reset',
  'sinch-icon-format-indent-decrease',
  'sinch-icon-format-indent-increase',
  'sinch-icon-format-italic',
  'sinch-icon-format-line-spacing',
  'sinch-icon-format-list-bulleted',
  'sinch-icon-format-list-numbered-rtl',
  'sinch-icon-format-list-numbered',
  'sinch-icon-format-paint',
  'sinch-icon-format-quote',
  'sinch-icon-format-shapes',
  'sinch-icon-format-size',
  'sinch-icon-format-strikethrough',
  'sinch-icon-format-textdirection-l-to-r',
  'sinch-icon-format-textdirection-r-to-l',
  'sinch-icon-format-underlined',
  'sinch-icon-forum',
  'sinch-icon-functions',
  'sinch-icon-height',
  'sinch-icon-highlight',
  'sinch-icon-history',
  'sinch-icon-horizontal-rule',
  'sinch-icon-info-outline',
  'sinch-icon-insert-chart-outlined',
  'sinch-icon-insert-chart',
  'sinch-icon-insert-comment',
  'sinch-icon-insert-drive-file',
  'sinch-icon-insert-emoticon',
  'sinch-icon-insert-invitation',
  'sinch-icon-insert-link',
  'sinch-icon-insert-photo',
  'sinch-icon-linear-scale',
  'sinch-icon-local-offer',
  'sinch-icon-mark-chat-read',
  'sinch-icon-merge-type',
  'sinch-icon-mic-none',
  'sinch-icon-mode-comment',
  'sinch-icon-mode',
  'sinch-icon-monetization-on',
  'sinch-icon-money-off-csred',
  'sinch-icon-money-off',
  'sinch-icon-more-time',
  'sinch-icon-multiline-chart',
  'sinch-icon-notes',
  'sinch-icon-notifications-none',
  'sinch-icon-pie-chart-outline',
  'sinch-icon-pie-chart',
  'sinch-icon-post-add',
  'sinch-icon-publish',
  'sinch-icon-scatter-plot',
  'sinch-icon-score',
  'sinch-icon-search',
  'sinch-icon-settings',
  'sinch-icon-short-text',
  'sinch-icon-show-chart',
  'sinch-icon-space-bar',
  'sinch-icon-stacked-line-chart',
  'sinch-icon-strikethrough-s',
  'sinch-icon-subscript',
  'sinch-icon-superscript',
  'sinch-icon-swap-vert',
  'sinch-icon-table-chart',
  'sinch-icon-table-rows',
  'sinch-icon-text-fields',
  'sinch-icon-title',
  'sinch-icon-update',
  'sinch-icon-vertical-align-bottom',
  'sinch-icon-vertical-align-center',
  'sinch-icon-vertical-align-top',
  'sinch-icon-wrap-text',
]

export const EditorIcons = Template(editorIconNames)

EditorIcons.parameters = {
  docs: {
    source: {
      code: `<>\n${editorIconNames.map((ic) => `  <${ic}></${ic}>`).join('\n')}\n</>`,
    },
  },
}

const contentIconNames = [
  /* Content */
  'sinch-icon-add-box',
  'sinch-icon-add-circle-outline',
  'sinch-icon-add-circle',
  'sinch-icon-add',
  'sinch-icon-amp-stories',
  'sinch-icon-archive',
  'sinch-icon-attribution',
  'sinch-icon-backspace',
  'sinch-icon-ballot',
  'sinch-icon-biotech',
  'sinch-icon-block',
  'sinch-icon-calculate',
  'sinch-icon-clear',
  'sinch-icon-content-copy',
  'sinch-icon-content-cut',
  'sinch-icon-content-paste',
  'sinch-icon-create',
  'sinch-icon-delete-sweep',
  'sinch-icon-drafts',
  'sinch-icon-dynamic-feed',
  'sinch-icon-file-copy',
  'sinch-icon-filter-list',
  'sinch-icon-flag',
  'sinch-icon-font-download',
  'sinch-icon-forward',
  'sinch-icon-gesture',
  'sinch-icon-how-to-reg',
  'sinch-icon-how-to-vote',
  'sinch-icon-inbox',
  'sinch-icon-insights',
  'sinch-icon-link-off',
  'sinch-icon-link',
  'sinch-icon-low-priority',
  'sinch-icon-mail',
  'sinch-icon-markunread',
  'sinch-icon-move-to-inbox',
  'sinch-icon-next-week',
  'sinch-icon-outlined-flag',
  'sinch-icon-policy',
  'sinch-icon-push-pin',
  'sinch-icon-redo',
  'sinch-icon-remove-circle-outline',
  'sinch-icon-remove-circle',
  'sinch-icon-remove',
  'sinch-icon-reply-all',
  'sinch-icon-reply',
  'sinch-icon-report-off',
  'sinch-icon-report-outline',
  'sinch-icon-report',
  'sinch-icon-save-alt',
  'sinch-icon-save',
  'sinch-icon-select-all',
  'sinch-icon-send',
  'sinch-icon-sort',
  'sinch-icon-square-foot',
  'sinch-icon-text-format',
  'sinch-icon-unarchive',
  'sinch-icon-undo',
  'sinch-icon-waves',
  'sinch-icon-weekend',
  'sinch-icon-where-to-vote',
]

export const ContentIcons = Template(contentIconNames)

ContentIcons.parameters = {
  docs: {
    source: {
      code: `<>\n${contentIconNames.map((ic) => `  <${ic}></${ic}>`).join('\n')}\n</>`,
    },
  },
}

const navigationIconNames = [
  /* Navigation */
  'sinch-icon-app-settings-alt',
  'sinch-icon-apps',
  'sinch-icon-arrow-back-ios',
  'sinch-icon-arrow-back',
  'sinch-icon-arrow-downward',
  'sinch-icon-arrow-drop-down-circle',
  'sinch-icon-arrow-drop-down',
  'sinch-icon-arrow-drop-up',
  'sinch-icon-arrow-forward-ios',
  'sinch-icon-arrow-forward',
  'sinch-icon-arrow-left',
  'sinch-icon-arrow-right',
  'sinch-icon-arrow-upward',
  'sinch-icon-campaign',
  'sinch-icon-cancel',
  'sinch-icon-check',
  'sinch-icon-chevron-left',
  'sinch-icon-chevron-right',
  'sinch-icon-close',
  'sinch-icon-double-arrow',
  'sinch-icon-east',
  'sinch-icon-expand-less',
  'sinch-icon-expand-more',
  'sinch-icon-first-page',
  'sinch-icon-fullscreen-exit',
  'sinch-icon-fullscreen',
  'sinch-icon-home-work',
  'sinch-icon-last-page',
  'sinch-icon-legend-toggle',
  'sinch-icon-menu-open',
  'sinch-icon-menu',
  'sinch-icon-more-horiz',
  'sinch-icon-more-vert',
  'sinch-icon-north-east',
  'sinch-icon-north-west',
  'sinch-icon-north',
  'sinch-icon-payments',
  'sinch-icon-refresh',
  'sinch-icon-south-east',
  'sinch-icon-south-west',
  'sinch-icon-south',
  'sinch-icon-subdirectory-arrow-left',
  'sinch-icon-subdirectory-arrow-right',
  'sinch-icon-switch-left',
  'sinch-icon-switch-right',
  'sinch-icon-unfold-less',
  'sinch-icon-unfold-more',
  'sinch-icon-west',
]

export const NavigationIcons = Template(navigationIconNames)

NavigationIcons.parameters = {
  docs: {
    source: {
      code: `<>\n${navigationIconNames.map((ic) => `  <${ic}></${ic}>`).join('\n')}\n</>`,
    },
  },
}

const alertIconNames = [
  /* Alert */
  'sinch-icon-add-alert',
  'sinch-icon-auto-delete',
  'sinch-icon-error',
  'sinch-icon-error-outline',
  'sinch-icon-notification-important',
  'sinch-icon-warning',
  'sinch-icon-warning-amber',
]

export const AlertIcons = Template(alertIconNames)

AlertIcons.parameters = {
  docs: {
    source: {
      code: `<>\n${alertIconNames.map((ic) => `  <${ic}></${ic}>`).join('\n')}\n</>`,
    },
  },
}

const actionIconNames = [
  /* Action */
  'sinch-icon-3d-rotation',
  'sinch-icon-accessibility-new',
  'sinch-icon-accessibility',
  'sinch-icon-accessible-forward',
  'sinch-icon-accessible',
  'sinch-icon-account-balance-wallet',
  'sinch-icon-account-balance',
  'sinch-icon-account-box',
  'sinch-icon-account-circle',
  'sinch-icon-add-shopping-cart',
  'sinch-icon-add-task',
  'sinch-icon-addchart',
  'sinch-icon-admin-panel-settings',
  'sinch-icon-alarm-add',
  'sinch-icon-alarm-off',
  'sinch-icon-alarm-on',
  'sinch-icon-alarm',
  'sinch-icon-all-inbox',
  'sinch-icon-all-out',
  'sinch-icon-analytics',
  'sinch-icon-anchor',
  'sinch-icon-android',
  'sinch-icon-announcement',
  'sinch-icon-api',
  'sinch-icon-app-blocking',
  'sinch-icon-arrow-circle-down',
  'sinch-icon-arrow-circle-up',
  'sinch-icon-arrow-right-alt',
  'sinch-icon-article',
  'sinch-icon-aspect-ratio',
  'sinch-icon-assessment',
  'sinch-icon-assignment-ind',
  'sinch-icon-assignment-late',
  'sinch-icon-assignment-return',
  'sinch-icon-assignment-returned',
  'sinch-icon-assignment-turned-in',
  'sinch-icon-assignment',
  'sinch-icon-autorenew',
  'sinch-icon-backup-table',
  'sinch-icon-backup',
  'sinch-icon-batch-prediction',
  'sinch-icon-book-online',
  'sinch-icon-book',
  'sinch-icon-bookmark-border',
  'sinch-icon-bookmark',
  'sinch-icon-bookmarks',
  'sinch-icon-bug-report',
  'sinch-icon-build-circle',
  'sinch-icon-build',
  'sinch-icon-cached',
  'sinch-icon-calendar-today',
  'sinch-icon-calendar-view-day',
  'sinch-icon-camera-enhance',
  'sinch-icon-cancel-schedule-send',
  'sinch-icon-card-giftcard',
  'sinch-icon-card-membership',
  'sinch-icon-card-travel',
  'sinch-icon-change-history',
  'sinch-icon-check-circle-outline',
  'sinch-icon-check-circle',
  'sinch-icon-chrome-reader-mode',
  'sinch-icon-class',
  'sinch-icon-close-fullscreen',
  'sinch-icon-code',
  'sinch-icon-comment-bank',
  'sinch-icon-commute',
  'sinch-icon-compare-arrows',
  'sinch-icon-contact-page',
  'sinch-icon-contact-support',
  'sinch-icon-contactless',
  'sinch-icon-copyright',
  'sinch-icon-credit-card',
  'sinch-icon-dashboard',
  'sinch-icon-date-range',
  'sinch-icon-delete-forever',
  'sinch-icon-delete-outline',
  'sinch-icon-delete',
  'sinch-icon-description',
  'sinch-icon-disabled-by-default',
  'sinch-icon-dns',
  'sinch-icon-done-all',
  'sinch-icon-done-outline',
  'sinch-icon-done',
  'sinch-icon-donut-large',
  'sinch-icon-donut-small',
  'sinch-icon-drag-indicator',
  'sinch-icon-dynamic-form',
  'sinch-icon-eco',
  'sinch-icon-eject',
  'sinch-icon-euro-symbol',
  'sinch-icon-event-seat',
  'sinch-icon-event',
  'sinch-icon-exit-to-app',
  'sinch-icon-explore-off',
  'sinch-icon-explore',
  'sinch-icon-extension',
  'sinch-icon-face-unlock',
  'sinch-icon-face',
  'sinch-icon-fact-check',
  'sinch-icon-favorite-border',
  'sinch-icon-favorite',
  'sinch-icon-feedback',
  'sinch-icon-filter-alt',
  'sinch-icon-find-in-page',
  'sinch-icon-find-replace',
  'sinch-icon-fingerprint',
  'sinch-icon-flaky',
  'sinch-icon-flight-land',
  'sinch-icon-flight-takeoff',
  'sinch-icon-flip-to-back',
  'sinch-icon-flip-to-front',
  'sinch-icon-g-translate',
  'sinch-icon-gavel',
  'sinch-icon-get-app',
  'sinch-icon-gif',
  'sinch-icon-grade',
  'sinch-icon-grading',
  'sinch-icon-group-work',
  'sinch-icon-help-center',
  'sinch-icon-help-outline',
  'sinch-icon-help',
  'sinch-icon-highlight-alt',
  'sinch-icon-highlight-off',
  'sinch-icon-history-toggle-off',
  'sinch-icon-history',
  'sinch-icon-home',
  'sinch-icon-horizontal-split',
  'sinch-icon-hourglass-disabled',
  'sinch-icon-hourglass-empty',
  'sinch-icon-hourglass-full',
  'sinch-icon-http',
  'sinch-icon-https',
  'sinch-icon-important-devices',
  'sinch-icon-info-outline',
  'sinch-icon-info',
  'sinch-icon-input',
  'sinch-icon-integration-instructions',
  'sinch-icon-invert-colors',
  'sinch-icon-label-important-outline',
  'sinch-icon-label-important',
  'sinch-icon-label-off',
  'sinch-icon-label-outline',
  'sinch-icon-label',
  'sinch-icon-language',
  'sinch-icon-launch',
  'sinch-icon-leaderboard',
  'sinch-icon-lightbulb-outline',
  'sinch-icon-line-style',
  'sinch-icon-line-weight',
  'sinch-icon-list',
  'sinch-icon-lock-open',
  'sinch-icon-lock-outline',
  'sinch-icon-lock',
  'sinch-icon-login',
  'sinch-icon-logout',
  'sinch-icon-loyalty',
  'sinch-icon-markunread-mailbox',
  'sinch-icon-maximize',
  'sinch-icon-mediation',
  'sinch-icon-minimize',
  'sinch-icon-model-training',
  'sinch-icon-next-plan',
  'sinch-icon-not-accessible',
  'sinch-icon-not-started',
  'sinch-icon-note-add',
  'sinch-icon-offline-bolt',
  'sinch-icon-offline-pin',
  'sinch-icon-online-prediction',
  'sinch-icon-opacity',
  'sinch-icon-open-in-browser',
  'sinch-icon-open-in-full',
  'sinch-icon-open-in-new',
  'sinch-icon-open-with',
  'sinch-icon-outbond',
  'sinch-icon-outlet',
  'sinch-icon-pageview',
  'sinch-icon-pan-tool',
  'sinch-icon-payment',
  'sinch-icon-pending-actions',
  'sinch-icon-pending',
  'sinch-icon-perm-camera-mic',
  'sinch-icon-perm-contact-calendar',
  'sinch-icon-perm-data-setting',
  'sinch-icon-perm-device-information',
  'sinch-icon-perm-identity',
  'sinch-icon-perm-media',
  'sinch-icon-perm-phone-msg',
  'sinch-icon-perm-scan-wifi',
  'sinch-icon-pets',
  'sinch-icon-picture-in-picture-alt',
  'sinch-icon-picture-in-picture',
  'sinch-icon-plagiarism',
  'sinch-icon-play-for-work',
  'sinch-icon-polymer',
  'sinch-icon-power-settings-new',
  'sinch-icon-pregnant-woman',
  'sinch-icon-preview',
  'sinch-icon-print',
  'sinch-icon-privacy-tip',
  'sinch-icon-published-with-changes',
  'sinch-icon-query-builder',
  'sinch-icon-question-answer',
  'sinch-icon-quickreply',
  'sinch-icon-receipt',
  'sinch-icon-record-voice-over',
  'sinch-icon-redeem',
  'sinch-icon-remove-shopping-cart',
  'sinch-icon-reorder',
  'sinch-icon-report-problem',
  'sinch-icon-request-page',
  'sinch-icon-restore-from-trash',
  'sinch-icon-restore-page',
  'sinch-icon-restore',
  'sinch-icon-room',
  'sinch-icon-rounded-corner',
  'sinch-icon-rowing',
  'sinch-icon-rule',
  'sinch-icon-schedule',
  'sinch-icon-search-off',
  'sinch-icon-search',
  'sinch-icon-settings-applications',
  'sinch-icon-settings-backup-restore',
  'sinch-icon-settings-bluetooth',
  'sinch-icon-settings-brightness',
  'sinch-icon-settings-cell',
  'sinch-icon-settings-ethernet',
  'sinch-icon-settings-input-antenna',
  'sinch-icon-settings-input-component',
  'sinch-icon-settings-input-composite',
  'sinch-icon-settings-input-hdmi',
  'sinch-icon-settings-input-svideo',
  'sinch-icon-settings-overscan',
  'sinch-icon-settings-phone',
  'sinch-icon-settings-power',
  'sinch-icon-settings-remote',
  'sinch-icon-settings-voice',
  'sinch-icon-settings',
  'sinch-icon-shop-two',
  'sinch-icon-shop',
  'sinch-icon-shopping-bag',
  'sinch-icon-shopping-basket',
  'sinch-icon-shopping-cart',
  'sinch-icon-smart-button',
  'sinch-icon-source',
  'sinch-icon-speaker-notes-off',
  'sinch-icon-speaker-notes',
  'sinch-icon-spellcheck',
  'sinch-icon-star-rate',
  'sinch-icon-stars',
  'sinch-icon-sticky-note-2',
  'sinch-icon-store',
  'sinch-icon-subject',
  'sinch-icon-subtitles-off',
  'sinch-icon-supervised-user-circle',
  'sinch-icon-supervisor-account',
  'sinch-icon-support',
  'sinch-icon-swap-horiz',
  'sinch-icon-swap-horizontal-circle',
  'sinch-icon-swap-vert',
  'sinch-icon-swap-vertical-circle',
  'sinch-icon-sync-alt',
  'sinch-icon-system-update-alt',
  'sinch-icon-tab-unselected',
  'sinch-icon-tab',
  'sinch-icon-table-view',
  'sinch-icon-text-rotate-up',
  'sinch-icon-text-rotate-vertical',
  'sinch-icon-text-rotation-angledown',
  'sinch-icon-text-rotation-angleup',
  'sinch-icon-text-rotation-down',
  'sinch-icon-text-rotation-none',
  'sinch-icon-theaters',
  'sinch-icon-thumb-down',
  'sinch-icon-thumb-up',
  'sinch-icon-thumbs-up-down',
  'sinch-icon-timeline',
  'sinch-icon-toc',
  'sinch-icon-today',
  'sinch-icon-toll',
  'sinch-icon-touch-app',
  'sinch-icon-tour',
  'sinch-icon-track-changes',
  'sinch-icon-translate',
  'sinch-icon-trending-down',
  'sinch-icon-trending-flat',
  'sinch-icon-trending-up',
  'sinch-icon-turned-in-not',
  'sinch-icon-turned-in',
  'sinch-icon-unpublished',
  'sinch-icon-update',
  'sinch-icon-upgrade',
  'sinch-icon-verified-user',
  'sinch-icon-verified',
  'sinch-icon-vertical-split',
  'sinch-icon-view-agenda',
  'sinch-icon-view-array',
  'sinch-icon-view-carousel',
  'sinch-icon-view-column',
  'sinch-icon-view-day',
  'sinch-icon-view-headline',
  'sinch-icon-view-list',
  'sinch-icon-view-module',
  'sinch-icon-view-quilt',
  'sinch-icon-view-sidebar',
  'sinch-icon-view-stream',
  'sinch-icon-view-week',
  'sinch-icon-visibility-off',
  'sinch-icon-visibility',
  'sinch-icon-voice-over-off',
  'sinch-icon-watch-later',
  'sinch-icon-wifi-protected-setup',
  'sinch-icon-work-off',
  'sinch-icon-work-outline',
  'sinch-icon-work',
  'sinch-icon-wysiwyg',
  'sinch-icon-youtube-searched-for',
  'sinch-icon-zoom-in',
  'sinch-icon-zoom-out',
]

export const ActionIcons = Template(actionIconNames)

ActionIcons.parameters = {
  docs: {
    source: {
      code: `<>\n${actionIconNames.map((ic) => `  <${ic}></${ic}>`).join('\n')}\n</>`,
    },
  },
}

const fileIconsNames = [
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
]

export const FileIcons = Template(fileIconsNames)

FileIcons.parameters = {
  docs: {
    source: {
      code: `<>\n${fileIconsNames.map((ic) => `  <${ic}></${ic}>`).join('\n')}\n</>`,
    },
  },
}

const communicationIconsNames = [
  /* Communication */
  'sinch-icon-add-ic-call',
  'sinch-icon-alternate-email',
  'sinch-icon-business',
  'sinch-icon-call-end',
  'sinch-icon-call-made',
  'sinch-icon-call-merge',
  'sinch-icon-call-missed-outgoing',
  'sinch-icon-call-missed',
  'sinch-icon-call-received',
  'sinch-icon-call-split',
  'sinch-icon-call',
  'sinch-icon-cancel-presentation',
  'sinch-icon-chat-bubble-outline',
  'sinch-icon-chat-bubble',
  'sinch-icon-chat',
  'sinch-icon-clear-all',
  'sinch-icon-comment',
  'sinch-icon-contact-mail',
  'sinch-icon-contact-phone',
  'sinch-icon-contacts',
  'sinch-icon-desktop-access-disabled',
  'sinch-icon-dialer-sip',
  'sinch-icon-dialpad',
  'sinch-icon-domain-disabled',
  'sinch-icon-domain-verification',
  'sinch-icon-duo',
  'sinch-icon-email',
  'sinch-icon-forum',
  'sinch-icon-forward-to-inbox',
  'sinch-icon-hourglass-bottom',
  'sinch-icon-hourglass-top',
  'sinch-icon-import-contacts',
  'sinch-icon-import-export',
  'sinch-icon-invert-colors-off',
  'sinch-icon-list-alt',
  'sinch-icon-live-help',
  'sinch-icon-location-off',
  'sinch-icon-location-on',
  'sinch-icon-mail-outline',
  'sinch-icon-mark-chat-read',
  'sinch-icon-mark-chat-unread',
  'sinch-icon-mark-email-read',
  'sinch-icon-mark-email-unread',
  'sinch-icon-message',
  'sinch-icon-mobile-screen-share',
  'sinch-icon-more-time',
  'sinch-icon-nat',
  'sinch-icon-no-sim',
  'sinch-icon-pause-presentation',
  'sinch-icon-person-add-disabled',
  'sinch-icon-person-search',
  'sinch-icon-phone-disabled',
  'sinch-icon-phone-enabled',
  'sinch-icon-phone',
  'sinch-icon-phonelink-erase',
  'sinch-icon-phonelink-lock',
  'sinch-icon-phonelink-ring',
  'sinch-icon-phonelink-setup',
  'sinch-icon-portable-wifi-off',
  'sinch-icon-present-to-all',
  'sinch-icon-print-disabled',
  'sinch-icon-qr-code-scanner',
  'sinch-icon-qr-code',
  'sinch-icon-read-more',
  'sinch-icon-ring-volume',
  'sinch-icon-rss-feed',
  'sinch-icon-screen-share',
  'sinch-icon-sentiment-satisfied-alt',
  'sinch-icon-speaker-phone',
  'sinch-icon-stay-current-landscape',
  'sinch-icon-stay-current-portrait',
  'sinch-icon-stay-primary-landscape',
  'sinch-icon-stay-primary-portrait',
  'sinch-icon-stop-screen-share',
  'sinch-icon-swap-calls',
  'sinch-icon-textsms',
  'sinch-icon-unsubscribe',
  'sinch-icon-voicemail',
  'sinch-icon-vpn-key',
  'sinch-icon-wifi-calling',
]

export const CommunicationIcons = Template(communicationIconsNames)

CommunicationIcons.parameters = {
  docs: {
    source: {
      code: `<>\n${communicationIconsNames.map((ic) => `  <${ic}></${ic}>`).join('\n')}\n</>`,
    },
  },
}

const deviceIconNames = [
  'sinch-icon-wifi-tethering',
  'sinch-icon-wifi-lock',
  'sinch-icon-widgets',
  'sinch-icon-wallpaper',
  'sinch-icon-usb',
  'sinch-icon-thermostat',
  'sinch-icon-storage',
  'sinch-icon-signal-wifi-off',
  'sinch-icon-signal-wifi-4-bar-lock',
  'sinch-icon-signal-wifi-4-bar',
  'sinch-icon-signal-cellular-off',
  'sinch-icon-signal-cellular-null',
  'sinch-icon-signal-cellular-no-sim',
  'sinch-icon-signal-cellular-connected-no-internet-4-bar',
  'sinch-icon-signal-cellular-alt',
  'sinch-icon-signal-cellular-4-bar',
  'sinch-icon-settings-system-daydream',
  'sinch-icon-sd-storage',
  'sinch-icon-screen-rotation',
  'sinch-icon-screen-lock-rotation',
  'sinch-icon-screen-lock-portrait',
  'sinch-icon-screen-lock-landscape',
  'sinch-icon-nfc',
  'sinch-icon-mobile-off',
  'sinch-icon-mobile-friendly',
  'sinch-icon-location-searching',
  'sinch-icon-location-disabled',
  'sinch-icon-graphic-eq',
  'sinch-icon-gps-off',
  'sinch-icon-gps-not-fixed',
  'sinch-icon-gps-fixed',
  'sinch-icon-dvr',
  'sinch-icon-devices',
  'sinch-icon-developer-mode',
  'sinch-icon-data-usage',
  'sinch-icon-brightness-medium',
  'sinch-icon-brightness-low',
  'sinch-icon-brightness-high',
  'sinch-icon-brightness-auto',
  'sinch-icon-bluetooth-searching',
  'sinch-icon-bluetooth-disabled',
  'sinch-icon-bluetooth-connected',
  'sinch-icon-bluetooth',
  'sinch-icon-battery-unknown',
  'sinch-icon-battery-std',
  'sinch-icon-battery-full',
  'sinch-icon-battery-charging-full',
  'sinch-icon-battery-alert',
  'sinch-icon-airplanemode-inactive',
  'sinch-icon-airplanemode-active',
  'sinch-icon-add-to-home-screen',
  'sinch-icon-add-alarm',
  'sinch-icon-ad-units',
  'sinch-icon-access-time',
  'sinch-icon-access-alarms',
  'sinch-icon-access-alarm',
]

export const DeviceIcons = Template(deviceIconNames)

DeviceIcons.parameters = {
  docs: {
    source: {
      code: `<>\n${deviceIconNames.map((ic) => `  <${ic}></${ic}>`).join('\n')}\n</>`,
    },
  },
}

const socialIconNames = [
  'sinch-icon-6-ft-apart',
  'sinch-icon-architecture',
  'sinch-icon-cake',
  'sinch-icon-clean-hands',
  'sinch-icon-connect-without-contact',
  'sinch-icon-construction',
  'sinch-icon-coronavirus',
  'sinch-icon-deck',
  'sinch-icon-domain',
  'sinch-icon-elderly',
  'sinch-icon-emoji-emotions',
  'sinch-icon-emoji-events',
  'sinch-icon-emoji-flags',
  'sinch-icon-emoji-food-beverage',
  'sinch-icon-emoji-nature',
  'sinch-icon-emoji-objects',
  'sinch-icon-emoji-people',
  'sinch-icon-emoji-symbols',
  'sinch-icon-emoji-transportation',
  'sinch-icon-engineering',
  'sinch-icon-facebook',
  'sinch-icon-fireplace',
  'sinch-icon-follow-the-signs',
  'sinch-icon-group-add',
  'sinch-icon-group',
  'sinch-icon-groups',
  'sinch-icon-history-edu',
  'sinch-icon-king-bed',
  'sinch-icon-location-city',
  'sinch-icon-luggage',
  'sinch-icon-masks',
  'sinch-icon-military-tech',
  'sinch-icon-mood-bad',
  'sinch-icon-mood',
  'sinch-icon-nights-stay',
  'sinch-icon-no-luggage',
  'sinch-icon-notifications-active',
  'sinch-icon-notifications-none',
  'sinch-icon-notifications-off',
  'sinch-icon-notifications-paused',
  'sinch-icon-notifications',
  'sinch-icon-outdoor-grill',
  'sinch-icon-pages',
  'sinch-icon-party-mode',
  'sinch-icon-people-alt',
  'sinch-icon-people-outline',
  'sinch-icon-people',
  'sinch-icon-person-add-alt-1',
  'sinch-icon-person-add',
  'sinch-icon-person-outline',
  'sinch-icon-person-remove-alt-1',
  'sinch-icon-person-remove',
  'sinch-icon-person',
  'sinch-icon-plus-one',
  'sinch-icon-poll',
  'sinch-icon-precision-manufacturing',
  'sinch-icon-psychology',
  'sinch-icon-public-off',
  'sinch-icon-public',
  'sinch-icon-reduce-capacity',
  'sinch-icon-sanitizer',
  'sinch-icon-school',
  'sinch-icon-science',
  'sinch-icon-self-improvement',
  'sinch-icon-sentiment-dissatisfied',
  'sinch-icon-sentiment-neutral',
  'sinch-icon-sentiment-satisfied',
  'sinch-icon-sentiment-very-dissatisfied',
  'sinch-icon-sentiment-very-satisfied',
  'sinch-icon-share',
  'sinch-icon-sick',
  'sinch-icon-single-bed',
  'sinch-icon-sports-baseball',
  'sinch-icon-sports-basketball',
  'sinch-icon-sports-cricket',
  'sinch-icon-sports-esports',
  'sinch-icon-sports-football',
  'sinch-icon-sports-golf',
  'sinch-icon-sports-handball',
  'sinch-icon-sports-hockey',
  'sinch-icon-sports-kabaddi',
  'sinch-icon-sports-mma',
  'sinch-icon-sports-motorsports',
  'sinch-icon-sports-rugby',
  'sinch-icon-sports-soccer',
  'sinch-icon-sports-tennis',
  'sinch-icon-sports-volleyball',
  'sinch-icon-sports',
  'sinch-icon-thumb-down-alt',
  'sinch-icon-thumb-up-alt',
  'sinch-icon-whatshot',
]

export const SocialIcons = Template(socialIconNames)

SocialIcons.parameters = {
  docs: {
    source: {
      code: `<>\n${deviceIconNames.map((ic) => `  <${ic}></${ic}>`).join('\n')}\n</>`,
    },
  },
}
