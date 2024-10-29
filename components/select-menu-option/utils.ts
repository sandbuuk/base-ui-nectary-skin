import type { TSinchSelectMenuOptionElement } from './types'

export const isSelectMenuOption = (el: Element): el is TSinchSelectMenuOptionElement => el.localName === 'sinch-select-menu-option'
