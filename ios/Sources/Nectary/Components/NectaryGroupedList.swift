import SwiftUI

// MARK: - NectaryGroupedList

/// A rounded-rect card container that wraps `NectaryListRow` items.
///
/// Matches the iOS Settings-style grouped table card pattern.
/// Place `NectaryListRow` views inside the content builder; the container
/// applies the rounded background and clips child views automatically.
///
/// Use `NectaryListDivider` between rows if you want hairline separators:
///
/// ```swift
/// NectaryGroupedList {
///     NectaryListRow(label: "Account", trailing: .disclosure, action: {})
///     NectaryListDivider()
///     NectaryListRow(label: "Privacy", trailing: .disclosure, action: {})
///     NectaryListDivider()
///     NectaryListRow(label: "Sign Out", trailing: .none)
/// }
/// ```
public struct NectaryGroupedList<Content: View>: View {
    @Environment(\.nectaryTokens) private var tokens

    private let content: Content

    public init(@ViewBuilder content: () -> Content) {
        self.content = content()
    }

    public var body: some View {
        VStack(spacing: 0) {
            content
        }
        .background(
            RoundedRectangle(cornerRadius: tokens.radius.l, style: .continuous)
                .fill(tokens.elevation.raised)
        )
        .clipShape(RoundedRectangle(cornerRadius: tokens.radius.l, style: .continuous))
    }
}

// MARK: - NectaryListDivider

/// A hairline divider for use between rows inside `NectaryGroupedList`.
///
/// Automatically insets to align with list row content (not spanning the full width).
public struct NectaryListDivider: View {
    @Environment(\.nectaryTokens) private var tokens

    public init() {}

    public var body: some View {
        tokens.elevation.separator
            .frame(height: 0.5)
            .padding(.leading, tokens.spacing.spacing4)
    }
}

// MARK: - Preview

#if DEBUG
#Preview("GroupedList — Dark") {
    ZStack {
        Color.black.ignoresSafeArea()
        VStack(spacing: 24) {
            NectaryGroupedList {
                NectaryListRow(label: "Account", trailing: .disclosure, action: {})
                NectaryListDivider()
                NectaryListRow(label: "Privacy", trailing: .disclosure, action: {})
                NectaryListDivider()
                NectaryListRow(label: "Notifications", trailing: .disclosure, action: {})
            }

            NectaryGroupedList {
                NectaryListRow(
                    label: "Notifications",
                    leading: .iconBadge(systemName: "bell.fill", backgroundColor: .red),
                    trailing: .disclosure,
                    action: {}
                )
                NectaryListDivider()
                NectaryListRow(
                    label: "Dark Mode",
                    leading: .iconBadge(systemName: "moon.fill", backgroundColor: .indigo),
                    trailing: .value("On"),
                    action: {}
                )
                NectaryListDivider()
                NectaryListRow(
                    label: "Help",
                    leading: .iconBadge(
                        systemName: "questionmark.circle.fill",
                        backgroundColor: Color(hex: 0x007AFF)
                    ),
                    trailing: .disclosure,
                    action: {}
                )
            }
        }
        .padding(.horizontal, 16)
    }
    .nectaryTheme(.sinchDark)
}
#endif
