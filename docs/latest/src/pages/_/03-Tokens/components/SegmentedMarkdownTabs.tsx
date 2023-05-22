import { MDXProvider } from '@mdx-js/react'
import { lazyScrollIntoView, commonMdxComponents } from 'docs-common'
import { useState } from 'react'
import '@sinch-engage/nectary/segmented-control'
import '@sinch-engage/nectary/segmented-control-option'
import type { MDXComponents } from 'mdx/types'

const Heading3MdxComponent = commonMdxComponents.h3 as React.ElementType
const ParagraphMdxComponent = commonMdxComponents.p as React.ElementType

const TypographyTabMarkdown = lazyScrollIntoView(() => import(/* webpackChunkName: "Colors" */'../markdown/TokenTypes.mdx'))

type ContentInput = {
  heading: string,
  listItems: JSX.Element[],
}
const ContentGrid = ({ heading, listItems }: ContentInput) => (
  <div id="segmented-tabs-grid">
    <div id="segmented-tabs-grid-left-item">
      <div style={{ height: '100%' }}>
        <Heading3MdxComponent>
          {heading}
        </Heading3MdxComponent>
        <ParagraphMdxComponent>
          {listItems[0].props.children}
        </ParagraphMdxComponent>
      </div>
    </div>
    <div id="segmented-tabs-grid-right-item">
      {listItems[1].props?.children}
    </div>
  </div>
)

const ContentBox = ({ heading, listItems }: ContentInput) => (
  <div style={{ marginTop: 24 }}>
    <Heading3MdxComponent>
      {heading}
    </Heading3MdxComponent>
    <ParagraphMdxComponent>
      {listItems[0]?.props.children}
    </ParagraphMdxComponent>
  </div>
)

const classNameTypes = {
  LISTITEM: 'LISTITEM',
  HEADING: 'HEADING',
  TAB: 'TAB',
}

const elementTypeMapping: MDXComponents = {
  li: () => <div className={classNameTypes.LISTITEM}/>,
  h1: () => <div className={classNameTypes.HEADING}/>,
  h2: () => <div className={classNameTypes.HEADING}/>,
  h3: () => <div className={classNameTypes.HEADING}/>,
  h4: () => <div className={classNameTypes.HEADING}/>,
  h5: () => <div className={classNameTypes.HEADING}/>,
  h6: () => <div className={classNameTypes.HEADING}/>,
  ul: () => <div className={classNameTypes.TAB}/>,
}

export const SegmentedMarkdownTabsMDX = () => {
  return (
    <MDXProvider components={{ ...elementTypeMapping }}>
      <TypographyTabMarkdown/>
    </MDXProvider>
  )
}

const transformChildrenProp = (children: JSX.Element[]) => {
  const tabContent: JSX.Element[][] = []
  const tabs: string[] = []
  const headings: string[] = []

  children.forEach((item) => {
    if (item.type('').props.className === classNameTypes.TAB) {
      tabs.push(item.props.children[1].props.children)
      tabContent.push([])
    } else {
      if (item?.type('').props.className === classNameTypes.HEADING) {
        headings.push(item.props.children)
      }

      tabContent[tabContent?.length - 1].push(item)
    }
  })

  return { tabContent, tabs, headings }
}

const filterListItems = (contentArrayItem: JSX.Element[]) => {
  return contentArrayItem[1].props.children.filter((item: JSX.Element) => {
    if (typeof item.type === 'function') {
      if (item.type('').props.className === classNameTypes.LISTITEM) {
        return true
      }
    }
  })
}

type TabContentMapping = {
  [key: number]: null|JSX.Element,
}

type TokenMenuInput = {
  children: JSX.Element[],
}

export const SegmentedMarkdownTabs = ({ children }: TokenMenuInput) => {
  const [selectedTab, setSelectedTab] = useState(0)
  const onChange = (e: CustomEvent) => {
    setSelectedTab(e.detail)
  }

  const { tabContent, tabs, headings } = transformChildrenProp(children)
  const listItems = filterListItems(tabContent[selectedTab])

  const MultipleListItems = () => <ContentGrid heading={headings[selectedTab]} listItems={listItems}/>
  const SingleListItem = () => <ContentBox heading={headings[selectedTab]} listItems={listItems}/>

  const TabContent: TabContentMapping = {
    0: null,
    1: <SingleListItem/>,
    2: <MultipleListItems/>,
  }

  const numberOfListItemsToRender = listItems?.length

  return (
    <>
      <sinch-segmented-control
        value={selectedTab.toString(10)}
        on-change={onChange}
        aria-label="Token types"
      >
        {tabs.map((item, i) => {
          return (<sinch-segmented-control-option key={i} value={i.toString(10)} text={item} aria-label={item}/>)
        })}
      </sinch-segmented-control>
      {TabContent[numberOfListItemsToRender]}
    </>
  )
}
