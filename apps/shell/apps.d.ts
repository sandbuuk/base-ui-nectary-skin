type TMicroFrontendAttributes = {
  token: string,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-quickstarts-app': TMicroFrontendAttributes,
    }
  }
}

export {}
