## Nectary Components V5

| Component | Change | Notes |
|-----------|--------|-------|
| `<sinch-card/>` | Removed | Replaced for `<sinch-card-v2/>` |
| `<sinch-segment/>` | Removed | Replaced for `<sinch-card-v2/>` |
| `<sinch-tile-control/>` | Removed | Replaced for `<sinch-card-v2/>` |
| `<sinch-horizontal-stepper/>` | Removed | |
| `<sinch-vertical-stepper/>` | Removed | |


## Nectary Assets V3

Asset icons have been removed in replacement for icons from `@nectary/components`:
```js
// Removed
import "@nectary/assets/icons/info"
<sinch-icon-info />

// Replacement
import "@nectary/components/icon"
<sinch-icon icons-version="2" name="info" />
```
