# V3 Migration

## Component updates

|Name|From         |changed                                   |To        |
|---|------------|-----------------------------------------|---------|
|Avatar|Browns…      |🗑️ Removed                               |          |
|Avatar|olive, celtic, pumpkin, jasper|🗑️ Removed                               |          |
|Avatar|red, light-red, dark-red|➕ Added                                   |          |
|    |             |                                          |          |
|Chip|celtic, olive, pumpkin, jasper|🔄 Replaced                               |info, success, warning, danger|
|Tag |celtic, olive, pumpkin, jasper|🔄 Replaced                               |info, success, warning, danger|
|Avatar, Chip, Tag, Color Swatch|xxx_xxx      |🔄 Replaced                               |xxx-xxx   |
|Emoji Picker|`--sinch-comp-emoji-picker-color-default-text-not_found`|🔄 Replaced                               |`--sinch-comp-emoji-picker-color-default-text-not-found`|
|    |             |                                          |          |
|Color Swatch|celtic, olive, pumpkin, jasper|🗑️ Removed                               |          |
|Card|`--sinch-comp-card-color-`(yellow, green, blue, gray)|🗑️ Removed                               |          |
|Card|`--sinch-comp-card-color-white-default`|🔄 Replaced                               |`--sinch-comp-card-color-default-`|

## CSS var updates

### 🗑 Removed values

|Name                                                                     |Replacement   |
|-----------------------------------------|--------------------------|
|`--sinch-ref-shape-radius`                          |                                  |
|`--sinch-ref-color-main-stormy-500`                 |                                  |
|`--sinch-ref-color-main-night-*`         |                                 |
|`--sinch-ref-color-main-celtic-*`        |                                 |
|`--sinch-ref-color-main-olive-*`         |                                 |
|`--sinch-ref-color-main-bolt-*`          |                                 |
|`--sinch-ref-color-main-dirt-*`          |                                 |
|`--sinch-ref-color-main-orange-*`        |                                 |
|`--sinch-ref-color-main-mud-*`           |                                 |
|`--sinch-sys-color-text-link`                       |`--sinch-sys-color-primary-default`  |
|`--sinch-sys-color-text-link-disabled`              |`--sinch-sys-color-primary-disabled` |
|`--sinch-sys-color-text-inverted`                   |`--sinch-sys-color-basic-pure`       |
|`--sinch-sys-color-text-invalid`                    |`--sinch-sys-color-feedback-invalid`|
|`--sinch-sys-color-border-invalid`                  |`--sinch-sys-color-feedback-invalid`|
|`--sinch-sys-color-border-active`                   |`--sinch-sys-color-primary`         |
|`--sinch-sys-color-status-*`                      |`--sinch-sys-color-feedback-*`    |
|`--sinch-sys-color-container-main-foreground`       | Can be defined case by case |
|`--sinch-sys-color-surface-complement-*`          |                                  |
|`--sinch-sys-color-cta-*`                         | Replaced with direct values |
|`--sinch-comp-card-color-yellow-*`                |                                  |
|`--sinch-comp-card-color-green-*`                 |                                  |
|`--sinch-comp-card-color-blue-*`                  |                                  |
|`--sinch-comp-card-color-gray-*`                  |                                  |
|`--sinch-comp-avatar-container-color-celtic`       |                                  |
|`--sinch-comp-avatar-container-color-olive`        |                                  |
|`--sinch-comp-avatar-container-color-pumpkin`      |                                  |
|`--sinch-comp-avatar-container-color-jasper`       |                                  |

### ➕ New values

|Name                               |Value   |
|---------------------------------|--------------------------|
|`--sinch-sys-color-basic-transparent`       |                           |
|`--sinch-ref-color-main-raspberry-300`           |#FFBDBD                    |
|`--sinch-ref-color-main-raspberry-800`           |#57181C                    |
|`--sinch-ref-color-main-raspberry-900`           |#3D1215                    |
|`--sinch-ref-color-main-honey-600`               |#9E5A00                    |
|`--sinch-ref-color-main-honey-700`               |#824703                    |
|`--sinch-ref-color-main-honey-800`               |#472706                    |
|`--sinch-ref-color-main-honey-900`               |#331B06                    |
|`--sinch-ref-color-main-tropical-200`            |#CEE5DA                    |
|`--sinch-ref-color-main-tropical-350`            |#80CFBC                    |
|`--sinch-ref-color-main-tropical-900`            |#0E2329                    |
|`--sinch-ref-color-main-ocean-600`               |#0D68D1                    |
|`--sinch-ref-color-main-ocean-700`               |#1454A8                    |
|`--sinch-ref-color-main-ocean-900`               |#0F2138                    |
|`--sinch-ref-color-main-grass-50`               |#ECFFEB                    |
|`--sinch-ref-color-main-grass-100`               |#D7F5D7                    |
|`--sinch-ref-color-main-grass-300`               |#99E0A2                    |
|`--sinch-ref-color-main-grass-350`               |#77D486                    |
|`--sinch-ref-color-main-grass-500`               |#3D9956                    |
|`--sinch-ref-color-main-grass-600`               |#2B7845                    |
|`--sinch-ref-color-main-grass-800`               |#163323                    |
|`--sinch-ref-color-main-grass-900`               |#102419                    |
|`--sinch-ref-color-main-mud-50`                 |#FFF8F5                    |
|`--sinch-ref-color-main-mud-100`                 |#FFE9E0                    |
|`--sinch-ref-color-main-mud-300`                 |#EFC7BA                    |
|`--sinch-ref-color-main-mud-350`                 |#E5B5A5                    |
|`--sinch-ref-color-main-mud-400`                 |#CC9A8B                    |
|`--sinch-ref-color-main-mud-500`                 |#AD7D6F                    |
|`--sinch-ref-color-main-mud-800`                 |#3D2A26                    |
|`--sinch-ref-color-main-mud-900`                 |#291D1B                    |
|`--sinch-ref-color-main-violet-50`              |#F8F5FF                    |
|`--sinch-ref-color-main-violet-100`              |#EFEBFF                    |
|`--sinch-ref-color-main-violet-200`              |#E2DBFF                    |
|`--sinch-ref-color-main-violet-350`              |#C1B6FA                    |
|`--sinch-ref-color-main-violet-400`              |#A89BFA                    |
|`--sinch-ref-color-main-violet-600`              |#645DC2                    |
|`--sinch-ref-color-main-violet-800`              |#2A2A54                    |
|`--sinch-ref-color-main-violet-900`              |#1E1E33                    |
|`--sinch-ref-color-main-pumpkin-50`             |#FFF7F0                    |
|`--sinch-ref-color-main-pumpkin-100`             |#FFE9D6                    |
|`--sinch-ref-color-main-pumpkin-200`             |#FFD9BD                    |
|`--sinch-ref-color-main-pumpkin-350`             |#FFAD75                    |
|`--sinch-ref-color-main-pumpkin-400`             |#F58B4E                    |
|`--sinch-ref-color-main-pumpkin-600`             |#AD4E24                    |
|`--sinch-ref-color-main-pumpkin-800`             |#4D2215                    |
|`--sinch-ref-color-main-pumpkin-900`             |#361811                    |
|`--sinch-ref-color-main-candy-50`               |#FFF5FC                    |
|`--sinch-ref-color-main-candy-100`               |#FFE5F7                    |
|`--sinch-ref-color-main-candy-300`               |#FFBDEC                    |
|`--sinch-ref-color-main-candy-350`               |#FAA5E3                    |
|`--sinch-ref-color-main-candy-400`               |#EB83CF                    |
|`--sinch-ref-color-main-candy-600`               |#A3488E                    |
|`--sinch-ref-color-main-candy-800`               |#472140                    |
|`--sinch-ref-color-main-candy-900`               |#2E192A                    |
|`--sinch-sys-color-text-caption`            |                           |
|`--sinch-sys-color-feedback-neutral-subtle` |                           |
|`--sinch-sys-color-feedback-neutral-default`|                           |
|`--sinch-sys-color-feedback-neutral-strong` |                           |

### 🔀 Moved values

|Old                                       |New                               |New value or replacement   |
|-----------------------------------------|---------------------------------|--------------------------|
|`--sinch-ref-color-main-snow-100`                   |`--sinch-sys-color-basic-pure`              |                           |
|`--sinch-ref-color-main-stormy-900`                 |`--sinch-sys-color-basic-pure-inverted`     |                           |
|`--sinch-ref-color-main-snow-200`                   |`--sinch-ref-color-neutral-50`             |                           |
|`--sinch-ref-color-main-snow-400`                   |`--sinch-ref-color-neutral-100`             |                           |
|`--sinch-ref-color-main-snow-500`                   |`--sinch-ref-color-neutral-200`             |                           |
|`--sinch-ref-color-main-snow-600`                   |`--sinch-ref-color-neutral-300`             |                           |
|`--sinch-ref-color-main-snow-700`                   |`--sinch-ref-color-neutral-350`             |                           |
|`--sinch-ref-color-main-stormy-100`                 |`--sinch-ref-color-neutral-400`             |                           |
|`--sinch-ref-color-main-stormy-200`                 |`--sinch-ref-color-neutral-500`             |                           |
|`--sinch-ref-color-main-stormy-300`                 |`--sinch-ref-color-neutral-600`             |                           |
|`--sinch-ref-color-main-stormy-400`                 |`--sinch-ref-color-neutral-700`             |                           |
|`--sinch-ref-color-main-stormy-600`                 |`--sinch-ref-color-neutral-800`             |                           |
|`--sinch-ref-color-main-stormy-700`                 |`--sinch-ref-color-neutral-900`             |                           |
|`--sinch-ref-color-main-stormy-800`                 |`--sinch-ref-color-neutral-950`             |                           |
|`--sinch-ref-color-main-raspberry-50`              |`--sinch-ref-color-raspberry-50`           |#FFF6F5                    |
|`--sinch-ref-color-main-raspberry-100`              |`--sinch-ref-color-raspberry-100`           |#FFE5E3                    |
|`--sinch-ref-color-main-raspberry-200`              |`--sinch-ref-color-raspberry-200`           |#FFD8D6                    |
|`--sinch-ref-color-main-raspberry-300`              |`--sinch-ref-color-raspberry-350`           |#FFA8A8                    |
|`--sinch-ref-color-main-raspberry-400`              |`--sinch-ref-color-raspberry-400`           |#FF8080                    |
|`--sinch-ref-color-main-raspberry-500`              |`--sinch-ref-color-raspberry-500`           |#EB5454                    |
|`--sinch-ref-color-main-raspberry-600`              |`--sinch-ref-color-raspberry-600`           |#BD3C41                    |
|`--sinch-ref-color-main-raspberry-700`              |`--sinch-ref-color-raspberry-700`           |#993138                    |
|`--sinch-ref-color-main-honey-100`                  |`--sinch-ref-color-honey-50`               |#FFF9EB                    |
|`--sinch-ref-color-main-honey-200`                  |`--sinch-ref-color-honey-100`               |#FCECCB                    |
|`--sinch-ref-color-main-honey-300`                  |`--sinch-ref-color-honey-200`               |#FFDD99                    |
|`--sinch-ref-color-main-honey-400`                  |`--sinch-ref-color-honey-300`               |#FFCA61                    |
|`--sinch-ref-color-main-honey-500`                  |`--sinch-ref-color-honey-350`               |#FFBE3C                    |
|`--sinch-ref-color-main-honey-600`                  |`--sinch-ref-color-honey-400`               |#EB9605                    |
|`--sinch-ref-color-main-honey-700`                  |`--sinch-ref-color-honey-500`               |#C77904                    |
|`--sinch-ref-color-main-tropical-50`               |`--sinch-ref-color-tropical-50`            |#F0FAF4                    |
|`--sinch-ref-color-main-tropical-100`               |`--sinch-ref-color-tropical-100`            |#E2F0E8                    |
|`--sinch-ref-color-main-tropical-200`               |`--sinch-ref-color-tropical-300`            |#AFDBCD                    |
|`--sinch-ref-color-main-tropical-300`               |`--sinch-ref-color-tropical-400`            |#51B8A6                    |
|`--sinch-ref-color-main-tropical-400`               |`--sinch-ref-color-tropical-500`            |#06998B                    |
|`--sinch-ref-color-main-tropical-500`               |`--sinch-ref-color-tropical-600`            |#007874                    |
|`--sinch-ref-color-main-tropical-600`               |`--sinch-ref-color-tropical-700`            |#006063                    |
|`--sinch-ref-color-main-tropical-700`               |`--sinch-ref-color-tropical-800`            |#0C333B                    |
|`--sinch-ref-color-main-ocean-50`                  |`--sinch-ref-color-ocean-50`               |#F2F9FF                    |
|`--sinch-ref-color-main-ocean-100`                  |`--sinch-ref-color-ocean-100`               |#E0F1FF                    |
|`--sinch-ref-color-main-ocean-200`                  |`--sinch-ref-color-ocean-200`               |#C7E5FF                    |
|`--sinch-ref-color-main-ocean-300`                  |`--sinch-ref-color-ocean-300`               |#A8D4FF                    |
|`--sinch-ref-color-main-ocean-400`                  |`--sinch-ref-color-ocean-350`               |#8AC4FF                    |
|`--sinch-ref-color-main-ocean-500`                  |`--sinch-ref-color-ocean-400`               |#61ABFF                    |
|`--sinch-ref-color-main-ocean-600`                  |`--sinch-ref-color-ocean-500`               |#3089F0                    |
|`--sinch-ref-color-main-ocean-700`                  |`--sinch-ref-color-ocean-800`               |#112F57                    |
|`--sinch-ref-color-main-grass-200`         |`--sinch-ref-color-grass-200`               |#C2EDC5                    |
|`--sinch-ref-color-main-grass-400`         |`--sinch-ref-color-grass-400`               |#53BD69                    |
|`--sinch-ref-color-main-grass-700`         |`--sinch-ref-color-grass-700`               |#23613C                    |
|`--sinch-ref-color-main-mud-200`           |`--sinch-ref-color-mud-200`                 |#FAD9CD                    |
|`--sinch-ref-color-main-mud-400`           |`--sinch-ref-color-mud-600`                 |#8C5F54                    |
|`--sinch-ref-color-main-mud-700`           |`--sinch-ref-color-mud-700`                 |#734D45                    |
|`--sinch-ref-color-main-violet-200`        |`--sinch-ref-color-violet-300`              |#D0C8FA                    |
|`--sinch-ref-color-main-violet-400`        |`--sinch-ref-color-violet-500`              |#857AEB                    |
|`--sinch-ref-color-main-violet-700`        |`--sinch-ref-color-violet-700`              |#4D4AA8                    |
|`--sinch-ref-color-main-pumpkin-200`       |`--sinch-ref-color-pumpkin-300`             |#FFC299                    |
|`--sinch-ref-color-main-pumpkin-400`       |`--sinch-ref-color-pumpkin-500`             |#D66A33                    |
|`--sinch-ref-color-main-pumpkin-700`       |`--sinch-ref-color-pumpkin-700`             |#8F3D1F                    |
|`--sinch-ref-color-main-candy-200`         |`--sinch-ref-color-candy-200`               |#FFD6F3                    |
|`--sinch-ref-color-main-candy-400`         |`--sinch-ref-color-candy-500`               |#D15CB4                    |
|`--sinch-ref-color-main-candy-700`         |`--sinch-ref-color-candy-700`               |#8A3778                    |
|`--sinch-sys-color-feedback-info-foreground`        |`--sinch-sys-color-feedback-info-subtle`    |                           |
|`--sinch-sys-color-feedback-info-contrast`          |`--sinch-sys-color-feedback-info-default`   |                           |
|`--sinch-sys-color-feedback-info-background`        |`--sinch-sys-color-feedback-info-strong`    |                           |
|`--sinch-sys-color-feedback-success-foreground`     |`--sinch-sys-color-feedback-success-subtle` |                           |
|`--sinch-sys-color-feedback-success-contrast`       |`--sinch-sys-color-feedback-success-default`|                           |
|`--sinch-sys-color-feedback-success-background`     |`--sinch-sys-color-feedback-success-strong` |                           |
|`--sinch-sys-color-feedback-warning-foreground`     |`--sinch-sys-color-feedback-warning-subtle` |                           |
|`--sinch-sys-color-feedback-warning-contrast`       |`--sinch-sys-color-feedback-warning-default`|                           |
|`--sinch-sys-color-feedback-warning-background`     |`--sinch-sys-color-feedback-warning-strong` |                           |
|`--sinch-sys-color-feedback-invalid-foreground`     |`--sinch-sys-color-feedback-danger-subtle`  |                           |
|`--sinch-sys-color-feedback-invalid-contrast`       |`--sinch-sys-color-feedback-danger-default` |                           |
|`--sinch-sys-color-feedback-invalid-background`     |`--sinch-sys-color-feedback-danger-strong`  |                           |
|`--sinch-sys-color-border-focus`                    |`--sinch-sys-color-focus`                  |                           |
|`--sinch-sys-color-border-light`                    |`--sinch-sys-color-border-subtle`           |                           |
|`--sinch-sys-color-border-dark`                     |`--sinch-sys-color-border-strong`           |                           |
|`--sinch-sys-color-container-main-default`          |`--sinch-sys-color-surface-primary-default` |                           |
|`--sinch-sys-color-container-main-hover`            |`--sinch-sys-color-surface-primary-hover`   |                           |
|`--sinch-sys-color-container-main-active`           |`--sinch-sys-color-surface-primary-active`  |                           |
|`--sinch-sys-color-container-main-disabled`         |`--sinch-sys-color-surface-primary-disabled`|Usually same as default    |
|`--sinch-sys-color-container-contrast-primary-*`  |`--sinch-sys-color-surface-tertiary-*`    |                           |
|`--sinch-sys-color-container-contrast-secondary-*`|`--sinch-sys-color-surface-secondary-*`   |                           |
|`--sinch-comp-link-color-default-text-initial`      |                                  |`--sinch-sys-color-primary-default`  |
|`--sinch-comp-link-color-default-text-hover`        |                                  |`--sinch-sys-color-primary-hover`    |
|`--sinch-comp-link-color-default-icon-initial`      |                                  |`--sinch-sys-color-primary-default`  |
|`--sinch-comp-link-color-default-icon-hover`        |                                  |`--sinch-sys-color-primary-hover`    |
|`--sinch-comp-link-color-disabled-text-initial`     |                                  |`--sinch-sys-color-primary-disabled` |
|`--sinch-comp-link-color-disabled-icon-initial`     |                                  |`--sinch-sys-color-primary-disabled` |
|`--sinch-comp-chip-color-celtic`                  |`--sinch-comp-chip-color-info`            |                           |
|`--sinch-comp-chip-color-olive`                   |`--sinch-comp-chip-color-success`         |                           |
|`--sinch-comp-chip-color-pumpkin`                 |`--sinch-comp-chip-color-warning`         |                           |
|`--sinch-comp-chip-color-jasper`                  |`--sinch-comp-chip-color-invalid`         |                           |
|`--sinch-comp-tag-color-celtic`                   |`--sinch-comp-tag-color-info`             |                           |
|`--sinch-comp-tag-color-olive`                    |`--sinch-comp-tag-color-success`          |                           |
|`--sinch-comp-tag-color-pumpkin`                  |`--sinch-comp-tag-color-warning`          |                           |
|`--sinch-comp-tag-color-jasper`                   |`--sinch-comp-tag-color-invalid`          |                           |
|`--sinch-comp-color-swatch-color-celtic`           |`--sinch-comp-color-swatch-color-info`     |                           |
|`--sinch-comp-color-swatch-color-olive`            |`--sinch-comp-color-swatch-color-success`  |                           |
|`--sinch-comp-color-swatch-color-pumpkin`          |`--sinch-comp-color-swatch-color-warning`  |                           |
|`--sinch-comp-color-swatch-color-jasper`           |`--sinch-comp-color-swatch-color-invalid`  |                           |
|`--sinch-comp-tag-color-celtic`                   |`--sinch-comp-tag-color-info`             |                           |
|`--sinch-comp-tag-color-olive`                    |`--sinch-comp-tag-color-success`          |                           |
|`--sinch-comp-tag-color-pumpkin`                  |`--sinch-comp-tag-color-warning`          |                           |
|`--sinch-comp-tag-color-jasper`                   |`--sinch-comp-tag-color-invalid`          |                           |
