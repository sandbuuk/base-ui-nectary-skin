export const isSinchActionMenuOption = (el: EventTarget | null): el is HTMLElementTagNameMap['sinch-action-menu-option'] => {
  return el instanceof Element && el.tagName === 'SINCH-ACTION-MENU-OPTION'
}
