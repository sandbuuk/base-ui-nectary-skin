import pkg from '@sinch-engage/nectary/package.json'
import type { TRouteTab } from 'docs-common'

declare let REQ_CHUNK_NAME: string

export const componentReq = import.meta.webpackContext!('./pages/', {
  regExp: /^\.\/[^_]+\/.*\.mdx?$/,
  recursive: true,
  mode: 'lazy',
  chunkName: REQ_CHUNK_NAME,
})

export const pagesReq = import.meta.webpackContext!('./pages/_/', {
  regExp: /^\.\/.*\/.*\.tsx?$/,
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
  const name = key.replace(/^\.\/\d{2}-(.+?)\/.+$/, '$1')
  const route = `/components/_/${name.toLowerCase()}`

  return {
    key,
    name,
    route,
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

const routeNameMap = componentsRoutes.reduce((res, { route, name }) => {
  res[route] = name

  return res
}, {} as Record<string, string>)

export const getRouteTabs = (route: string) => {
  const name = routeNameMap[route] ?? null

  if (name === null) {
    return null
  }

  return componentTabs[name] ?? null
}

export const getComponentsRoutes = () => {
  console.log('getSidebarItems', pkg.version)

  return componentsRoutes
}

export const getPagesRoutes = () => {
  return pagesRoutes
}
