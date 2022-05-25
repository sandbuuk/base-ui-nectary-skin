import { expect, test } from '@playwright/test'
import { makeAccessibilityTests } from '../accessibility-tests'
import { getAllEvents, runScreenshotTests, subscribeToEvents, testCustomEvent } from '../screenshot-tests'

const items = ({ hasLongLine }: any = {}) => encodeURI(JSON.stringify({
  head: [
    { isCheckbox: true, isFit: true },
    { text: 'ID', isSortable: true, align: 'end' },
    { text: 'Ticket' },
    { text: 'Channel', align: 'center', tooltip: 'Tooltip text', isSortable: true },
    { text: 'Comment' },
    { text: 'Active', align: 'center' },
    { text: 'Actions', isFit: true, tooltip: 'Tooltip text' },
  ],
  body: [
    [
      { isCheckbox: true },
      { text: '123', align: 'end' },
      { isLink: true, text: 'Link' },
      { isIcon: true, align: 'center', iconType: 'open-in-new' },
      hasLongLine === true
        ? { text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' }
        : { text: 'Lorem Ipsum' },
      { isToggle: true, align: 'center' },
      { isIcon: true, align: 'center', iconType: 'more-vert' },
    ],
    [
      { isCheckbox: true },
      { text: '456789', align: 'end' },
      { isLink: true, text: 'Link' },
      { isIcon: true, align: 'center', iconType: 'open-in-new' },
      { text: 'Lorem Ipsum' },
      { isToggle: true, align: 'center' },
      { isIcon: true, align: 'center', iconType: 'more-vert' },
    ],
  ],
}))

const sortItems = encodeURI(JSON.stringify({
  head: [
    { text: 'ID', isSortable: true },
  ],
  body: [
    [
      { text: '123' },
    ],
  ],
}))

const withItems = `/table?width=1000&state=${items()}`
const withLongLine = `/table?width=1000&state=${items({ hasLongLine: true })}`
const withSortHeadCell = `/table?width=1000&state=${sortItems}`
const checkTableWithItems = makeAccessibilityTests(`/table?width=1000&state=${items()}`, 'sinch-table')

test('accessibility', checkTableWithItems(async function* () {
  yield
}))

test('yable screenshots', runScreenshotTests('sinch-table', [
  {
    name: 'items',
    url: withItems,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'items long',
    url: withLongLine,
    async *fn() {
      yield { name: 'shot' }
    },
  },
  {
    name: 'custom events',
    url: withSortHeadCell,
    async *fn({ $, page }) {
      const testSort = testCustomEvent(page, $.locator('sinch-table-head-sort').first())

      await testSort('change', 'sinch-table-sort-change', true)
    },
  },
  {
    name: 'native events',
    url: withSortHeadCell,
    async *fn({ $, page }) {
      await subscribeToEvents(page, 'sinch-table-sort-focus', 'sinch-table-sort-blur', 'sinch-table-sort-change')

      await page.keyboard.press('Tab')
      await page.keyboard.press('Tab')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-table-sort-focus', detail: null },
        { type: 'sinch-table-sort-blur', detail: null },
      ])

      await $.click({ position: { x: 10, y: 10 } })
      await page.keyboard.press('Space')

      expect(
        await getAllEvents(page)
      ).toEqual([
        { type: 'sinch-table-sort-focus', detail: null },
        { type: 'sinch-table-sort-change', detail: true },
        { type: 'sinch-table-sort-change', detail: false },
      ])
    },
  },
]))
