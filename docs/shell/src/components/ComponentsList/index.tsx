import { createResource, Loading } from 'docs-common'
import { Suspense, useMemo } from 'react'
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
  const [componentsRes, pagesRes] = useMemo(() => {
    console.log('ComponentsList', versionValue)

    const promise = Reflect.get(versions, versionValue).entries()
    const components: Promise<TSidebarItem[]> = promise.then(({ getComponentsRoutes }: any) => getComponentsRoutes())
    const pages: Promise<TSidebarItem[]> = promise.then(({ getPagesRoutes }: any) => getPagesRoutes())

    return [createResource(components), createResource(pages)]
  }, [versionValue])

  return (
    <Suspense fallback={<Loading/>}>
      <NavigationList>
        <NavigationItems resource={pagesRes}/>
        <div className="divider"/>
        <NavigationItems resource={componentsRes}/>
      </NavigationList>
    </Suspense>
  )
}
