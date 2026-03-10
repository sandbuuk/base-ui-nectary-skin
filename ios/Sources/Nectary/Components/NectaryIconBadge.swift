import SwiftUI

// MARK: - NectaryIconBadge

/// A Settings-style rounded-square icon cell with a coloured background and SF Symbol.
///
/// Used as leading items in `NectaryListRow` for settings-style interfaces.
///
/// ```swift
/// NectaryIconBadge(systemName: "bell.fill", backgroundColor: .green)
/// NectaryIconBadge(systemName: "person.2.fill", backgroundColor: Color(hex: 0x007AFF))
/// ```
public struct NectaryIconBadge: View {
    @Environment(\.nectaryTokens) private var tokens

    private let systemName: String
    private let backgroundColor: Color
    private let size: CGFloat

    /// - Parameters:
    ///   - systemName: SF Symbol name for the icon.
    ///   - backgroundColor: Background fill colour for the rounded square.
    ///   - size: Overall badge dimension (default 32pt).
    public init(systemName: String, backgroundColor: Color, size: CGFloat = 32) {
        self.systemName = systemName
        self.backgroundColor = backgroundColor
        self.size = size
    }

    public var body: some View {
        ZStack {
            RoundedRectangle(cornerRadius: size * 0.22, style: .continuous)
                .fill(backgroundColor)
                .frame(width: size, height: size)

            Image(systemName: systemName)
                .font(.system(size: size * 0.5, weight: .medium))
                .foregroundColor(.white)
        }
        .frame(width: size, height: size)
    }
}

// MARK: - Preview

#if DEBUG
#Preview("IconBadge Variants — Dark") {
    ZStack {
        Color.black.ignoresSafeArea()
        HStack(spacing: 16) {
            NectaryIconBadge(systemName: "bell.fill", backgroundColor: .green)
            NectaryIconBadge(systemName: "person.2.fill", backgroundColor: Color(hex: 0x007AFF))
            NectaryIconBadge(systemName: "gearshape.fill", backgroundColor: Color(hex: 0x8E8E93))
            NectaryIconBadge(systemName: "exclamationmark.triangle.fill", backgroundColor: Color(hex: 0xFF9500))
        }
    }
    .nectaryTheme(.sinchDark)
}
#endif
