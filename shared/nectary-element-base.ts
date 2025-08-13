export type SinchElementName = `sinch-${string}`

export const isSinchElementName = (value: string): value is SinchElementName => {
  return value.startsWith('sinch-')
}

export const sinchElementNameToBase = (value: SinchElementName): string => {
  return value.split('sinch-')[1]
}

export class NectaryElementBase extends HTMLElement {
  private static _isGlobal = false

  static get elementName(): SinchElementName {
    throw new Error(
      `Class ${this.name} must implement static getter 'elementName'`
    )
  }

  static get isGlobal() {
    return this._isGlobal
  }

  static set isGlobal(value: boolean) {
    this._isGlobal = value
  }
}
