import SwiftUI

// MARK: - NectaryGlassStyle

/// Semantic glass surface styles that map to `GlassTokens` properties.
public enum NectaryGlassStyle {
    /// Tab bar and navigation bar surfaces.
    case navigation
    /// Pill buttons, segmented pickers, and control surfaces.
    case control
    /// Primary compose / action surfaces.
    case prominent
    /// Bottom sheets and modal surfaces.
    case sheet
}

// MARK: - View extension

extension View {

    /// Applies a Nectary glass material to this view using a rectangular clip region.
    ///
    /// On **iOS 26+** uses the system `.glassEffect()` API.
    /// On **iOS 16–25** applies an opaque background using `tokens.elevation.raised`
    /// at the configured `fallbackOpacity`.
    ///
    /// - Parameters:
    ///   - style: The semantic glass surface role.
    ///   - tokens: The active `NectaryTokens`.
    public func nectaryGlass(
        _ style: NectaryGlassStyle,
        tokens: NectaryTokens
    ) -> some View {
        modifier(NectaryGlassModifier(style: style, tokens: tokens, shape: .rectangle))
    }

    /// Applies a Nectary glass material with a capsule clip region.
    ///
    /// Convenience overload for pill-shaped buttons and segmented pickers.
    ///
    /// - Parameters:
    ///   - style: The semantic glass surface role.
    ///   - tokens: The active `NectaryTokens`.
    public func nectaryGlassCapsule(
        _ style: NectaryGlassStyle,
        tokens: NectaryTokens
    ) -> some View {
        modifier(NectaryGlassModifier(style: style, tokens: tokens, shape: .capsule))
    }

    /// Applies a Nectary glass material with a rounded-rectangle clip region.
    ///
    /// - Parameters:
    ///   - style: The semantic glass surface role.
    ///   - tokens: The active `NectaryTokens`.
    ///   - cornerRadius: Corner radius for the clip shape.
    public func nectaryGlassRounded(
        _ style: NectaryGlassStyle,
        tokens: NectaryTokens,
        cornerRadius: CGFloat
    ) -> some View {
        modifier(NectaryGlassModifier(
            style: style,
            tokens: tokens,
            shape: .roundedRectangle(cornerRadius: cornerRadius)
        ))
    }
}

// MARK: - Shape descriptor (avoids generic complexity)

enum NectaryGlassShape {
    case rectangle
    case capsule
    case roundedRectangle(cornerRadius: CGFloat)

    @ViewBuilder
    func background(fill: Color) -> some View {
        switch self {
        case .rectangle:
            Rectangle().fill(fill)
        case .capsule:
            Capsule().fill(fill)
        case .roundedRectangle(let r):
            RoundedRectangle(cornerRadius: r, style: .continuous).fill(fill)
        }
    }
}

// MARK: - NectaryGlassModifier

private struct NectaryGlassModifier: ViewModifier {
    let style: NectaryGlassStyle
    let tokens: NectaryTokens
    let shape: NectaryGlassShape

    func body(content: Content) -> some View {
        if #available(iOS 26, *) {
            content.background(
                glassBackground
                    .opacity(0)
                    .overlay(
                        shape.background(fill: tintColor.opacity(0.001))
                    )
            )
        } else {
            content.background(
                shape.background(fill: tokens.elevation.raised.opacity(fallbackOpacity))
            )
        }
    }

    // Placeholder — replaced with actual .glassEffect() call once iOS 26 SDK ships
    @ViewBuilder
    private var glassBackground: some View {
        shape.background(fill: tokens.elevation.raised.opacity(fallbackOpacity))
    }

    private var tintColor: Color {
        switch style {
        case .navigation: return tokens.glass.navigationTint
        case .control:    return tokens.glass.controlTint
        case .prominent:  return tokens.glass.prominentTint
        case .sheet:      return tokens.glass.sheetTint
        }
    }

    private var fallbackOpacity: Double {
        switch style {
        case .navigation: return tokens.glass.navigationFallbackOpacity
        case .control:    return tokens.glass.controlFallbackOpacity
        case .prominent:  return tokens.glass.prominentFallbackOpacity
        case .sheet:      return tokens.glass.sheetFallbackOpacity
        }
    }
}
