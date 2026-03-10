import SwiftUI

// MARK: - NectaryStatCard

/// A summary card displaying columns of statistics separated by vertical dividers.
///
/// Commonly used in contact management UIs for "All / Subscribed / Unsubscribed"
/// summary rows.
///
/// ```swift
/// NectaryStatCard(stats: [
///     .init(label: "All", value: "1,284"),
///     .init(label: "Subscribed", value: "943"),
///     .init(label: "Unsubscribed", value: "341")
/// ])
/// ```
public struct NectaryStatCard: View {
    @Environment(\.nectaryTokens) private var tokens

    /// A single statistic column.
    public struct Stat {
        /// The numeric or formatted value (e.g., "1,284").
        public let value: String
        /// The descriptive label below the value.
        public let label: String

        public init(label: String, value: String) {
            self.label = label
            self.value = value
        }
    }

    private let stats: [Stat]
    private let title: String?

    /// - Parameters:
    ///   - stats: Array of `Stat` values to display as columns. 2–4 recommended.
    ///   - title: Optional card title displayed above the stat row.
    public init(stats: [Stat], title: String? = nil) {
        self.stats = stats
        self.title = title
    }

    public var body: some View {
        VStack(alignment: .leading, spacing: tokens.spacing.spacing3) {
            if let title {
                Text(title)
                    .font(tokens.typography.labelM)
                    .foregroundColor(tokens.color.textSecondary)
                    .padding(.horizontal, tokens.spacing.spacing4)
                    .padding(.top, tokens.spacing.spacing3)
            }

            HStack(spacing: 0) {
                ForEach(stats.indices, id: \.self) { index in
                    statColumn(stats[index])

                    if index < stats.count - 1 {
                        Divider()
                            .frame(height: 40)
                            .background(tokens.elevation.separator)
                    }
                }
            }
            .padding(.vertical, tokens.spacing.spacing3)
            .padding(.bottom, title == nil ? 0 : tokens.spacing.spacing1)
        }
        .background(
            RoundedRectangle(cornerRadius: tokens.radius.l, style: .continuous)
                .fill(tokens.elevation.raised)
        )
    }

    private func statColumn(_ stat: Stat) -> some View {
        VStack(spacing: tokens.spacing.spacing1) {
            Text(stat.value)
                .font(tokens.typography.headingM)
                .foregroundColor(tokens.color.textPrimary)

            Text(stat.label)
                .font(tokens.typography.labelS)
                .foregroundColor(tokens.color.textSecondary)
        }
        .frame(maxWidth: .infinity)
    }
}

// MARK: - Preview

#if DEBUG
#Preview("StatCard — Dark") {
    ZStack {
        Color.black.ignoresSafeArea()
        VStack(spacing: 16) {
            NectaryStatCard(
                stats: [
                    .init(label: "All", value: "1,284"),
                    .init(label: "Subscribed", value: "943"),
                    .init(label: "Unsubscribed", value: "341")
                ],
                title: "Contacts"
            )

            NectaryStatCard(
                stats: [
                    .init(label: "Open", value: "12"),
                    .init(label: "Closed", value: "87")
                ]
            )
        }
        .padding(.horizontal, 16)
    }
    .nectaryTheme(.sinchDark)
}
#endif
