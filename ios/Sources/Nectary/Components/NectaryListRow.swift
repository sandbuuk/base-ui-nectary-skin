import SwiftUI

// MARK: - NectaryListRowTrailing

/// Trailing accessory type for `NectaryListRow`.
public enum NectaryListRowTrailing {
    /// Right-pointing chevron for drill-down navigation.
    case disclosure
    /// A checkmark to indicate selection.
    case checkmark
    /// A text value (e.g., "On", "Never", a formatted number).
    case value(String)
    /// No trailing accessory.
    case none
}

// MARK: - NectaryListRowLeading

/// Leading slot content for `NectaryListRow`.
public enum NectaryListRowLeading {
    /// A Settings-style rounded-square icon badge.
    case iconBadge(systemName: String, backgroundColor: Color)
    /// A circular avatar with optional initials.
    case avatar(displayName: String?, statusBadge: NectaryStatusBadgeVariant? = nil)
    /// No leading element.
    case none
}

// MARK: - NectaryListRow

/// A single list row with optional leading icon/avatar, label, subtitle, and trailing accessory.
///
/// Designed to be used inside `NectaryGroupedList` or a standard `List`/`LazyVStack`.
///
/// ```swift
/// NectaryListRow(
///     label: "Notifications",
///     leading: .iconBadge(systemName: "bell.fill", backgroundColor: .red),
///     trailing: .disclosure
/// )
///
/// NectaryListRow(
///     label: "Anna Kowalski",
///     subtitle: "+1 555 123 4567",
///     leading: .avatar(displayName: "Anna Kowalski"),
///     trailing: .checkmark
/// )
/// ```
public struct NectaryListRow: View {
    @Environment(\.nectaryTokens) private var tokens

    private let label: String
    private let subtitle: String?
    private let leading: NectaryListRowLeading
    private let trailing: NectaryListRowTrailing
    private let action: (() -> Void)?

    /// - Parameters:
    ///   - label: Primary row label.
    ///   - subtitle: Optional secondary line below the label.
    ///   - leading: Leading slot content (icon badge, avatar, or none).
    ///   - trailing: Trailing accessory (disclosure, checkmark, value, or none).
    ///   - action: Optional tap handler; when provided the row is tappable.
    public init(
        label: String,
        subtitle: String? = nil,
        leading: NectaryListRowLeading = .none,
        trailing: NectaryListRowTrailing = .none,
        action: (() -> Void)? = nil
    ) {
        self.label = label
        self.subtitle = subtitle
        self.leading = leading
        self.trailing = trailing
        self.action = action
    }

    public var body: some View {
        let content = rowContent

        if let action {
            Button(action: action) { content }
                .buttonStyle(.plain)
        } else {
            content
        }
    }

    private var rowContent: some View {
        HStack(spacing: tokens.spacing.spacing3) {
            leadingView

            VStack(alignment: .leading, spacing: 2) {
                Text(label)
                    .font(tokens.typography.bodyM)
                    .foregroundColor(tokens.color.textPrimary)

                if let sub = subtitle {
                    Text(sub)
                        .font(tokens.typography.bodyS)
                        .foregroundColor(tokens.color.textSecondary)
                }
            }

            Spacer(minLength: 0)

            trailingView
        }
        .padding(.horizontal, tokens.spacing.spacing4)
        .frame(minHeight: 44)
        .contentShape(Rectangle())
    }

    @ViewBuilder
    private var leadingView: some View {
        switch leading {
        case .iconBadge(let name, let bg):
            NectaryIconBadge(systemName: name, backgroundColor: bg)
        case .avatar(let name, let badge):
            NectaryAvatar(displayName: name, statusBadge: badge, size: .s)
        case .none:
            EmptyView()
        }
    }

    @ViewBuilder
    private var trailingView: some View {
        switch trailing {
        case .disclosure:
            Image(systemName: "chevron.right")
                .font(.system(size: 13, weight: .semibold))
                .foregroundColor(tokens.color.iconSecondary)
        case .checkmark:
            Image(systemName: "checkmark")
                .font(.system(size: 14, weight: .semibold))
                .foregroundColor(tokens.color.actionPrimary)
        case .value(let text):
            Text(text)
                .font(tokens.typography.bodyM)
                .foregroundColor(tokens.color.textSecondary)
        case .none:
            EmptyView()
        }
    }
}

// MARK: - Preview

#if DEBUG
#Preview("ListRow Variants — Dark") {
    ZStack {
        Color.black.ignoresSafeArea()
        VStack(spacing: 0) {
            NectaryListRow(
                label: "Notifications",
                leading: .iconBadge(systemName: "bell.fill", backgroundColor: .red),
                trailing: .disclosure
            )
            Divider().background(Color.white.opacity(0.15))

            NectaryListRow(
                label: "Dark Mode",
                subtitle: "Enabled",
                leading: .iconBadge(systemName: "moon.fill", backgroundColor: .indigo),
                trailing: .value("On")
            )
            Divider().background(Color.white.opacity(0.15))

            NectaryListRow(
                label: "Anna Kowalski",
                subtitle: "+1 555 123 4567",
                leading: .avatar(displayName: "Anna Kowalski"),
                trailing: .checkmark
            )
            Divider().background(Color.white.opacity(0.15))

            NectaryListRow(label: "Plain row", trailing: .disclosure)
        }
        .background(Color(hex: 0x1C1C1E))
        .cornerRadius(12)
        .padding(.horizontal, 16)
    }
    .nectaryTheme(.sinchDark)
}
#endif
