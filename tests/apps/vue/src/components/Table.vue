<template>
  <sinch-table>
    <sinch-table-head>
      <sinch-table-row>
        <sinch-table-head-cell v-for="(cell, index) in state.head" :key="index" :text="cell.text" :align="cell.align" :fit="cell.isFit">
          <sinch-checkbox v-if="cell.isCheckbox" slot="checkbox"></sinch-checkbox>
            <sinch-icon-button v-if="cell.isSortable" aria-label="Sort" size="s" slot="right">
              <sinch-icon-north slot="icon"></sinch-icon-north>
            </sinch-icon-button>
            <sinch-icon-button v-if="cell.isFilterable" aria-label="Filter" size="s" slot="left">
              <sinch-icon-filter-list slot="icon"></sinch-icon-filter-list>
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
          <sinch-icon-open-in-new v-if="cell.isIcon && cell.iconType === 'open-in-new'"></sinch-icon-open-in-new>
          <sinch-icon-more-vert v-if="cell.isIcon && cell.iconType === 'more-vert'"></sinch-icon-more-vert>
          <span v-if="!cell.isCheckbox && !cell.isButton && !cell.isToggle && !cell.isLink && !cell.isIcon">{{cell.text}}</span>
        </sinch-table-cell>
      </sinch-table-row>
    </sinch-table-body>
  </sinch-table>
</template>

<script>
import '@sinch-engage/nectary/table'
import '@sinch-engage/nectary/table-row'
import '@sinch-engage/nectary/table-head'
import '@sinch-engage/nectary/table-head-cell'
import '@sinch-engage/nectary/table-body'
import '@sinch-engage/nectary/table-cell'
import '@sinch-engage/nectary/toggle'
import '@sinch-engage/nectary/icon-button'
import '@sinch-engage/nectary/icons/north'
import '@sinch-engage/nectary/icons/filter-list'
import '@sinch-engage/nectary/icons/more-vert'
import '@sinch-engage/nectary/icons/open-in-new'
import '@sinch-engage/nectary/help-tooltip'
import '@sinch-engage/nectary/button'
import '@sinch-engage/nectary/checkbox'
import '@sinch-engage/nectary/link'

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
      return JSON.parse(decodeURI(this.search.get('state')))
    }
  },
  data() {
    return {
      isAsc: false
    }
  }
}
</script>

