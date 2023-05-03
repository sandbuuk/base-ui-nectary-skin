declare module '*.html' {
  const value: string
  export default value
}

declare module '*.css' {
}

declare module '*.css?theme' {
  const obj: {
    use(param: any): void,
    unuse(): void,
  }
  export default obj
}
