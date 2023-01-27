type TComposeSearchString = {
  (params: URLSearchParams, path: string): string,
  (params: string, path: string): string,
}

export const composeSearchString: TComposeSearchString = (params, path) => {
  let searchParams: URLSearchParams

  if (typeof params === 'string') {
    searchParams = new URLSearchParams(params)
  } else {
    searchParams = params
  }

  searchParams.delete('path')
  searchParams.sort()

  return `?${searchParams}&path=${path}`
}
