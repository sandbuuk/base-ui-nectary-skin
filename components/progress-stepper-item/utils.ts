import { getAttribute, getBooleanAttribute, updateAttribute, updateBooleanAttribute } from '../utils'

type TSinchProgressStepperItemStatus = 'inactive' | 'incomplete' | 'invalid' | 'complete'

export const ATTR_PROGRESS_STEPPER_ITEM_CHECKED = 'data-checked'
export const ATTR_PROGRESS_STEPPER_ITEM_STATUS = 'data-status'
export const ATTR_PROGRESS_STEPPER_ITEM_ACTIVE_DESCENDANT = 'data-active-descendant'

export const isProgressStepperItemChecked = ($el: Element) => getBooleanAttribute($el, ATTR_PROGRESS_STEPPER_ITEM_CHECKED)
export const setProgressStepperItemChecked = ($el: Element, isChecked: boolean) => updateBooleanAttribute($el, ATTR_PROGRESS_STEPPER_ITEM_CHECKED, isChecked)
export const isProgressStepperItemActive = ($el: Element) => getAttribute($el, ATTR_PROGRESS_STEPPER_ITEM_STATUS) !== 'inactive'
export const setProgressStepperItemStatus = ($el: Element, status: TSinchProgressStepperItemStatus) => updateAttribute($el, ATTR_PROGRESS_STEPPER_ITEM_STATUS, status)
export const isProgressStepperItemActiveDescendant = ($el: Element) => getBooleanAttribute($el, ATTR_PROGRESS_STEPPER_ITEM_ACTIVE_DESCENDANT)
export const setProgressStepperItemActiveDescendant = ($el: Element, isActiveDescendant: boolean) => updateBooleanAttribute($el, ATTR_PROGRESS_STEPPER_ITEM_ACTIVE_DESCENDANT, isActiveDescendant)

