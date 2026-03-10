import SwiftUI

// MARK: - NectaryTokens.sinchDark

public extension NectaryTokens {

    /// The Sinch Conversations dark theme preset.
    ///
    /// Applies the Sinch brand palette on top of iOS dark-mode system values.
    /// Apply via `NectaryTheme(colorScheme: .dark)` or directly:
    ///
    /// ```swift
    /// NectaryTheme(tokens: .sinchDark) {
    ///     ContentView()
    /// }
    /// ```
    static var sinchDark: NectaryTokens {
        NectaryTokens(
            color: ColorTokens(
                actionPrimary:        Color(hex: 0x007AFF),
                actionPrimaryHover:   Color(hex: 0x0A84FF),
                actionPrimaryActive:  Color(hex: 0x0040DD),
                actionSecondary:      .clear,
                actionDestructive:    Color(hex: 0xFF3B30),
                onActionPrimary:      .white,
                onActionSecondary:    .white,
                surfacePrimaryDefault: Color(hex: 0x1C1C1E),
                surfaceSecondary:      Color(hex: 0x2C2C2E),
                surfaceOverlay:        Color.black.opacity(0.6),
                textPrimary:           .white,
                textSecondary:         Color(hex: 0x8E8E93),
                textDisabled:          Color(hex: 0x48484A),
                textOnColor:           .white,
                iconPrimary:           .white,
                iconSecondary:         Color(hex: 0x8E8E93),
                iconDisabled:          Color(hex: 0x48484A),
                borderDefault:         Color.white.opacity(0.15),
                borderFocus:           Color(hex: 0x007AFF),
                borderInvalid:         Color(hex: 0xFF3B30),
                statusSuccess:         Color(hex: 0x34C759),
                statusWarning:         Color(hex: 0xFF9500),
                statusError:           Color(hex: 0xFF3B30),
                statusInfo:            Color(hex: 0x0A84FF)
            ),
            spacing: SpacingTokens(),
            radius: RadiusTokens(),
            typography: TypographyTokens(),
            size: SizeTokens(),
            glass: GlassTokens(
                navigationTint:            Color.white.opacity(0.08),
                navigationFallbackOpacity: 0.85,
                controlTint:               Color.white.opacity(0.12),
                controlFallbackOpacity:    0.75,
                prominentTint:             Color.white.opacity(0.18),
                prominentFallbackOpacity:  0.9,
                sheetTint:                 Color.white.opacity(0.10),
                sheetFallbackOpacity:      0.8,
                morphingSpacing:           8
            ),
            elevation: ElevationTokens(
                base:      Color(hex: 0x000000),
                raised:    Color(hex: 0x1C1C1E),
                grouped:   Color(hex: 0x2C2C2E),
                separator: Color.white.opacity(0.15)
            ),
            avatar: AvatarTokens(palette: [
                Color(hex: 0x5E5CE6),
                Color(hex: 0x30D158),
                Color(hex: 0xFF9F0A),
                Color(hex: 0xFF375F),
                Color(hex: 0x0A84FF),
                Color(hex: 0xBF5AF2),
            ])
        )
    }
}
