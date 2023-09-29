import type { TRouteTab } from 'docs-common'

declare let REQ_CHUNK_NAME: string

export const componentReq = import.meta.webpackContext!('./pages/components', {
  regExp: /^\.\/[^_]+\/.*\.mdx?$/,
  recursive: true,
  mode: 'lazy',
  chunkName: REQ_CHUNK_NAME,
})

export const pagesReq = import.meta.webpackContext!('./pages/_/', {
  regExp: /^\.\/\d{2}-[^/]+\/index.tsx?$/,
  recursive: true,
  mode: 'lazy',
  chunkName: REQ_CHUNK_NAME,
})

export const compositionsReq = import.meta.webpackContext!('./pages/compositions/', {
  regExp: /^\.\/[^_]+\/.*\.mdx?$/,
  recursive: true,
  mode: 'lazy',
  chunkName: REQ_CHUNK_NAME,
})

const componentsRoutes = componentReq.keys().map((key) => {
  const name = key.replace(/^\.\/(.+?)\/.+$/, '$1')
  const tab = key.replace(/^\.\/.+\/\d{2}-(.+).mdx?$/, '$1')
  const route = `/components/${name.toLowerCase()}/${tab.toLowerCase()}`

  return {
    key,
    name,
    route,
    tab,
  }
})

const pagesRoutes = pagesReq.keys().map((key) => {
  const name = key.replace(/^\.\/\d{2}-(.+?)\/index.tsx?$/, '$1')
  const route = `/components/_/${name.toLowerCase()}`

  return {
    key,
    name,
    route,
  }
})

const compositionsRoutes = compositionsReq.keys().map((key) => {
  const name = key.replace(/^\.\/(.+?)\/.+$/, '$1')
  const tab = key.replace(/^\.\/.+\/\d{2}-(.+).mdx?$/, '$1')
  const route = `/compositions/${name.toLowerCase()}/${tab.toLowerCase()}`
  const printedName = name.replace(/([a-z\d])([A-Z])/g, '$1 $2')

  return {
    key,
    name: printedName,
    route,
    tab,
  }
})

const printTabName = (value: string) => {
  return value.replaceAll('_', ' ')
}

const componentTabs = componentsRoutes.reduce((res, { name, tab, route }) => {
  if (!Reflect.has(res, name)) {
    res[name] = []
  }

  res[name].push({
    value: tab,
    text: printTabName(tab),
    route,
  })

  return res
}, {} as Record<string, TRouteTab[]>)

const componentsRouteNameMap = componentsRoutes.reduce((res, { route, name }) => {
  res[route] = name

  return res
}, {} as Record<string, string | undefined>)

export const getRouteTabs = (route: string) => {
  const name = componentsRouteNameMap[route] ?? null

  if (name === null) {
    return null
  }

  return componentTabs[name] ?? null
}

export const getRouteTitle = (route: string) => {
  const name = componentsRouteNameMap[route] ?? null

  return name
}

const compositionsTabs = compositionsRoutes.reduce((res, { name, tab, route }) => {
  if (!Reflect.has(res, name)) {
    res[name] = []
  }

  res[name].push({
    value: tab,
    text: printTabName(tab),
    route,
  })

  return res
}, {} as Record<string, TRouteTab[]>)

const compositionsRouteNameMap = compositionsRoutes.reduce((res, { route, name }) => {
  res[route] = name

  return res
}, {} as Record<string, string | undefined>)

export const getCompositionsRouteTabs = (route: string) => {
  const name = compositionsRouteNameMap[route] ?? null

  if (name === null) {
    return null
  }

  return compositionsTabs[name] ?? null
}

export const getCompositionsRouteTitle = (route: string) => {
  const name = compositionsRouteNameMap[route] ?? null

  return name
}

export const getComponentsRoutes = () => {
  return componentsRoutes
}

export const getPagesRoutes = () => {
  return pagesRoutes
}

export const getCompositionsRoutes = () => {
  return compositionsRoutes
}
