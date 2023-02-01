import { toc } from 'mdast-util-toc'

const visitItem = (item, depth = 0, depthContext = []) => {
  if (item.type === 'list') {
    item.children.forEach((item) => visitItem(item, depth, depthContext))

    return
  }

  if (item.type === 'listItem') {
    item.children = item.children.reduce((ch, item) => {
      if (item.type === 'paragraph') {
        ch.push(...item.children)
      } else {
        ch.push(item)
      }

      return ch
    }, [])
    item.children.forEach((item) => visitItem(item, depth + 1, depthContext))

    return
  }

  if (item.type === 'link') {
    const contextIndex = depth - 1
    const prefix = contextIndex - 1 >= 0 ? `${depthContext[contextIndex - 1]}-` : ''
    const id = item.url.replace(/-\d$/, '').substring(1)

    depthContext[contextIndex] = prefix + id
    item.url = `#${depthContext[contextIndex]}`
    // console.log(item, `d:${contextIndex}`)
  }

  // console.log('XXXXX', item)
}

export const remarkToc = () => (node) => {
  const result = toc(
    node,
    {
      heading: 'toc|table[ -]of[ -]contents?',
    }
  )

  if (
    result.endIndex === null ||
       result.index === null ||
       result.index === -1 ||
       !result.map
  ) {
    return
  }

  visitItem(result.map)

  console.log(result.map)
  console.log('---------------------')
  node.children = [
    ...node.children.slice(0, result.index),
    result.map,
    ...node.children.slice(result.endIndex),
  ]
}

export default remarkToc
