import type { NectaryComponentVanilla } from '../types'

export const isSelectMenuOption = (el: Element): el is NectaryComponentVanilla<'sinch-select-menu-option'> => el.localName === 'sinch-select-menu-option'
