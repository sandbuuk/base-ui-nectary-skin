import { useRef } from '@storybook/addons'
import type { TSinchIconElement } from '@sinch-engage/nectary/icons/types'
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
import '@sinch-engage/nectary/icons/toggle-on'
import '@sinch-engage/nectary/icons/toggle-off'
import '@sinch-engage/nectary/icons/star-half'
import '@sinch-engage/nectary/icons/star-border'
import '@sinch-engage/nectary/icons/radio-button-unchecked'
import '@sinch-engage/nectary/icons/radio-button-checked'
import '@sinch-engage/nectary/icons/indeterminate-check-box'
import '@sinch-engage/nectary/icons/check-box-outline-blank'
import '@sinch-engage/nectary/icons/check-box'
import '@sinch-engage/nectary/icons/web-asset'
import '@sinch-engage/nectary/icons/web'
import '@sinch-engage/nectary/icons/volume-mute'
import '@sinch-engage/nectary/icons/volume-down'
import '@sinch-engage/nectary/icons/videocam-off'
import '@sinch-engage/nectary/icons/videocam'
import '@sinch-engage/nectary/icons/video-settings'
import '@sinch-engage/nectary/icons/video-library'
import '@sinch-engage/nectary/icons/video-label'
import '@sinch-engage/nectary/icons/video-call'
import '@sinch-engage/nectary/icons/surround-sound'
import '@sinch-engage/nectary/icons/subtitles'
import '@sinch-engage/nectary/icons/subscriptions'
import '@sinch-engage/nectary/icons/stop-circle'
import '@sinch-engage/nectary/icons/speed'
import '@sinch-engage/nectary/icons/sort-by-alpha'
import '@sinch-engage/nectary/icons/snooze'
import '@sinch-engage/nectary/icons/slow-motion-video'
import '@sinch-engage/nectary/icons/skip-previous'
import '@sinch-engage/nectary/icons/skip-next'
import '@sinch-engage/nectary/icons/shuffle'
import '@sinch-engage/nectary/icons/replay-5'
import '@sinch-engage/nectary/icons/replay-30'
import '@sinch-engage/nectary/icons/replay-10'
import '@sinch-engage/nectary/icons/replay'
import '@sinch-engage/nectary/icons/repeat-one'
import '@sinch-engage/nectary/icons/repeat'
import '@sinch-engage/nectary/icons/remove-from-queue'
import '@sinch-engage/nectary/icons/recent-actors'
import '@sinch-engage/nectary/icons/radio'
import '@sinch-engage/nectary/icons/queue-play-next'
import '@sinch-engage/nectary/icons/queue-music'
import '@sinch-engage/nectary/icons/queue'
import '@sinch-engage/nectary/icons/playlist-play'
import '@sinch-engage/nectary/icons/playlist-add-check'
import '@sinch-engage/nectary/icons/playlist-add'
import '@sinch-engage/nectary/icons/play-circle-filled'
import '@sinch-engage/nectary/icons/play-arrow'
import '@sinch-engage/nectary/icons/pause-circle-filled'
import '@sinch-engage/nectary/icons/pause'
import '@sinch-engage/nectary/icons/note'
import '@sinch-engage/nectary/icons/not-interested'
import '@sinch-engage/nectary/icons/new-releases'
import '@sinch-engage/nectary/icons/music-video'
import '@sinch-engage/nectary/icons/movie'
import '@sinch-engage/nectary/icons/missed-video-call'
import '@sinch-engage/nectary/icons/mic-off'
import '@sinch-engage/nectary/icons/mic'
import '@sinch-engage/nectary/icons/loop'
import '@sinch-engage/nectary/icons/library-music'
import '@sinch-engage/nectary/icons/library-books'
import '@sinch-engage/nectary/icons/library-add-check'
import '@sinch-engage/nectary/icons/library-add'
import '@sinch-engage/nectary/icons/high-quality'
import '@sinch-engage/nectary/icons/hearing-disabled'
import '@sinch-engage/nectary/icons/hearing'
import '@sinch-engage/nectary/icons/hd'
import '@sinch-engage/nectary/icons/games'
import '@sinch-engage/nectary/icons/forward-5'
import '@sinch-engage/nectary/icons/forward-30'
import '@sinch-engage/nectary/icons/forward-10'
import '@sinch-engage/nectary/icons/fiber-smart-record'
import '@sinch-engage/nectary/icons/fiber-pin'
import '@sinch-engage/nectary/icons/fiber-new'
import '@sinch-engage/nectary/icons/fiber-manual-record'
import '@sinch-engage/nectary/icons/fiber-dvr'
import '@sinch-engage/nectary/icons/featured-video'
import '@sinch-engage/nectary/icons/featured-play-list'
import '@sinch-engage/nectary/icons/fast-rewind'
import '@sinch-engage/nectary/icons/fast-forward'
import '@sinch-engage/nectary/icons/explicit'
import '@sinch-engage/nectary/icons/equalizer'
import '@sinch-engage/nectary/icons/control-camera'
import '@sinch-engage/nectary/icons/closed-caption-disabled'
import '@sinch-engage/nectary/icons/closed-caption'
import '@sinch-engage/nectary/icons/call-to-action'
import '@sinch-engage/nectary/icons/branding-watermark'
import '@sinch-engage/nectary/icons/av-timer'
import '@sinch-engage/nectary/icons/art-track'
import '@sinch-engage/nectary/icons/album'
import '@sinch-engage/nectary/icons/airplay'
import '@sinch-engage/nectary/icons/add-to-queue'
import '@sinch-engage/nectary/icons/5g'
import '@sinch-engage/nectary/icons/4k'
import '@sinch-engage/nectary/icons/zoom-out-map'
import '@sinch-engage/nectary/icons/wrong-location'
import '@sinch-engage/nectary/icons/wine-bar'
import '@sinch-engage/nectary/icons/two-wheeler'
import '@sinch-engage/nectary/icons/trip-origin'
import '@sinch-engage/nectary/icons/transit-enterexit'
import '@sinch-engage/nectary/icons/transfer-within-a-station'
import '@sinch-engage/nectary/icons/tram'
import '@sinch-engage/nectary/icons/train'
import '@sinch-engage/nectary/icons/traffic'
import '@sinch-engage/nectary/icons/terrain'
import '@sinch-engage/nectary/icons/subway'
import '@sinch-engage/nectary/icons/streetview'
import '@sinch-engage/nectary/icons/store-mall-directory'
import '@sinch-engage/nectary/icons/set-meal'
import '@sinch-engage/nectary/icons/satellite'
import '@sinch-engage/nectary/icons/run-circle'
import '@sinch-engage/nectary/icons/restaurant-menu'
import '@sinch-engage/nectary/icons/restaurant'
import '@sinch-engage/nectary/icons/rate-review'
import '@sinch-engage/nectary/icons/plumbing'
import '@sinch-engage/nectary/icons/place'
import '@sinch-engage/nectary/icons/pin-drop'
import '@sinch-engage/nectary/icons/pest-control-rodent'
import '@sinch-engage/nectary/icons/pest-control'
import '@sinch-engage/nectary/icons/person-pin-circle'
import '@sinch-engage/nectary/icons/person-pin'
import '@sinch-engage/nectary/icons/pedal-bike'
import '@sinch-engage/nectary/icons/not-listed-location'
import '@sinch-engage/nectary/icons/no-transfer'
import '@sinch-engage/nectary/icons/no-meals'
import '@sinch-engage/nectary/icons/near-me-disabled'
import '@sinch-engage/nectary/icons/near-me'
import '@sinch-engage/nectary/icons/navigation'
import '@sinch-engage/nectary/icons/my-location'
import '@sinch-engage/nectary/icons/museum'
import '@sinch-engage/nectary/icons/multiple-stop'
import '@sinch-engage/nectary/icons/moped'
import '@sinch-engage/nectary/icons/money'
import '@sinch-engage/nectary/icons/miscellaneous-services'
import '@sinch-engage/nectary/icons/menu-book'
import '@sinch-engage/nectary/icons/medical-services'
import '@sinch-engage/nectary/icons/maps-ugc'
import '@sinch-engage/nectary/icons/map'
import '@sinch-engage/nectary/icons/local-taxi'
import '@sinch-engage/nectary/icons/local-shipping'
import '@sinch-engage/nectary/icons/local-see'
import '@sinch-engage/nectary/icons/local-printshop'
import '@sinch-engage/nectary/icons/local-post-office'
import '@sinch-engage/nectary/icons/local-police'
import '@sinch-engage/nectary/icons/local-play'
import '@sinch-engage/nectary/icons/local-pizza'
import '@sinch-engage/nectary/icons/local-phone'
import '@sinch-engage/nectary/icons/local-pharmacy'
import '@sinch-engage/nectary/icons/local-parking'
import '@sinch-engage/nectary/icons/local-movies'
import '@sinch-engage/nectary/icons/local-mall'
import '@sinch-engage/nectary/icons/local-library'
import '@sinch-engage/nectary/icons/local-laundry-service'
import '@sinch-engage/nectary/icons/local-hotel'
import '@sinch-engage/nectary/icons/local-hospital'
import '@sinch-engage/nectary/icons/local-grocery-store'
import '@sinch-engage/nectary/icons/local-gas-station'
import '@sinch-engage/nectary/icons/local-florist'
import '@sinch-engage/nectary/icons/local-fire-department'
import '@sinch-engage/nectary/icons/local-drink'
import '@sinch-engage/nectary/icons/local-dining'
import '@sinch-engage/nectary/icons/local-convenience-store'
import '@sinch-engage/nectary/icons/local-car-wash'
import '@sinch-engage/nectary/icons/local-cafe'
import '@sinch-engage/nectary/icons/local-bar'
import '@sinch-engage/nectary/icons/local-atm'
import '@sinch-engage/nectary/icons/local-airport'
import '@sinch-engage/nectary/icons/local-activity'
import '@sinch-engage/nectary/icons/layers-clear'
import '@sinch-engage/nectary/icons/layers'
import '@sinch-engage/nectary/icons/hvac'
import '@sinch-engage/nectary/icons/hotel'
import '@sinch-engage/nectary/icons/home-repair-service'
import '@sinch-engage/nectary/icons/handyman'
import '@sinch-engage/nectary/icons/flight'
import '@sinch-engage/nectary/icons/fastfood'
import '@sinch-engage/nectary/icons/ev-station'
import '@sinch-engage/nectary/icons/electrical-services'
import '@sinch-engage/nectary/icons/electric-scooter'
import '@sinch-engage/nectary/icons/electric-rickshaw'
import '@sinch-engage/nectary/icons/electric-moped'
import '@sinch-engage/nectary/icons/electric-car'
import '@sinch-engage/nectary/icons/electric-bike'
import '@sinch-engage/nectary/icons/edit-road'
import '@sinch-engage/nectary/icons/edit-location'
import '@sinch-engage/nectary/icons/edit-attributes'
import '@sinch-engage/nectary/icons/directions-walk'
import '@sinch-engage/nectary/icons/directions-transit'
import '@sinch-engage/nectary/icons/directions-subway'
import '@sinch-engage/nectary/icons/directions-run'
import '@sinch-engage/nectary/icons/directions-railway'
import '@sinch-engage/nectary/icons/directions-car'
import '@sinch-engage/nectary/icons/directions-bus'
import '@sinch-engage/nectary/icons/directions-boat'
import '@sinch-engage/nectary/icons/directions-bike'
import '@sinch-engage/nectary/icons/directions'
import '@sinch-engage/nectary/icons/design-services'
import '@sinch-engage/nectary/icons/departure-board'
import '@sinch-engage/nectary/icons/compass-calibration'
import '@sinch-engage/nectary/icons/cleaning-services'
import '@sinch-engage/nectary/icons/category'
import '@sinch-engage/nectary/icons/bike-scooter'
import '@sinch-engage/nectary/icons/beenhere'
import '@sinch-engage/nectary/icons/atm'
import '@sinch-engage/nectary/icons/agriculture'
import '@sinch-engage/nectary/icons/add-road'
import '@sinch-engage/nectary/icons/add-location-alt'
import '@sinch-engage/nectary/icons/add-location'
import '@sinch-engage/nectary/icons/add-business'
import '@sinch-engage/nectary/icons/360'
import '@sinch-engage/nectary/icons/wheelchair-pickup'
import '@sinch-engage/nectary/icons/water-damage'
import '@sinch-engage/nectary/icons/wash'
import '@sinch-engage/nectary/icons/umbrella'
import '@sinch-engage/nectary/icons/tty'
import '@sinch-engage/nectary/icons/tapas'
import '@sinch-engage/nectary/icons/stroller'
import '@sinch-engage/nectary/icons/storefront'
import '@sinch-engage/nectary/icons/stairs'
import '@sinch-engage/nectary/icons/sports-bar'
import '@sinch-engage/nectary/icons/spa'
import '@sinch-engage/nectary/icons/soap'
import '@sinch-engage/nectary/icons/smoking-rooms'
import '@sinch-engage/nectary/icons/smoke-free'
import '@sinch-engage/nectary/icons/rv-hookup'
import '@sinch-engage/nectary/icons/room-service'
import '@sinch-engage/nectary/icons/room-preferences'
import '@sinch-engage/nectary/icons/roofing'
import '@sinch-engage/nectary/icons/rice-bowl'
import '@sinch-engage/nectary/icons/pool'
import '@sinch-engage/nectary/icons/no-stroller'
import '@sinch-engage/nectary/icons/no-photography'
import '@sinch-engage/nectary/icons/no-meeting-room'
import '@sinch-engage/nectary/icons/no-food'
import '@sinch-engage/nectary/icons/no-flash'
import '@sinch-engage/nectary/icons/no-drinks'
import '@sinch-engage/nectary/icons/no-cell'
import '@sinch-engage/nectary/icons/no-backpack'
import '@sinch-engage/nectary/icons/night-shelter'
import '@sinch-engage/nectary/icons/microwave'
import '@sinch-engage/nectary/icons/meeting-room'
import '@sinch-engage/nectary/icons/kitchen'
import '@sinch-engage/nectary/icons/house-siding'
import '@sinch-engage/nectary/icons/house'
import '@sinch-engage/nectary/icons/hot-tub'
import '@sinch-engage/nectary/icons/grass'
import '@sinch-engage/nectary/icons/golf-course'
import '@sinch-engage/nectary/icons/free-breakfast'
import '@sinch-engage/nectary/icons/foundation'
import '@sinch-engage/nectary/icons/food-bank'
import '@sinch-engage/nectary/icons/fitness-center'
import '@sinch-engage/nectary/icons/fire-extinguisher'
import '@sinch-engage/nectary/icons/fence'
import '@sinch-engage/nectary/icons/family-restroom'
import '@sinch-engage/nectary/icons/escalator-warning'
import '@sinch-engage/nectary/icons/escalator'
import '@sinch-engage/nectary/icons/elevator'
import '@sinch-engage/nectary/icons/dry'
import '@sinch-engage/nectary/icons/do-not-touch'
import '@sinch-engage/nectary/icons/do-not-step'
import '@sinch-engage/nectary/icons/countertops'
import '@sinch-engage/nectary/icons/corporate-fare'
import '@sinch-engage/nectary/icons/child-friendly'
import '@sinch-engage/nectary/icons/child-care'
import '@sinch-engage/nectary/icons/checkroom'
import '@sinch-engage/nectary/icons/charging-station'
import '@sinch-engage/nectary/icons/casino'
import '@sinch-engage/nectary/icons/carpenter'
import '@sinch-engage/nectary/icons/business-center'
import '@sinch-engage/nectary/icons/bento'
import '@sinch-engage/nectary/icons/beach-access'
import '@sinch-engage/nectary/icons/bathtub'
import '@sinch-engage/nectary/icons/backpack'
import '@sinch-engage/nectary/icons/baby-changing-station'
import '@sinch-engage/nectary/icons/apartment'
import '@sinch-engage/nectary/icons/all-inclusive'
import '@sinch-engage/nectary/icons/airport-shuttle'
import '@sinch-engage/nectary/icons/ac-unit'
import '@sinch-engage/nectary/icons/watch'
import '@sinch-engage/nectary/icons/videogame-asset'
import '@sinch-engage/nectary/icons/tv'
import '@sinch-engage/nectary/icons/toys'
import '@sinch-engage/nectary/icons/tablet-mac'
import '@sinch-engage/nectary/icons/tablet-android'
import '@sinch-engage/nectary/icons/tablet'
import '@sinch-engage/nectary/icons/speaker-group'
import '@sinch-engage/nectary/icons/speaker'
import '@sinch-engage/nectary/icons/smartphone'
import '@sinch-engage/nectary/icons/sim-card'
import '@sinch-engage/nectary/icons/security'
import '@sinch-engage/nectary/icons/scanner'
import '@sinch-engage/nectary/icons/router'
import '@sinch-engage/nectary/icons/power-input'
import '@sinch-engage/nectary/icons/point-of-sale'
import '@sinch-engage/nectary/icons/phonelink-off'
import '@sinch-engage/nectary/icons/phonelink'
import '@sinch-engage/nectary/icons/phone-iphone'
import '@sinch-engage/nectary/icons/phone-android'
import '@sinch-engage/nectary/icons/mouse'
import '@sinch-engage/nectary/icons/memory'
import '@sinch-engage/nectary/icons/laptop-windows'
import '@sinch-engage/nectary/icons/laptop-mac'
import '@sinch-engage/nectary/icons/laptop-chromebook'
import '@sinch-engage/nectary/icons/laptop'
import '@sinch-engage/nectary/icons/keyboard-voice'
import '@sinch-engage/nectary/icons/keyboard-tab'
import '@sinch-engage/nectary/icons/keyboard-return'
import '@sinch-engage/nectary/icons/keyboard-hide'
import '@sinch-engage/nectary/icons/keyboard-capslock'
import '@sinch-engage/nectary/icons/keyboard-backspace'
import '@sinch-engage/nectary/icons/keyboard'
import '@sinch-engage/nectary/icons/headset-mic'
import '@sinch-engage/nectary/icons/headset'
import '@sinch-engage/nectary/icons/gamepad'
import '@sinch-engage/nectary/icons/dock'
import '@sinch-engage/nectary/icons/devices-other'
import '@sinch-engage/nectary/icons/device-unknown'
import '@sinch-engage/nectary/icons/device-hub'
import '@sinch-engage/nectary/icons/developer-board'
import '@sinch-engage/nectary/icons/desktop-windows'
import '@sinch-engage/nectary/icons/desktop-mac'
import '@sinch-engage/nectary/icons/computer'
import '@sinch-engage/nectary/icons/cast-for-education'
import '@sinch-engage/nectary/icons/cast-connected'
import '@sinch-engage/nectary/icons/cast'
import '@sinch-engage/nectary/icons/browser-not-supported'
import '@sinch-engage/nectary/icons/wb-sunny'
import '@sinch-engage/nectary/icons/wb-iridescent'
import '@sinch-engage/nectary/icons/wb-incandescent'
import '@sinch-engage/nectary/icons/wb-cloudy'
import '@sinch-engage/nectary/icons/wb-auto'
import '@sinch-engage/nectary/icons/vignette'
import '@sinch-engage/nectary/icons/view-compact'
import '@sinch-engage/nectary/icons/view-comfy'
import '@sinch-engage/nectary/icons/tune'
import '@sinch-engage/nectary/icons/transform'
import '@sinch-engage/nectary/icons/tonality'
import '@sinch-engage/nectary/icons/timer-off'
import '@sinch-engage/nectary/icons/timer-3'
import '@sinch-engage/nectary/icons/timer-10'
import '@sinch-engage/nectary/icons/timer'
import '@sinch-engage/nectary/icons/timelapse'
import '@sinch-engage/nectary/icons/texture'
import '@sinch-engage/nectary/icons/tag-faces'
import '@sinch-engage/nectary/icons/switch-video'
import '@sinch-engage/nectary/icons/switch-camera'
import '@sinch-engage/nectary/icons/style'
import '@sinch-engage/nectary/icons/straighten'
import '@sinch-engage/nectary/icons/slideshow'
import '@sinch-engage/nectary/icons/shutter-speed'
import '@sinch-engage/nectary/icons/rotate-right'
import '@sinch-engage/nectary/icons/rotate-left'
import '@sinch-engage/nectary/icons/rotate-90-degrees-ccw'
import '@sinch-engage/nectary/icons/remove-red-eye'
import '@sinch-engage/nectary/icons/receipt-long'
import '@sinch-engage/nectary/icons/portrait'
import '@sinch-engage/nectary/icons/picture-as-pdf'
import '@sinch-engage/nectary/icons/photo-size-select-small'
import '@sinch-engage/nectary/icons/photo-size-select-large'
import '@sinch-engage/nectary/icons/photo-size-select-actual'
import '@sinch-engage/nectary/icons/photo-library'
import '@sinch-engage/nectary/icons/photo-filter'
import '@sinch-engage/nectary/icons/photo-camera'
import '@sinch-engage/nectary/icons/photo-album'
import '@sinch-engage/nectary/icons/photo'
import '@sinch-engage/nectary/icons/panorama-wide-angle'
import '@sinch-engage/nectary/icons/panorama-vertical'
import '@sinch-engage/nectary/icons/panorama-horizontal'
import '@sinch-engage/nectary/icons/panorama-fish-eye'
import '@sinch-engage/nectary/icons/panorama'
import '@sinch-engage/nectary/icons/palette'
import '@sinch-engage/nectary/icons/navigate-next'
import '@sinch-engage/nectary/icons/navigate-before'
import '@sinch-engage/nectary/icons/nature-people'
import '@sinch-engage/nectary/icons/nature'
import '@sinch-engage/nectary/icons/music-off'
import '@sinch-engage/nectary/icons/music-note'
import '@sinch-engage/nectary/icons/movie-filter'
import '@sinch-engage/nectary/icons/movie-creation'
import '@sinch-engage/nectary/icons/motion-photos-paused'
import '@sinch-engage/nectary/icons/motion-photos-pause'
import '@sinch-engage/nectary/icons/motion-photos-on'
import '@sinch-engage/nectary/icons/monochrome-photos'
import '@sinch-engage/nectary/icons/loupe'
import '@sinch-engage/nectary/icons/looks-two'
import '@sinch-engage/nectary/icons/looks-one'
import '@sinch-engage/nectary/icons/looks-6'
import '@sinch-engage/nectary/icons/looks-5'
import '@sinch-engage/nectary/icons/looks-4'
import '@sinch-engage/nectary/icons/looks-3'
import '@sinch-engage/nectary/icons/looks'
import '@sinch-engage/nectary/icons/linked-camera'
import '@sinch-engage/nectary/icons/lens'
import '@sinch-engage/nectary/icons/leak-remove'
import '@sinch-engage/nectary/icons/leak-add'
import '@sinch-engage/nectary/icons/landscape'
import '@sinch-engage/nectary/icons/iso'
import '@sinch-engage/nectary/icons/image-search'
import '@sinch-engage/nectary/icons/image-not-supported'
import '@sinch-engage/nectary/icons/image-aspect-ratio'
import '@sinch-engage/nectary/icons/image'
import '@sinch-engage/nectary/icons/healing'
import '@sinch-engage/nectary/icons/hdr-weak'
import '@sinch-engage/nectary/icons/hdr-strong'
import '@sinch-engage/nectary/icons/hdr-on'
import '@sinch-engage/nectary/icons/hdr-off'
import '@sinch-engage/nectary/icons/grid-on'
import '@sinch-engage/nectary/icons/grid-off'
import '@sinch-engage/nectary/icons/grain'
import '@sinch-engage/nectary/icons/gradient'
import '@sinch-engage/nectary/icons/flip-camera-ios'
import '@sinch-engage/nectary/icons/flip-camera-android'
import '@sinch-engage/nectary/icons/flip'
import '@sinch-engage/nectary/icons/flash-on'
import '@sinch-engage/nectary/icons/flash-off'
import '@sinch-engage/nectary/icons/flash-auto'
import '@sinch-engage/nectary/icons/flare'
import '@sinch-engage/nectary/icons/filter-vintage'
import '@sinch-engage/nectary/icons/filter-tilt-shift'
import '@sinch-engage/nectary/icons/filter-none'
import '@sinch-engage/nectary/icons/filter-hdr'
import '@sinch-engage/nectary/icons/filter-frames'
import '@sinch-engage/nectary/icons/filter-drama'
import '@sinch-engage/nectary/icons/filter-center-focus'
import '@sinch-engage/nectary/icons/filter-b-and-w'
import '@sinch-engage/nectary/icons/filter-9-plus'
import '@sinch-engage/nectary/icons/filter-9'
import '@sinch-engage/nectary/icons/filter-8'
import '@sinch-engage/nectary/icons/filter-7'
import '@sinch-engage/nectary/icons/filter-6'
import '@sinch-engage/nectary/icons/filter-5'
import '@sinch-engage/nectary/icons/filter-4'
import '@sinch-engage/nectary/icons/filter-3'
import '@sinch-engage/nectary/icons/filter-2'
import '@sinch-engage/nectary/icons/filter-1'
import '@sinch-engage/nectary/icons/filter'
import '@sinch-engage/nectary/icons/exposure-zero'
import '@sinch-engage/nectary/icons/exposure-plus-2'
import '@sinch-engage/nectary/icons/exposure-plus-1'
import '@sinch-engage/nectary/icons/exposure-neg-2'
import '@sinch-engage/nectary/icons/exposure-neg-1'
import '@sinch-engage/nectary/icons/exposure'
import '@sinch-engage/nectary/icons/euro'
import '@sinch-engage/nectary/icons/edit'
import '@sinch-engage/nectary/icons/details'
import '@sinch-engage/nectary/icons/dehaze'
import '@sinch-engage/nectary/icons/crop-square'
import '@sinch-engage/nectary/icons/crop-rotate'
import '@sinch-engage/nectary/icons/crop-portrait'
import '@sinch-engage/nectary/icons/crop-original'
import '@sinch-engage/nectary/icons/crop-landscape'
import '@sinch-engage/nectary/icons/crop-free'
import '@sinch-engage/nectary/icons/crop-din'
import '@sinch-engage/nectary/icons/crop-7-5'
import '@sinch-engage/nectary/icons/crop-5-4'
import '@sinch-engage/nectary/icons/crop-3-2'
import '@sinch-engage/nectary/icons/crop-16-9'
import '@sinch-engage/nectary/icons/crop'
import '@sinch-engage/nectary/icons/control-point-duplicate'
import '@sinch-engage/nectary/icons/control-point'
import '@sinch-engage/nectary/icons/compare'
import '@sinch-engage/nectary/icons/colorize'
import '@sinch-engage/nectary/icons/color-lens'
import '@sinch-engage/nectary/icons/collections-bookmark'
import '@sinch-engage/nectary/icons/collections'
import '@sinch-engage/nectary/icons/center-focus-weak'
import '@sinch-engage/nectary/icons/center-focus-strong'
import '@sinch-engage/nectary/icons/camera-roll'
import '@sinch-engage/nectary/icons/camera-rear'
import '@sinch-engage/nectary/icons/camera-front'
import '@sinch-engage/nectary/icons/camera-alt'
import '@sinch-engage/nectary/icons/camera'
import '@sinch-engage/nectary/icons/burst-mode'
import '@sinch-engage/nectary/icons/brush'
import '@sinch-engage/nectary/icons/broken-image'
import '@sinch-engage/nectary/icons/brightness-7'
import '@sinch-engage/nectary/icons/brightness-6'
import '@sinch-engage/nectary/icons/brightness-5'
import '@sinch-engage/nectary/icons/brightness-4'
import '@sinch-engage/nectary/icons/brightness-3'
import '@sinch-engage/nectary/icons/brightness-2'
import '@sinch-engage/nectary/icons/brightness-1'
import '@sinch-engage/nectary/icons/blur-on'
import '@sinch-engage/nectary/icons/blur-off'
import '@sinch-engage/nectary/icons/blur-linear'
import '@sinch-engage/nectary/icons/blur-circular'
import '@sinch-engage/nectary/icons/bedtime'
import '@sinch-engage/nectary/icons/audiotrack'
import '@sinch-engage/nectary/icons/assistant-photo'
import '@sinch-engage/nectary/icons/assistant'
import '@sinch-engage/nectary/icons/adjust'
import '@sinch-engage/nectary/icons/add-to-photos'
import '@sinch-engage/nectary/icons/add-photo-alternate'
import '@sinch-engage/nectary/icons/add-a-photo'
import '@sinch-engage/nectary/icons/wind-power'
import '@sinch-engage/nectary/icons/vertical-shades-closed'
import '@sinch-engage/nectary/icons/vertical-shades'
import '@sinch-engage/nectary/icons/solar-power'
import '@sinch-engage/nectary/icons/shield-moon'
import '@sinch-engage/nectary/icons/sensor-window'
import '@sinch-engage/nectary/icons/sensor-occupied'
import '@sinch-engage/nectary/icons/sensor-door'
import '@sinch-engage/nectary/icons/roller-shades-closed'
import '@sinch-engage/nectary/icons/roller-shades'
import '@sinch-engage/nectary/icons/propane-tank'
import '@sinch-engage/nectary/icons/propane'
import '@sinch-engage/nectary/icons/oil-barrel'
import '@sinch-engage/nectary/icons/nest-cam-wired-stand'
import '@sinch-engage/nectary/icons/mode-fan-off'
import '@sinch-engage/nectary/icons/heat-pump'
import '@sinch-engage/nectary/icons/gas-meter'
import '@sinch-engage/nectary/icons/energy-savings-leaf'
import '@sinch-engage/nectary/icons/electric-meter'
import '@sinch-engage/nectary/icons/electric-bolt'
import '@sinch-engage/nectary/icons/curtains-closed'
import '@sinch-engage/nectary/icons/curtains'
import '@sinch-engage/nectary/icons/broadcast-on-personal'
import '@sinch-engage/nectary/icons/broadcast-on-home'
import '@sinch-engage/nectary/icons/blinds-closed'
import '@sinch-engage/nectary/icons/blinds'
import '@sinch-engage/nectary/icons/auto-mode'
// {{icon import}}

/**
const placeholderNames = [
  // {{icon name}}
]
*/

export default {
  title: 'Components/Icons',
  argTypes: {},
} as Meta

const Template = (iconNames: string[]): Story => () => {
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

const homeIconNames = [
  'sinch-icon-auto-mode',
  'sinch-icon-blinds-closed',
  'sinch-icon-blinds',
  'sinch-icon-broadcast-on-home',
  'sinch-icon-broadcast-on-personal',
  'sinch-icon-curtains-closed',
  'sinch-icon-curtains',
  'sinch-icon-electric-bolt',
  'sinch-icon-electric-meter',
  'sinch-icon-energy-savings-leaf',
  'sinch-icon-gas-meter',
  'sinch-icon-heat-pump',
  'sinch-icon-mode-fan-off',
  'sinch-icon-nest-cam-wired-stand',
  'sinch-icon-oil-barrel',
  'sinch-icon-propane-tank',
  'sinch-icon-propane',
  'sinch-icon-roller-shades-closed',
  'sinch-icon-roller-shades',
  'sinch-icon-sensor-door',
  'sinch-icon-sensor-occupied',
  'sinch-icon-sensor-window',
  'sinch-icon-shield-moon',
  'sinch-icon-solar-power',
  'sinch-icon-vertical-shades-closed',
  'sinch-icon-vertical-shades',
  'sinch-icon-wind-power',
]

export const HomeIcons = Template(homeIconNames)

HomeIcons.parameters = {
  docs: {
    source: {
      code: `<>\n${homeIconNames.map((ic) => `  <${ic}></${ic}>`).join('\n')}\n</>`,
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
  'sinch-icon-access-alarm',
  'sinch-icon-access-alarms',
  'sinch-icon-access-time',
  'sinch-icon-ad-units',
  'sinch-icon-add-alarm',
  'sinch-icon-add-to-home-screen',
  'sinch-icon-airplanemode-active',
  'sinch-icon-airplanemode-inactive',
  'sinch-icon-battery-alert',
  'sinch-icon-battery-charging-full',
  'sinch-icon-battery-full',
  'sinch-icon-battery-std',
  'sinch-icon-battery-unknown',
  'sinch-icon-bluetooth-connected',
  'sinch-icon-bluetooth-disabled',
  'sinch-icon-bluetooth-searching',
  'sinch-icon-bluetooth',
  'sinch-icon-brightness-auto',
  'sinch-icon-brightness-high',
  'sinch-icon-brightness-low',
  'sinch-icon-brightness-medium',
  'sinch-icon-data-usage',
  'sinch-icon-developer-mode',
  'sinch-icon-devices',
  'sinch-icon-dvr',
  'sinch-icon-gps-fixed',
  'sinch-icon-gps-not-fixed',
  'sinch-icon-gps-off',
  'sinch-icon-graphic-eq',
  'sinch-icon-location-disabled',
  'sinch-icon-location-searching',
  'sinch-icon-mobile-friendly',
  'sinch-icon-mobile-off',
  'sinch-icon-nfc',
  'sinch-icon-screen-lock-landscape',
  'sinch-icon-screen-lock-portrait',
  'sinch-icon-screen-lock-rotation',
  'sinch-icon-screen-rotation',
  'sinch-icon-sd-storage',
  'sinch-icon-settings-system-daydream',
  'sinch-icon-signal-cellular-4-bar',
  'sinch-icon-signal-cellular-alt',
  'sinch-icon-signal-cellular-connected-no-internet-4-bar',
  'sinch-icon-signal-cellular-no-sim',
  'sinch-icon-signal-cellular-null',
  'sinch-icon-signal-cellular-off',
  'sinch-icon-signal-wifi-4-bar-lock',
  'sinch-icon-signal-wifi-4-bar',
  'sinch-icon-signal-wifi-off',
  'sinch-icon-storage',
  'sinch-icon-thermostat',
  'sinch-icon-usb',
  'sinch-icon-wallpaper',
  'sinch-icon-widgets',
  'sinch-icon-wifi-lock',
  'sinch-icon-wifi-tethering',
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
      code: `<>\n${socialIconNames.map((ic) => `  <${ic}></${ic}>`).join('\n')}\n</>`,
    },
  },
}

const toggleIconNames = [
  'sinch-icon-check-box-outline-blank',
  'sinch-icon-check-box',
  'sinch-icon-indeterminate-check-box',
  'sinch-icon-radio-button-checked',
  'sinch-icon-radio-button-unchecked',
  'sinch-icon-star-border',
  'sinch-icon-star-half',
  'sinch-icon-star-outline',
  'sinch-icon-star',
  'sinch-icon-toggle-off',
  'sinch-icon-toggle-on',
]

export const ToggleIcons = Template(toggleIconNames)

ToggleIcons.parameters = {
  docs: {
    source: {
      code: `<>\n${toggleIconNames.map((ic) => `  <${ic}></${ic}>`).join('\n')}\n</>`,
    },
  },
}

const audioVideoIconNames = [
  'sinch-icon-4k',
  'sinch-icon-5g',
  'sinch-icon-add-to-queue',
  'sinch-icon-airplay',
  'sinch-icon-album',
  'sinch-icon-art-track',
  'sinch-icon-av-timer',
  'sinch-icon-branding-watermark',
  'sinch-icon-call-to-action',
  'sinch-icon-closed-caption-disabled',
  'sinch-icon-closed-caption',
  'sinch-icon-control-camera',
  'sinch-icon-equalizer',
  'sinch-icon-explicit',
  'sinch-icon-fast-forward',
  'sinch-icon-fast-rewind',
  'sinch-icon-featured-play-list',
  'sinch-icon-featured-video',
  'sinch-icon-fiber-dvr',
  'sinch-icon-fiber-manual-record',
  'sinch-icon-fiber-new',
  'sinch-icon-fiber-pin',
  'sinch-icon-fiber-smart-record',
  'sinch-icon-forward-10',
  'sinch-icon-forward-30',
  'sinch-icon-forward-5',
  'sinch-icon-games',
  'sinch-icon-hd',
  'sinch-icon-hearing-disabled',
  'sinch-icon-hearing',
  'sinch-icon-high-quality',
  'sinch-icon-library-add-check',
  'sinch-icon-library-add',
  'sinch-icon-library-books',
  'sinch-icon-library-music',
  'sinch-icon-loop',
  'sinch-icon-mic-none',
  'sinch-icon-mic-off',
  'sinch-icon-mic',
  'sinch-icon-missed-video-call',
  'sinch-icon-movie',
  'sinch-icon-music-video',
  'sinch-icon-new-releases',
  'sinch-icon-not-interested',
  'sinch-icon-note',
  'sinch-icon-pause-circle-filled',
  'sinch-icon-pause-circle-outline',
  'sinch-icon-pause',
  'sinch-icon-play-arrow',
  'sinch-icon-play-circle-filled',
  'sinch-icon-play-circle-outline',
  'sinch-icon-playlist-add-check',
  'sinch-icon-playlist-add',
  'sinch-icon-playlist-play',
  'sinch-icon-queue-music',
  'sinch-icon-queue-play-next',
  'sinch-icon-queue',
  'sinch-icon-radio',
  'sinch-icon-recent-actors',
  'sinch-icon-remove-from-queue',
  'sinch-icon-repeat-one',
  'sinch-icon-repeat',
  'sinch-icon-replay-10',
  'sinch-icon-replay-30',
  'sinch-icon-replay-5',
  'sinch-icon-replay',
  'sinch-icon-shuffle',
  'sinch-icon-skip-next',
  'sinch-icon-skip-previous',
  'sinch-icon-slow-motion-video',
  'sinch-icon-snooze',
  'sinch-icon-sort-by-alpha',
  'sinch-icon-speed',
  'sinch-icon-stop-circle',
  'sinch-icon-stop',
  'sinch-icon-subscriptions',
  'sinch-icon-subtitles',
  'sinch-icon-surround-sound',
  'sinch-icon-video-call',
  'sinch-icon-video-label',
  'sinch-icon-video-library',
  'sinch-icon-video-settings',
  'sinch-icon-videocam-off',
  'sinch-icon-videocam',
  'sinch-icon-volume-down',
  'sinch-icon-volume-mute',
  'sinch-icon-volume-off',
  'sinch-icon-volume-up',
  'sinch-icon-web-asset',
  'sinch-icon-web',
]

export const AudioAndVideoIcons = Template(audioVideoIconNames)

AudioAndVideoIcons.parameters = {
  docs: {
    source: {
      code: `<>\n${audioVideoIconNames.map((ic) => `  <${ic}></${ic}>`).join('\n')}\n</>`,
    },
  },
}

const mapsIconNames = [
  'sinch-icon-360',
  'sinch-icon-add-business',
  'sinch-icon-add-location-alt',
  'sinch-icon-add-location',
  'sinch-icon-add-road',
  'sinch-icon-agriculture',
  'sinch-icon-alt-route',
  'sinch-icon-atm',
  'sinch-icon-beenhere',
  'sinch-icon-bike-scooter',
  'sinch-icon-category',
  'sinch-icon-cleaning-services',
  'sinch-icon-compass-calibration',
  'sinch-icon-departure-board',
  'sinch-icon-design-services',
  'sinch-icon-directions-bike',
  'sinch-icon-directions-boat',
  'sinch-icon-directions-bus',
  'sinch-icon-directions-car',
  'sinch-icon-directions-railway',
  'sinch-icon-directions-run',
  'sinch-icon-directions-subway',
  'sinch-icon-directions-transit',
  'sinch-icon-directions-walk',
  'sinch-icon-directions',
  'sinch-icon-edit-attributes',
  'sinch-icon-edit-location',
  'sinch-icon-edit-road',
  'sinch-icon-electric-bike',
  'sinch-icon-electric-car',
  'sinch-icon-electric-moped',
  'sinch-icon-electric-rickshaw',
  'sinch-icon-electric-scooter',
  'sinch-icon-electrical-services',
  'sinch-icon-ev-station',
  'sinch-icon-fastfood',
  'sinch-icon-flight',
  'sinch-icon-handyman',
  'sinch-icon-home-repair-service',
  'sinch-icon-hotel',
  'sinch-icon-hvac',
  'sinch-icon-layers-clear',
  'sinch-icon-layers',
  'sinch-icon-local-activity',
  'sinch-icon-local-airport',
  'sinch-icon-local-atm',
  'sinch-icon-local-bar',
  'sinch-icon-local-cafe',
  'sinch-icon-local-car-wash',
  'sinch-icon-local-convenience-store',
  'sinch-icon-local-dining',
  'sinch-icon-local-drink',
  'sinch-icon-local-fire-department',
  'sinch-icon-local-florist',
  'sinch-icon-local-gas-station',
  'sinch-icon-local-grocery-store',
  'sinch-icon-local-hospital',
  'sinch-icon-local-hotel',
  'sinch-icon-local-laundry-service',
  'sinch-icon-local-library',
  'sinch-icon-local-mall',
  'sinch-icon-local-movies',
  'sinch-icon-local-offer',
  'sinch-icon-local-parking',
  'sinch-icon-local-pharmacy',
  'sinch-icon-local-phone',
  'sinch-icon-local-pizza',
  'sinch-icon-local-play',
  'sinch-icon-local-police',
  'sinch-icon-local-post-office',
  'sinch-icon-local-printshop',
  'sinch-icon-local-see',
  'sinch-icon-local-shipping',
  'sinch-icon-local-taxi',
  'sinch-icon-map',
  'sinch-icon-maps-ugc',
  'sinch-icon-medical-services',
  'sinch-icon-menu-book',
  'sinch-icon-miscellaneous-services',
  'sinch-icon-money',
  'sinch-icon-moped',
  'sinch-icon-multiple-stop',
  'sinch-icon-museum',
  'sinch-icon-my-location',
  'sinch-icon-navigation',
  'sinch-icon-near-me-disabled',
  'sinch-icon-near-me',
  'sinch-icon-no-meals',
  'sinch-icon-no-transfer',
  'sinch-icon-not-listed-location',
  'sinch-icon-pedal-bike',
  'sinch-icon-person-pin-circle',
  'sinch-icon-person-pin',
  'sinch-icon-pest-control-rodent',
  'sinch-icon-pest-control',
  'sinch-icon-pin-drop',
  'sinch-icon-place',
  'sinch-icon-plumbing',
  'sinch-icon-rate-review',
  'sinch-icon-restaurant-menu',
  'sinch-icon-restaurant',
  'sinch-icon-run-circle',
  'sinch-icon-satellite',
  'sinch-icon-set-meal',
  'sinch-icon-store-mall-directory',
  'sinch-icon-streetview',
  'sinch-icon-subway',
  'sinch-icon-terrain',
  'sinch-icon-traffic',
  'sinch-icon-train',
  'sinch-icon-tram',
  'sinch-icon-transfer-within-a-station',
  'sinch-icon-transit-enterexit',
  'sinch-icon-trip-origin',
  'sinch-icon-two-wheeler',
  'sinch-icon-wine-bar',
  'sinch-icon-wrong-location',
  'sinch-icon-zoom-out-map',
]

export const MapsIcons = Template(mapsIconNames)

MapsIcons.parameters = {
  docs: {
    source: {
      code: `<>\n${mapsIconNames.map((ic) => `  <${ic}></${ic}>`).join('\n')}\n</>`,
    },
  },
}

const hardwareIconNames = [
  'sinch-icon-browser-not-supported',
  'sinch-icon-cast-connected',
  'sinch-icon-cast-for-education',
  'sinch-icon-cast',
  'sinch-icon-computer',
  'sinch-icon-desktop-mac',
  'sinch-icon-desktop-windows',
  'sinch-icon-developer-board',
  'sinch-icon-device-hub',
  'sinch-icon-device-unknown',
  'sinch-icon-devices-other',
  'sinch-icon-dock',
  'sinch-icon-gamepad',
  'sinch-icon-headset-mic',
  'sinch-icon-headset',
  'sinch-icon-keyboard-arrow-down',
  'sinch-icon-keyboard-arrow-left',
  'sinch-icon-keyboard-arrow-right',
  'sinch-icon-keyboard-arrow-up',
  'sinch-icon-keyboard-backspace',
  'sinch-icon-keyboard-capslock',
  'sinch-icon-keyboard-hide',
  'sinch-icon-keyboard-return',
  'sinch-icon-keyboard-tab',
  'sinch-icon-keyboard-voice',
  'sinch-icon-keyboard',
  'sinch-icon-laptop-chromebook',
  'sinch-icon-laptop-mac',
  'sinch-icon-laptop-windows',
  'sinch-icon-laptop',
  'sinch-icon-memory',
  'sinch-icon-mouse',
  'sinch-icon-phone-android',
  'sinch-icon-phone-iphone',
  'sinch-icon-phonelink-off',
  'sinch-icon-phonelink',
  'sinch-icon-point-of-sale',
  'sinch-icon-power-input',
  'sinch-icon-router',
  'sinch-icon-scanner',
  'sinch-icon-security',
  'sinch-icon-sim-card',
  'sinch-icon-smart-toy',
  'sinch-icon-smartphone',
  'sinch-icon-speaker-group',
  'sinch-icon-speaker',
  'sinch-icon-tablet-android',
  'sinch-icon-tablet-mac',
  'sinch-icon-tablet',
  'sinch-icon-toys',
  'sinch-icon-tv',
  'sinch-icon-videogame-asset',
  'sinch-icon-watch',
]

export const HardwareIcons = Template(hardwareIconNames)

HardwareIcons.parameters = {
  docs: {
    source: {
      code: `<>\n${hardwareIconNames.map((ic) => `  <${ic}></${ic}>`).join('\n')}\n</>`,
    },
  },
}

const placesIconNames = [
  'sinch-icon-ac-unit',
  'sinch-icon-airport-shuttle',
  'sinch-icon-all-inclusive',
  'sinch-icon-apartment',
  'sinch-icon-baby-changing-station',
  'sinch-icon-backpack',
  'sinch-icon-bathtub',
  'sinch-icon-beach-access',
  'sinch-icon-bento',
  'sinch-icon-business-center',
  'sinch-icon-carpenter',
  'sinch-icon-casino',
  'sinch-icon-charging-station',
  'sinch-icon-checkroom',
  'sinch-icon-child-care',
  'sinch-icon-child-friendly',
  'sinch-icon-corporate-fare',
  'sinch-icon-countertops',
  'sinch-icon-do-not-step',
  'sinch-icon-do-not-touch',
  'sinch-icon-dry',
  'sinch-icon-elevator',
  'sinch-icon-escalator-warning',
  'sinch-icon-escalator',
  'sinch-icon-family-restroom',
  'sinch-icon-fence',
  'sinch-icon-fire-extinguisher',
  'sinch-icon-fitness-center',
  'sinch-icon-food-bank',
  'sinch-icon-foundation',
  'sinch-icon-free-breakfast',
  'sinch-icon-golf-course',
  'sinch-icon-grass',
  'sinch-icon-hot-tub',
  'sinch-icon-house-siding',
  'sinch-icon-house',
  'sinch-icon-kitchen',
  'sinch-icon-meeting-room',
  'sinch-icon-microwave',
  'sinch-icon-night-shelter',
  'sinch-icon-no-backpack',
  'sinch-icon-no-cell',
  'sinch-icon-no-drinks',
  'sinch-icon-no-flash',
  'sinch-icon-no-food',
  'sinch-icon-no-meeting-room',
  'sinch-icon-no-photography',
  'sinch-icon-no-stroller',
  'sinch-icon-pool',
  'sinch-icon-rice-bowl',
  'sinch-icon-roofing',
  'sinch-icon-room-preferences',
  'sinch-icon-room-service',
  'sinch-icon-rv-hookup',
  'sinch-icon-smoke-free',
  'sinch-icon-smoking-rooms',
  'sinch-icon-soap',
  'sinch-icon-spa',
  'sinch-icon-sports-bar',
  'sinch-icon-stairs',
  'sinch-icon-storefront',
  'sinch-icon-stroller',
  'sinch-icon-tapas',
  'sinch-icon-tty',
  'sinch-icon-umbrella',
  'sinch-icon-wash',
  'sinch-icon-water-damage',
  'sinch-icon-wheelchair-pickup',
]

export const PlacesIcons = Template(placesIconNames)

PlacesIcons.parameters = {
  docs: {
    source: {
      code: `<>\n${placesIconNames.map((ic) => `  <${ic}></${ic}>`).join('\n')}\n</>`,
    },
  },
}

const imageIconNames = [
  'sinch-icon-add-a-photo',
  'sinch-icon-add-photo-alternate',
  'sinch-icon-add-to-photos',
  'sinch-icon-adjust',
  'sinch-icon-assistant-photo',
  'sinch-icon-assistant',
  'sinch-icon-audiotrack',
  'sinch-icon-bedtime',
  'sinch-icon-blur-circular',
  'sinch-icon-blur-linear',
  'sinch-icon-blur-off',
  'sinch-icon-blur-on',
  'sinch-icon-brightness-1',
  'sinch-icon-brightness-2',
  'sinch-icon-brightness-3',
  'sinch-icon-brightness-4',
  'sinch-icon-brightness-5',
  'sinch-icon-brightness-6',
  'sinch-icon-brightness-7',
  'sinch-icon-broken-image',
  'sinch-icon-brush',
  'sinch-icon-burst-mode',
  'sinch-icon-camera-alt',
  'sinch-icon-camera-front',
  'sinch-icon-camera-rear',
  'sinch-icon-camera-roll',
  'sinch-icon-camera',
  'sinch-icon-center-focus-strong',
  'sinch-icon-center-focus-weak',
  'sinch-icon-collections-bookmark',
  'sinch-icon-collections',
  'sinch-icon-color-lens',
  'sinch-icon-colorize',
  'sinch-icon-compare',
  'sinch-icon-control-point-duplicate',
  'sinch-icon-control-point',
  'sinch-icon-crop-16-9',
  'sinch-icon-crop-3-2',
  'sinch-icon-crop-5-4',
  'sinch-icon-crop-7-5',
  'sinch-icon-crop-din',
  'sinch-icon-crop-free',
  'sinch-icon-crop-landscape',
  'sinch-icon-crop-original',
  'sinch-icon-crop-portrait',
  'sinch-icon-crop-rotate',
  'sinch-icon-crop-square',
  'sinch-icon-crop',
  'sinch-icon-dehaze',
  'sinch-icon-details',
  'sinch-icon-edit',
  'sinch-icon-euro',
  'sinch-icon-exposure-neg-1',
  'sinch-icon-exposure-neg-2',
  'sinch-icon-exposure-plus-1',
  'sinch-icon-exposure-plus-2',
  'sinch-icon-exposure-zero',
  'sinch-icon-exposure',
  'sinch-icon-filter-1',
  'sinch-icon-filter-2',
  'sinch-icon-filter-3',
  'sinch-icon-filter-4',
  'sinch-icon-filter-5',
  'sinch-icon-filter-6',
  'sinch-icon-filter-7',
  'sinch-icon-filter-8',
  'sinch-icon-filter-9-plus',
  'sinch-icon-filter-9',
  'sinch-icon-filter-b-and-w',
  'sinch-icon-filter-center-focus',
  'sinch-icon-filter-drama',
  'sinch-icon-filter-frames',
  'sinch-icon-filter-hdr',
  'sinch-icon-filter-none',
  'sinch-icon-filter-tilt-shift',
  'sinch-icon-filter-vintage',
  'sinch-icon-filter',
  'sinch-icon-flare',
  'sinch-icon-flash-auto',
  'sinch-icon-flash-off',
  'sinch-icon-flash-on',
  'sinch-icon-flip-camera-android',
  'sinch-icon-flip-camera-ios',
  'sinch-icon-flip',
  'sinch-icon-gradient',
  'sinch-icon-grain',
  'sinch-icon-grid-off',
  'sinch-icon-grid-on',
  'sinch-icon-hdr-off',
  'sinch-icon-hdr-on',
  'sinch-icon-hdr-strong',
  'sinch-icon-hdr-weak',
  'sinch-icon-healing',
  'sinch-icon-image-aspect-ratio',
  'sinch-icon-image-not-supported',
  'sinch-icon-image-search',
  'sinch-icon-image',
  'sinch-icon-iso',
  'sinch-icon-landscape',
  'sinch-icon-leak-add',
  'sinch-icon-leak-remove',
  'sinch-icon-lens',
  'sinch-icon-linked-camera',
  'sinch-icon-looks-3',
  'sinch-icon-looks-4',
  'sinch-icon-looks-5',
  'sinch-icon-looks-6',
  'sinch-icon-looks-one',
  'sinch-icon-looks-two',
  'sinch-icon-looks',
  'sinch-icon-loupe',
  'sinch-icon-monochrome-photos',
  'sinch-icon-motion-photos-on',
  'sinch-icon-motion-photos-pause',
  'sinch-icon-motion-photos-paused',
  'sinch-icon-movie-creation',
  'sinch-icon-movie-filter',
  'sinch-icon-music-note',
  'sinch-icon-music-off',
  'sinch-icon-nature-people',
  'sinch-icon-nature',
  'sinch-icon-navigate-before',
  'sinch-icon-navigate-next',
  'sinch-icon-palette',
  'sinch-icon-panorama-fish-eye',
  'sinch-icon-panorama-horizontal',
  'sinch-icon-panorama-vertical',
  'sinch-icon-panorama-wide-angle',
  'sinch-icon-panorama',
  'sinch-icon-photo-album',
  'sinch-icon-photo-camera',
  'sinch-icon-photo-filter',
  'sinch-icon-photo-library',
  'sinch-icon-photo-size-select-actual',
  'sinch-icon-photo-size-select-large',
  'sinch-icon-photo-size-select-small',
  'sinch-icon-photo',
  'sinch-icon-picture-as-pdf',
  'sinch-icon-portrait',
  'sinch-icon-receipt-long',
  'sinch-icon-remove-red-eye',
  'sinch-icon-rotate-90-degrees-ccw',
  'sinch-icon-rotate-left',
  'sinch-icon-rotate-right',
  'sinch-icon-shutter-speed',
  'sinch-icon-slideshow',
  'sinch-icon-straighten',
  'sinch-icon-style',
  'sinch-icon-switch-camera',
  'sinch-icon-switch-video',
  'sinch-icon-tag-faces',
  'sinch-icon-texture',
  'sinch-icon-timelapse',
  'sinch-icon-timer-10',
  'sinch-icon-timer-3',
  'sinch-icon-timer-off',
  'sinch-icon-timer',
  'sinch-icon-tonality',
  'sinch-icon-transform',
  'sinch-icon-tune',
  'sinch-icon-view-comfy',
  'sinch-icon-view-compact',
  'sinch-icon-vignette',
  'sinch-icon-wb-auto',
  'sinch-icon-wb-cloudy',
  'sinch-icon-wb-incandescent',
  'sinch-icon-wb-iridescent',
  'sinch-icon-wb-sunny',
]

export const ImageIcons = Template(imageIconNames)

ImageIcons.parameters = {
  docs: {
    source: {
      code: `<>\n${imageIconNames.map((ic) => `  <${ic}></${ic}>`).join('\n')}\n</>`,
    },
  },
}
