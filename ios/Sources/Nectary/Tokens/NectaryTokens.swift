import SwiftUI

// MARK: - NectaryTokens

/// Root token container for the Nectary / Sinch design system.
///
/// Mirrors the CSS custom properties defined in `@nectary/theme-base`:
///
/// ```
/// --sinch-color-*    → ColorTokens
/// --sinch-spacing-*  → SpacingTokens
/// --sinch-radius-*   → RadiusTokens
/// --sinch-font-*     → TypographyTokens
/// --sinch-size-*     → SizeTokens
/// ```
///
/// Usage:
/// ```swift
/// NectaryTheme {
///     NectaryButton("Send message") { }
/// }
/// ```
public struct NectaryTokens {
    public var color: ColorTokens
    public var spacing: SpacingTokens
    public var radius: RadiusTokens
    public var typography: TypographyTokens
    public var size: SizeTokens
    public var glass: GlassTokens
    public var elevation: ElevationTokens
    public var avatar: AvatarTokens

    public init(
        color: ColorTokens = .init(),
        spacing: SpacingTokens = .init(),
        radius: RadiusTokens = .init(),
        typography: TypographyTokens = .init(),
        size: SizeTokens = .init(),
        glass: GlassTokens = .init(),
        elevation: ElevationTokens = .init(),
        avatar: AvatarTokens = .init()
    ) {
        self.color = color
        self.spacing = spacing
        self.radius = radius
        self.typography = typography
        self.size = size
        self.glass = glass
        self.elevation = elevation
        self.avatar = avatar
    }
}

// MARK: - ColorTokens

/// Semantic and action colour tokens.
///
/// Maps to `--sinch-color-*` and `--sinch-sys-color-*` CSS properties.
public struct ColorTokens {
    // Action
    /// `--sinch-color-action-primary`
    public var actionPrimary: Color
    /// `--sinch-color-action-primary-hover`
    public var actionPrimaryHover: Color
    /// `--sinch-color-action-primary-active`
    public var actionPrimaryActive: Color
    /// `--sinch-color-action-secondary`
    public var actionSecondary: Color
    /// `--sinch-color-action-destructive`
    public var actionDestructive: Color

    // On-action
    /// `--sinch-color-on-action-primary`
    public var onActionPrimary: Color
    /// `--sinch-color-on-action-secondary`
    public var onActionSecondary: Color

    // Surface
    /// `--sinch-sys-color-surface-primary-default`
    public var surfacePrimaryDefault: Color
    /// `--sinch-sys-color-surface-secondary`
    public var surfaceSecondary: Color
    /// `--sinch-sys-color-surface-overlay`
    public var surfaceOverlay: Color

    // Text
    /// `--sinch-sys-color-text-primary`
    public var textPrimary: Color
    /// `--sinch-sys-color-text-secondary`
    public var textSecondary: Color
    /// `--sinch-sys-color-text-disabled`
    public var textDisabled: Color
    /// `--sinch-sys-color-text-on-color`
    public var textOnColor: Color

    // Icon
    /// `--sinch-sys-color-icon-primary`
    public var iconPrimary: Color
    /// `--sinch-sys-color-icon-secondary`
    public var iconSecondary: Color
    /// `--sinch-sys-color-icon-disabled`
    public var iconDisabled: Color

    // Border
    /// `--sinch-sys-color-border-default`
    public var borderDefault: Color
    /// `--sinch-sys-color-border-focus`
    public var borderFocus: Color
    /// `--sinch-sys-color-border-invalid`
    public var borderInvalid: Color

    // Status
    /// `--sinch-sys-color-status-success`
    public var statusSuccess: Color
    /// `--sinch-sys-color-status-warning`
    public var statusWarning: Color
    /// `--sinch-sys-color-status-error`
    public var statusError: Color
    /// `--sinch-sys-color-status-info`
    public var statusInfo: Color

    public init(
        actionPrimary: Color = Color(hex: 0xE87722),
        actionPrimaryHover: Color = Color(hex: 0xC86015),
        actionPrimaryActive: Color = Color(hex: 0xA64E10),
        actionSecondary: Color = .clear,
        actionDestructive: Color = Color(hex: 0xD32F2F),
        onActionPrimary: Color = .white,
        onActionSecondary: Color = Color(hex: 0x1A1A2E),
        surfacePrimaryDefault: Color = .white,
        surfaceSecondary: Color = Color(hex: 0xF8F9FA),
        surfaceOverlay: Color = Color.black.opacity(0.5),
        textPrimary: Color = Color(hex: 0x1A1A2E),
        textSecondary: Color = Color(hex: 0x6B7280),
        textDisabled: Color = Color(hex: 0x9CA3AF),
        textOnColor: Color = .white,
        iconPrimary: Color = Color(hex: 0x1A1A2E),
        iconSecondary: Color = Color(hex: 0x6B7280),
        iconDisabled: Color = Color(hex: 0x9CA3AF),
        borderDefault: Color = Color(hex: 0xD1D5DB),
        borderFocus: Color = Color(hex: 0xE87722),
        borderInvalid: Color = Color(hex: 0xD32F2F),
        statusSuccess: Color = Color(hex: 0x16A34A),
        statusWarning: Color = Color(hex: 0xD97706),
        statusError: Color = Color(hex: 0xD32F2F),
        statusInfo: Color = Color(hex: 0x2563EB)
    ) {
        self.actionPrimary = actionPrimary
        self.actionPrimaryHover = actionPrimaryHover
        self.actionPrimaryActive = actionPrimaryActive
        self.actionSecondary = actionSecondary
        self.actionDestructive = actionDestructive
        self.onActionPrimary = onActionPrimary
        self.onActionSecondary = onActionSecondary
        self.surfacePrimaryDefault = surfacePrimaryDefault
        self.surfaceSecondary = surfaceSecondary
        self.surfaceOverlay = surfaceOverlay
        self.textPrimary = textPrimary
        self.textSecondary = textSecondary
        self.textDisabled = textDisabled
        self.textOnColor = textOnColor
        self.iconPrimary = iconPrimary
        self.iconSecondary = iconSecondary
        self.iconDisabled = iconDisabled
        self.borderDefault = borderDefault
        self.borderFocus = borderFocus
        self.borderInvalid = borderInvalid
        self.statusSuccess = statusSuccess
        self.statusWarning = statusWarning
        self.statusError = statusError
        self.statusInfo = statusInfo
    }
}

// MARK: - SpacingTokens

/// Spacing scale tokens. Maps to `--sinch-spacing-*` CSS properties.
public struct SpacingTokens {
    public var spacing0: CGFloat  // --sinch-spacing-0  → 0
    public var spacing1: CGFloat  // --sinch-spacing-1  → 4
    public var spacing2: CGFloat  // --sinch-spacing-2  → 8
    public var spacing3: CGFloat  // --sinch-spacing-3  → 12
    public var spacing4: CGFloat  // --sinch-spacing-4  → 16
    public var spacing5: CGFloat  // --sinch-spacing-5  → 20
    public var spacing6: CGFloat  // --sinch-spacing-6  → 24
    public var spacing7: CGFloat  // --sinch-spacing-7  → 32
    public var spacing8: CGFloat  // --sinch-spacing-8  → 48

    public init(
        spacing0: CGFloat = 0,
        spacing1: CGFloat = 4,
        spacing2: CGFloat = 8,
        spacing3: CGFloat = 12,
        spacing4: CGFloat = 16,
        spacing5: CGFloat = 20,
        spacing6: CGFloat = 24,
        spacing7: CGFloat = 32,
        spacing8: CGFloat = 48
    ) {
        self.spacing0 = spacing0
        self.spacing1 = spacing1
        self.spacing2 = spacing2
        self.spacing3 = spacing3
        self.spacing4 = spacing4
        self.spacing5 = spacing5
        self.spacing6 = spacing6
        self.spacing7 = spacing7
        self.spacing8 = spacing8
    }
}

// MARK: - RadiusTokens

/// Border-radius tokens. Maps to `--sinch-radius-*` CSS properties.
public struct RadiusTokens {
    public var xs: CGFloat    // --sinch-radius-xs   → 2
    public var s: CGFloat     // --sinch-radius-s    → 4
    public var m: CGFloat     // --sinch-radius-m    → 8
    public var l: CGFloat     // --sinch-radius-l    → 12
    public var xl: CGFloat    // --sinch-radius-xl   → 16
    public var full: CGFloat  // --sinch-radius-full → 9999

    public init(
        xs: CGFloat = 2,
        s: CGFloat = 4,
        m: CGFloat = 8,
        l: CGFloat = 12,
        xl: CGFloat = 16,
        full: CGFloat = 9999
    ) {
        self.xs = xs
        self.s = s
        self.m = m
        self.l = l
        self.xl = xl
        self.full = full
    }
}

// MARK: - TypographyTokens

/// Typography tokens. Maps to `--sinch-font-*` CSS properties.
public struct TypographyTokens {
    // Labels
    public var labelXs: Font   // --sinch-font-label-xs
    public var labelS: Font    // --sinch-font-label-s
    public var labelM: Font    // --sinch-font-label-m
    public var labelL: Font    // --sinch-font-label-l

    // Body
    public var bodyS: Font     // --sinch-font-body-s
    public var bodyM: Font     // --sinch-font-body-m
    public var bodyL: Font     // --sinch-font-body-l

    // Headings
    public var headingS: Font  // --sinch-font-heading-s
    public var headingM: Font  // --sinch-font-heading-m
    public var headingL: Font  // --sinch-font-heading-l
    public var headingXl: Font // --sinch-font-heading-xl

    public init(
        labelXs: Font = .system(size: 10, weight: .medium),
        labelS: Font = .system(size: 12, weight: .medium),
        labelM: Font = .system(size: 14, weight: .medium),
        labelL: Font = .system(size: 16, weight: .medium),
        bodyS: Font = .system(size: 12, weight: .regular),
        bodyM: Font = .system(size: 14, weight: .regular),
        bodyL: Font = .system(size: 16, weight: .regular),
        headingS: Font = .system(size: 18, weight: .semibold),
        headingM: Font = .system(size: 22, weight: .semibold),
        headingL: Font = .system(size: 28, weight: .bold),
        headingXl: Font = .system(size: 36, weight: .bold)
    ) {
        self.labelXs = labelXs
        self.labelS = labelS
        self.labelM = labelM
        self.labelL = labelL
        self.bodyS = bodyS
        self.bodyM = bodyM
        self.bodyL = bodyL
        self.headingS = headingS
        self.headingM = headingM
        self.headingL = headingL
        self.headingXl = headingXl
    }
}

// MARK: - SizeTokens

/// Icon size tokens. Maps to `--sinch-size-*` CSS properties.
public struct SizeTokens {
    public var iconXs: CGFloat  // --sinch-size-icon-xs → 16
    public var iconS: CGFloat   // --sinch-size-icon-s  → 20
    public var iconM: CGFloat   // --sinch-size-icon-m  → 24
    public var iconL: CGFloat   // --sinch-size-icon-l  → 32
    public var iconXl: CGFloat  // --sinch-size-icon-xl → 40

    public init(
        iconXs: CGFloat = 16,
        iconS: CGFloat = 20,
        iconM: CGFloat = 24,
        iconL: CGFloat = 32,
        iconXl: CGFloat = 40
    ) {
        self.iconXs = iconXs
        self.iconS = iconS
        self.iconM = iconM
        self.iconL = iconL
        self.iconXl = iconXl
    }
}

// MARK: - GlassTokens

/// iOS 26 Liquid Glass material tokens.
///
/// Controls tint and fallback opacity for each glass surface layer.
/// On iOS 26+ the system `.glassEffect()` modifier uses the tint colour.
/// On iOS 16–25 a solid fill with `fallbackOpacity` is used instead.
public struct GlassTokens {
    /// Glass tint for navigation bars and tab bars.
    public var navigationTint: Color
    /// Opacity used as a fallback on iOS < 26 for navigation surfaces.
    public var navigationFallbackOpacity: Double
    /// Glass tint for pill buttons and segmented pickers.
    public var controlTint: Color
    /// Opacity used as a fallback on iOS < 26 for control surfaces.
    public var controlFallbackOpacity: Double
    /// Glass tint for primary compose / action surfaces.
    public var prominentTint: Color
    /// Opacity used as a fallback on iOS < 26 for prominent surfaces.
    public var prominentFallbackOpacity: Double
    /// Glass tint for bottom sheets.
    public var sheetTint: Color
    /// Opacity used as a fallback on iOS < 26 for sheet surfaces.
    public var sheetFallbackOpacity: Double
    /// Minimum distance for GlassEffectContainer morphing threshold.
    public var morphingSpacing: CGFloat

    public init(
        navigationTint: Color = Color.white.opacity(0.08),
        navigationFallbackOpacity: Double = 0.85,
        controlTint: Color = Color.white.opacity(0.12),
        controlFallbackOpacity: Double = 0.75,
        prominentTint: Color = Color.white.opacity(0.18),
        prominentFallbackOpacity: Double = 0.9,
        sheetTint: Color = Color.white.opacity(0.10),
        sheetFallbackOpacity: Double = 0.8,
        morphingSpacing: CGFloat = 8
    ) {
        self.navigationTint = navigationTint
        self.navigationFallbackOpacity = navigationFallbackOpacity
        self.controlTint = controlTint
        self.controlFallbackOpacity = controlFallbackOpacity
        self.prominentTint = prominentTint
        self.prominentFallbackOpacity = prominentFallbackOpacity
        self.sheetTint = sheetTint
        self.sheetFallbackOpacity = sheetFallbackOpacity
        self.morphingSpacing = morphingSpacing
    }
}

// MARK: - ElevationTokens

/// Surface elevation colour tokens for layered UI.
///
/// Mirrors the CSS `--sinch-sys-color-surface-*` hierarchy adapted for dark-mode iOS.
public struct ElevationTokens {
    /// Screen background — dark: `#000000`
    public var base: Color
    /// Card / sheet surface — dark: `#1C1C1E`
    public var raised: Color
    /// Row inside a card — dark: `#2C2C2E`
    public var grouped: Color
    /// Divider lines — dark: `rgba(255,255,255,0.15)`
    public var separator: Color

    public init(
        base: Color = Color(hex: 0xF2F2F7),
        raised: Color = Color(hex: 0xFFFFFF),
        grouped: Color = Color(hex: 0xF2F2F7),
        separator: Color = Color(hex: 0xC6C6C8)
    ) {
        self.base = base
        self.raised = raised
        self.grouped = grouped
        self.separator = separator
    }
}

// MARK: - AvatarTokens

/// Tokens controlling avatar appearance and identity colour palette.
public struct AvatarTokens {
    /// 6-colour identity palette used for initials avatars.
    /// Colour is chosen deterministically from the contact's display name.
    public var palette: [Color]

    public init(palette: [Color] = [
        Color(hex: 0x5E5CE6),  // indigo
        Color(hex: 0x30D158),  // green
        Color(hex: 0xFF9F0A),  // amber
        Color(hex: 0xFF375F),  // rose
        Color(hex: 0x0A84FF),  // blue
        Color(hex: 0xBF5AF2),  // purple
    ]) {
        self.palette = palette
    }

    /// Returns a deterministic palette colour for the given identity string.
    public func color(for identity: String) -> Color {
        guard !palette.isEmpty else { return .gray }
        let hash = identity.unicodeScalars.reduce(0) { $0 &+ Int($1.value) }
        return palette[abs(hash) % palette.count]
    }
}

// MARK: - Color hex initialiser

extension Color {
    /// Initialise a `Color` from a 0xRRGGBB hex integer.
    public init(hex: UInt32, opacity: Double = 1) {
        let r = Double((hex >> 16) & 0xFF) / 255
        let g = Double((hex >> 8) & 0xFF) / 255
        let b = Double(hex & 0xFF) / 255
        self.init(red: r, green: g, blue: b, opacity: opacity)
    }
}
