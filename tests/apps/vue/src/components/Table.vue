<template>
  <sinch-table>
    <sinch-table-head>
      <sinch-table-row>
        <sinch-table-head-cell v-for="(cell, index) in state.head" :key="index" :text="cell.text" :align="cell.align" :fit="cell.isFit">
          <sinch-checkbox v-if="cell.isCheckbox" slot="checkbox"></sinch-checkbox>
            <sinch-icon-button v-if="cell.isSortable" aria-label="Sort" size="s" slot="right">
              <sinch-icon slot="icon" name="north"></sinch-icon>
            </sinch-icon-button>
            <sinch-icon-button v-if="cell.isFilterable" aria-label="Filter" size="s" slot="left">
              <sinch-icon slot="icon" name="filter_list"></sinch-icon>
            </sinch-icon-button>
          <sinch-help-tooltip v-if="cell.tooltip != null" slot="tooltip" :text="cell.tooltip"></sinch-help-tooltip>
        </sinch-table-head-cell>
      </sinch-table-row>
    </sinch-table-head>
    <sinch-table-body>
      <sinch-table-row v-for="(row, index) in state.body" :key="index" :selected="index === 0">
        <sinch-table-cell v-for="(cell, index) in row" :align="cell.align" :key="index">
          <sinch-checkbox v-if="cell.isCheckbox"></sinch-checkbox>
          <sinch-button v-if="cell.isButton" type="secondary" :text="cell.text"></sinch-button>
          <sinch-toggle v-if="cell.isToggle"></sinch-toggle>
          <sinch-link v-if="cell.isLink" :text="cell.text" href="#"></sinch-link>
          <sinch-icon-button v-if="cell.isIcon" aria-label="button">
            <sinch-icon slot="icon" :name="cell.iconName"></sinch-icon>
          </sinch-icon-button>
          <sinch-text v-if="!cell.isCheckbox && !cell.isButton && !cell.isToggle && !cell.isLink && !cell.isIcon">{{cell.text}}</sinch-text>
        </sinch-table-cell>
      </sinch-table-row>
    </sinch-table-body>
  </sinch-table>
</template>

<script>
import '@nectary/components/table'
import '@nectary/components/table-row'
import '@nectary/components/table-head'
import '@nectary/components/table-head-cell'
import '@nectary/components/table-body'
import '@nectary/components/table-cell'
import '@nectary/components/toggle'
import '@nectary/components/icon-button'
import '@nectary/components/help-tooltip'
import '@nectary/components/button'
import '@nectary/components/checkbox'
import '@nectary/components/link'
import '@nectary/components/icon'
import '@nectary/components/icon-button'
import '@nectary/components/text'

const getTableItems = ({ hasLongLine }) => ({
  head: [
    { isCheckbox: true, isFit: true },
    { text: 'ID', isSortable: true, align: 'end' },
    { text: 'Ticket' },
    { text: 'Channel', align: 'center', tooltip: 'Tooltip text', isSortable: true, isFilterable: true },
    { text: 'Comment long long' },
    { text: 'Active', align: 'center' },
    { text: 'Actions', isFit: true, tooltip: 'Tooltip text' },
  ],
  body: [
    [
      { isCheckbox: true },
      { text: '123', align: 'end' },
      { isLink: true, text: 'Link' },
      { isIcon: true, align: 'center', iconName: 'open_in_new' },
      hasLongLine === true
        ? { text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' }
        : { text: 'Lorem Ipsum' },
      { isToggle: true, align: 'center' },
      { isIcon: true, align: 'center', iconName: 'more_vert' },
    ],
    [
      { isCheckbox: true },
      { text: '456789', align: 'end' },
      { isLink: true, text: 'Link' },
      { isIcon: true, align: 'center', iconName: 'open_in_new' },
      { text: 'Lorem Ipsum' },
      { isToggle: true, align: 'center' },
      { isIcon: true, align: 'center', iconName: 'more_vert' },
    ],
  ],
})

export default {
  props: {
    search: URLSearchParams
  },
  methods: {
    onSortChange(e) {
      this.isAsc = e.detail
      window.dispatchEvent(new CustomEvent('sinch-table-sort-change', {detail: e.detail}))
    },
    onSortFocus() {
      window.dispatchEvent(new CustomEvent('sinch-table-sort-focus'))
    },
    onSortBlur() {
      window.dispatchEvent(new CustomEvent('sinch-table-sort-blur'))
    }
  },
  computed: {
    state() {
      const example = this.$route.query.example
      return getTableItems({hasLongLine: example === 'long'})
    }
  },
  data() {
    return {
      isAsc: false
    }
  }
}
</script>

