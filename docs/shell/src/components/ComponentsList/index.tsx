import { Loading, createResource } from 'docs-common'
import { Suspense, useRef } from 'react'
import { versions } from '../../utils'
import { NavigationGroup } from '../NavigationGroup'
import { NavigationItem } from '../NavigationItem'
import { NavigationList } from '../NavigationList'
import type { TResource } from 'docs-common'
import type { FC } from 'react'
import { useNavigateVersion } from '~/hooks'

type TSidebarItem = {
  name: string,
  route: string,
  key: string,
}

type TNavigationItems = {
  items: TSidebarItem[],
}

const NavigationItems: FC<TNavigationItems> = ({ items }) => {
  let prevName = ''

  return (
    <>
      {items.map(({ route, name }) => {
        if (prevName === name) {
          return null
        }

        prevName = name

        return (
          <NavigationItem
            key={name}
            path={route}
            text={name}
          />
        )
      })}
    </>
  )
}

type TResourceNavigationGroup = {
  resource: TResource<TSidebarItem[] | null>,
  text: string,
}

const ResourceNavigationGroup: FC<TResourceNavigationGroup> = ({ resource, text }) => {
  const items = resource.read()

  if (items === null) {
    return null
  }

  return (
    <NavigationGroup text={text}>
      <NavigationList>
        <NavigationItems items={items}/>
      </NavigationList>
    </NavigationGroup>
  )
}

type TResourceNaigationItems = {
  resource: TResource<TSidebarItem[] | null>,
}

const ReourceNavigationItems: FC<TResourceNaigationItems> = ({ resource }) => {
  const items = resource.read()

  if (items === null) {
    return null
  }

  return (
    <NavigationItems items={items}/>
  )
}

export const ComponentsList: FC = () => {
  const { versionValue } = useNavigateVersion()
  const versionValueRef = useRef('')
  const labComponentsRef = useRef<TResource<TSidebarItem[]>>()
  const componentsRef = useRef<TResource<TSidebarItem[]>>()
  const pagesRef = useRef<TResource<TSidebarItem[]>>()
  const compositionsRef = useRef<TResource<TSidebarItem[] | null>>()
  const reactComponentsRef = useRef<TResource<TSidebarItem[] | null>>()

  if (versionValueRef.current !== versionValue) {
    const promise = Reflect.get(versions, versionValue).bootstrap()

    const labComponents: Promise<TSidebarItem[]> = promise.then(({ getLabsComponentsRoutes }: any) => getLabsComponentsRoutes())
    const components: Promise<TSidebarItem[]> = promise.then(({ getComponentsRoutes }: any) => getComponentsRoutes())
    const pages: Promise<TSidebarItem[]> = promise.then(({ getPagesRoutes }: any) => getPagesRoutes())
    const compositions: Promise<TSidebarItem[] | null> = promise.then((mod: any) => mod.getCompositionsRoutes?.() ?? null)
    const reactComponents: Promise<TSidebarItem[] | null> = promise.then((mod: any) => mod.getReactComponentsRoutes?.() ?? null)

    labComponentsRef.current = createResource(labComponents)
    componentsRef.current = createResource(components)
    pagesRef.current = createResource(pages)
    compositionsRef.current = createResource(compositions)
    reactComponentsRef.current = createResource(reactComponents)
  }

  versionValueRef.current = versionValue

  return (
    <>
      <Suspense fallback={null}>
        <ResourceNavigationGroup text="Compositions" resource={compositionsRef.current!}/>
      </Suspense>

      <NavigationGroup text="Components">
        <Suspense fallback={<Loading/>}>
          <NavigationList>
            <ReourceNavigationItems resource={pagesRef.current!}/>
            <div className="divider"/>
            <ReourceNavigationItems resource={componentsRef.current!}/>
          </NavigationList>
        </Suspense>
      </NavigationGroup>

      <NavigationGroup text="Labs (WIP)">
        <Suspense fallback={<Loading/>}>
          <NavigationList>
            <NavigationItem path="/labComponents" text="About Labs"/>
            <div className="divider"/>

            <ReourceNavigationItems resource={labComponentsRef.current!}/>
          </NavigationList>
        </Suspense>
      </NavigationGroup>

      <Suspense fallback={null}>
        <ResourceNavigationGroup text="React Components" resource={reactComponentsRef.current!}/>
      </Suspense>
    </>
  )
}
