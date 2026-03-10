import SwiftUI

// MARK: - NectaryStatusBadgeVariant

/// Status indicators overlaid on avatars and conversation rows.
public enum NectaryStatusBadgeVariant {
    /// Red dot — unread or urgent alert.
    case alert
    /// Orange dot — opted out / do-not-disturb.
    case optOut
    /// Blue dot — new unread message.
    case unread
}

// MARK: - NectaryStatusBadge

/// A small coloured dot used as an overlay on `NectaryAvatar` or standalone.
///
/// Renders a filled circle with a white stroke ring so it reads cleanly against
/// both light and dark avatar backgrounds.
///
/// ```swift
/// NectaryStatusBadge(.unread)
/// NectaryStatusBadge(.alert, size: 10)
/// ```
public struct NectaryStatusBadge: View {
    @Environment(\.nectaryTokens) private var tokens

    private let variant: NectaryStatusBadgeVariant
    private let size: CGFloat

    /// - Parameters:
    ///   - variant: The status to convey.
    ///   - size: Diameter of the dot (default 12pt).
    public init(_ variant: NectaryStatusBadgeVariant, size: CGFloat = 12) {
        self.variant = variant
        self.size = size
    }

    private var fillColor: Color {
        switch variant {
        case .alert:   return tokens.color.statusError
        case .optOut:  return tokens.color.statusWarning
        case .unread:  return tokens.color.actionPrimary
        }
    }

    public var body: some View {
        Circle()
            .fill(fillColor)
            .frame(width: size, height: size)
            .overlay(
                Circle()
                    .stroke(tokens.elevation.base, lineWidth: 2)
            )
    }
}

// MARK: - Preview

#if DEBUG
#Preview("StatusBadge Variants — Dark") {
    ZStack {
        Color.black.ignoresSafeArea()
        HStack(spacing: 20) {
            NectaryStatusBadge(.alert)
            NectaryStatusBadge(.optOut)
            NectaryStatusBadge(.unread)
        }
    }
    .nectaryTheme(.sinchDark)
}
#endif
