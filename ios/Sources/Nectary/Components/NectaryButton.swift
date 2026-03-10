import SwiftUI

// MARK: - NectaryButtonVariant

/// Visual variants for `NectaryButton`, mirroring the web design system.
///
/// Corresponds to the `variant` prop in the React component.
public enum NectaryButtonVariant {
    /// Filled button with the primary action colour. Use as the main CTA.
    case primary
    /// Outlined button. Use for secondary actions alongside a primary button.
    case secondary
    /// Ghost / text button tinted with the primary action colour.
    case subtlePrimary
    /// Ghost / text button with neutral text colour.
    case subtleSecondary
    /// Same appearance as `primary`; used in call-to-action contexts.
    case ctaPrimary
    /// Outlined button with the primary action colour border.
    case ctaSecondary
    /// Filled button using the error/destructive colour.
    case destructive
    /// Pill-shaped ghost button with white label. Used for Cancel / Save / Done in navigation bars.
    case navBarGhost
    /// Pill-shaped ghost button with error colour label. Used for Cancel on destructive sheets.
    case navBarDestructive
}

// MARK: - NectaryButtonSize

/// Size variants for `NectaryButton`.
///
/// All sizes respect Apple's recommended 44pt minimum touch target via
/// `.contentShape(Rectangle())` and at least 44pt height.
public enum NectaryButtonSize {
    /// 28pt — use in compact/dense contexts only.
    case xs
    /// 36pt
    case s
    /// 44pt (default)
    case m
    /// 52pt
    case l
}

// MARK: - NectaryButton

/// A Nectary-styled button for SwiftUI.
///
/// Reads design tokens from the SwiftUI environment via `\.nectaryTokens`.
/// Wrap your view hierarchy in `NectaryTheme { … }` to inject tokens.
///
/// ```swift
/// NectaryButton("Send message") {
///     viewModel.sendMessage()
/// }
///
/// NectaryButton(
///     "Delete account",
///     variant: .destructive,
///     size: .l
/// ) {
///     viewModel.deleteAccount()
/// }
/// ```
public struct NectaryButton: View {
    @Environment(\.nectaryTokens) private var tokens
    @Environment(\.isEnabled) private var isEnabled

    private let title: String
    private let variant: NectaryButtonVariant
    private let size: NectaryButtonSize
    private let action: () -> Void

    public init(
        _ title: String,
        variant: NectaryButtonVariant = .primary,
        size: NectaryButtonSize = .m,
        action: @escaping () -> Void
    ) {
        self.title = title
        self.variant = variant
        self.size = size
        self.action = action
    }

    // MARK: Computed style values

    private var height: CGFloat {
        switch size {
        case .xs: return 28
        case .s:  return 36
        case .m:  return 44
        case .l:  return 52
        }
    }

    private var horizontalPadding: CGFloat {
        switch size {
        case .xs: return tokens.spacing.spacing2
        case .s:  return tokens.spacing.spacing3
        case .m:  return tokens.spacing.spacing4
        case .l:  return tokens.spacing.spacing5
        }
    }

    private var font: Font {
        switch size {
        case .xs, .s: return tokens.typography.labelS
        case .m:      return tokens.typography.labelM
        case .l:      return tokens.typography.labelL
        }
    }

    private var isNavBar: Bool {
        variant == .navBarGhost || variant == .navBarDestructive
    }

    private var backgroundColor: Color {
        let c = tokens.color
        switch variant {
        case .primary, .ctaPrimary:
            return c.actionPrimary
        case .destructive:
            return c.statusError
        case .secondary, .ctaSecondary, .subtlePrimary, .subtleSecondary,
             .navBarGhost, .navBarDestructive:
            return .clear
        }
    }

    private var foregroundColor: Color {
        let c = tokens.color
        switch variant {
        case .primary, .ctaPrimary:
            return c.onActionPrimary
        case .destructive:
            return .white
        case .secondary, .subtleSecondary:
            return c.textPrimary
        case .ctaSecondary, .subtlePrimary:
            return c.actionPrimary
        case .navBarGhost:
            return c.textPrimary
        case .navBarDestructive:
            return c.statusError
        }
    }

    private var borderColor: Color {
        let c = tokens.color
        switch variant {
        case .secondary:
            return c.borderDefault
        case .ctaSecondary:
            return c.actionPrimary
        default:
            return .clear
        }
    }

    private var cornerRadius: CGFloat {
        isNavBar ? tokens.radius.full : tokens.radius.m
    }

    // MARK: Body

    public var body: some View {
        Button(action: action) {
            Text(title)
                .font(font)
                .foregroundColor(foregroundColor.opacity(isEnabled ? 1 : 0.5))
                .padding(.horizontal, horizontalPadding)
                .frame(height: height)
                .background(
                    RoundedRectangle(cornerRadius: cornerRadius, style: .continuous)
                        .fill(backgroundColor.opacity(isEnabled ? 1 : 0.5))
                )
                .overlay(
                    RoundedRectangle(cornerRadius: cornerRadius, style: .continuous)
                        .stroke(borderColor, lineWidth: 1)
                )
        }
        .buttonStyle(.plain)
        .contentShape(Rectangle())
    }
}

// MARK: - Preview

#if DEBUG
#Preview("All Variants — Dark") {
    ZStack {
        Color.black.ignoresSafeArea()
        VStack(spacing: 16) {
            NectaryButton("Primary") {}
            NectaryButton("Secondary", variant: .secondary) {}
            NectaryButton("Subtle Primary", variant: .subtlePrimary) {}
            NectaryButton("CTA Secondary", variant: .ctaSecondary) {}
            NectaryButton("Destructive", variant: .destructive) {}
            NectaryButton("Nav Bar Ghost", variant: .navBarGhost) {}
            NectaryButton("Nav Bar Destructive", variant: .navBarDestructive) {}
            NectaryButton("Disabled", variant: .primary) {}
                .disabled(true)
        }
        .padding()
    }
    .nectaryTheme(.sinchDark)
}
#endif
