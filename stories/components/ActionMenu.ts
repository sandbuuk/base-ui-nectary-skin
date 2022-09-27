// import { orientationValues } from '@sinch-engage/nectary/popover/utils'
// import { useArgs, useRef } from '@storybook/addons'
// import { useStoryWrapper } from '../use-story-wrapper'
// import type { Meta, Story } from '@storybook/html'
// import '@sinch-engage/nectary/button'
// import '@sinch-engage/nectary/action-menu'
// import '@sinch-engage/nectary/action-menu-option'
// import '@sinch-engage/nectary/icons/open-in-new'

// export default {
//   title: 'Components/ActionMenu',
//   argTypes: {
//     open: {
//       description: 'Is action-menu open',
//       control: 'boolean',
//     },
//     modal: {
//       description: 'Action Menu modal mode',
//       control: 'boolean',
//     },
//     orientation: {
//       description: 'Dropdown Orientation',
//       control: 'select',
//       options: orientationValues,
//     },
//     maxVisibleItems: {
//       description: 'Number of visible items in the list',
//       control: { type: 'range', min: 1, max: 5, step: 1 },
//     },
//     'on-close': {
//       description: 'Close event handler',
//       action: 'on-close',
//     },
//   },
//   parameters: {
//     docs: {
//       description: {
//         component: 'Action Menu component',
//       },
//       source: {
//         type: 'code',
//       },
//     },
//   },
// } as Meta

// const Template = (innerHTML: string): Story => () => {
//   const [{
//     open,
//     maxVisibleItems,
//     orientation,
//     modal,
//   }, updateArgs] = useArgs()

//   const $wrapper = useStoryWrapper()
//   const actionmenuRef = useRef<HTMLElementTagNameMap['sinch-action-menu'] | null>(null)

//   if (actionmenuRef.current === null) {
//     const $actionmenu = document.createElement('sinch-action-menu')

//     $actionmenu.innerHTML = innerHTML

//     $actionmenu.querySelector('sinch-button')?.addEventListener('click', (e: Event) => {
//       e.stopPropagation()
//       // updateArgs({ open: true })
//       $actionmenu.setAttribute('open', '')
//     })

//     $actionmenu.addEventListener('click', () => {
//       updateArgs({ open: false })
//     })

//     $actionmenu.addEventListener('-close', () => {
//       updateArgs({ open: false })
//       // https://github.com/storybookjs/storybook/issues/11657
//       setImmediate((el) => (el as HTMLElement)?.focus(), document.activeElement)
//     })

//     $wrapper.appendChild($actionmenu)
//     actionmenuRef.current = $actionmenu
//   }

//   const $actionmenu = actionmenuRef.current!

//   $actionmenu.modal = modal
//   $actionmenu.open = open
//   $actionmenu.orientation = orientation
//   $actionmenu.maxVisibleItems = maxVisibleItems

//   return $wrapper
// }

// const actionMenuInnerHTML = `
//   <sinch-button text="Button" type="cta-secondary" slot="target"></sinch-button>
//   <sinch-action-menu-option text="Option 1 value long" slot="option">
//     <sinch-icon-open-in-new slot="icon"></sinch-icon-open-in-new>
//   </sinch-action-menu-option>
//   <sinch-action-menu-option text="Option 2 value" slot="option" disabled>
//     <sinch-icon-open-in-new slot="icon"></sinch-icon-open-in-new>
//   </sinch-action-menu-option>
//   <sinch-action-menu-option text="Option 3 value" slot="option"></sinch-action-menu-option>
//   <sinch-action-menu-option text="Option 4 value" slot="option"></sinch-action-menu-option>
// `

// export const ActionMenu = Template(actionMenuInnerHTML)

// ActionMenu.args = {
//   open: false,
//   modal: true,
//   orientation: 'bottom-right',
// }

// ActionMenu.parameters = {
//   docs: {
//     source: {
//       code: `<sinch-action-menu modal open={isOpen} on-close={onClose}>
//   <sinch-button text="Button" type="cta-secondary" slot="target"></sinch-button>
//   <sinch-action-menu-option onClick={onClick} text="Option 1 value long" slot="option">
//     <sinch-icon-open-in-new slot="icon"></sinch-icon-open-in-new>
//   </sinch-action-menu-option>
//   <sinch-action-menu-option onClick={onClick} text="Option 2 value" slot="option" disabled>
//     <sinch-icon-open-in-new slot="icon"></sinch-icon-open-in-new>
//   </sinch-action-menu-option>
//   <sinch-action-menu-option onClick={onClick} text="Option 3 value" slot="option"></sinch-action-menu-option>
//   <sinch-action-menu-option onClick={onClick} text="Option 4 value" slot="option"></sinch-action-menu-option>
// </sinch-action-menu>`,
//     },
//   },
// }
