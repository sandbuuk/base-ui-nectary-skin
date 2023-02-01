import { createResource, Loading } from 'docs-common'
import { Suspense, useRef } from 'react'
import { versions } from '../../utils'
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

type TNaigationItems = {
  resource: TResource<TSidebarItem[]>,
}

const NavigationItems: FC<TNaigationItems> = ({ resource }) => {
  let prevName = ''

  return (
    <>
      {resource.read().map(({ route, name }) => {
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

export const ComponentsList: FC = () => {
  const { versionValue } = useNavigateVersion()
  const versionValueRef = useRef('')
  const componentsRef = useRef<TResource<TSidebarItem[]>>()
  const pagesRef = useRef<TResource<TSidebarItem[]>>()

  if (versionValueRef.current !== versionValue) {
    console.log('--- ComponentsList', versionValue)

    const promise = Reflect.get(versions, versionValue).bootstrap()
    const components: Promise<TSidebarItem[]> = promise.then(({ getComponentsRoutes }: any) => getComponentsRoutes())
    const pages: Promise<TSidebarItem[]> = promise.then(({ getPagesRoutes }: any) => getPagesRoutes())

    componentsRef.current = createResource(components)
    pagesRef.current = createResource(pages)
  }

  versionValueRef.current = versionValue

  return (
    <Suspense fallback={<Loading/>}>
      <NavigationList>
        <NavigationItems resource={pagesRef.current!}/>
        <div className="divider"/>
        <NavigationItems resource={componentsRef.current!}/>
      </NavigationList>
    </Suspense>
  )
}
