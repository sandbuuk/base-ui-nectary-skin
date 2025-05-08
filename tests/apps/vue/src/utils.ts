export const getSearchKey = (param: string, prefix: string) => {
  const shouldAddPrefix = prefix.length > 0 && location.pathname.startsWith('/composition')
  const prefixedKey = shouldAddPrefix ? `${prefix}-${param}` : param
  return prefixedKey
}

