import SwiftUI

// MARK: - NectaryNavigationBar

/// A navigation bar with a centred title and optional leading/trailing pill buttons.
///
/// Uses `NectaryButton(.navBarGhost)` for Cancel/Done/Save/Submit actions and
/// applies the navigation glass material for a frosted appearance on iOS 26+.
///
/// ```swift
/// NectaryNavigationBar(
///     title: "New Message",
///     leading: NectaryNavigationBar.Item(label: "Cancel", action: { dismiss() }),
///     trailing: NectaryNavigationBar.Item(label: "Submit", action: { send() })
/// )
/// ```
public struct NectaryNavigationBar: View {
    @Environment(\.nectaryTokens) private var tokens

    /// A navigation bar button item descriptor.
    public struct Item {
        public let label: String
        public let isDestructive: Bool
        public let action: () -> Void

        /// - Parameters:
        ///   - label: Button label text.
        ///   - isDestructive: When `true`, uses `.navBarDestructive` variant (error colour).
        ///   - action: Closure invoked on tap.
        public init(label: String, isDestructive: Bool = false, action: @escaping () -> Void) {
            self.label = label
            self.isDestructive = isDestructive
            self.action = action
        }
    }

    private let title: String
    private let leading: Item?
    private let trailing: Item?

    /// - Parameters:
    ///   - title: Navigation bar title, centred between leading and trailing items.
    ///   - leading: Optional leading button (typically "Cancel" or back navigation).
    ///   - trailing: Optional trailing button (typically "Done", "Save", or "Submit").
    public init(
        title: String,
        leading: Item? = nil,
        trailing: Item? = nil
    ) {
        self.title = title
        self.leading = leading
        self.trailing = trailing
    }

    public var body: some View {
        ZStack {
            // Background glass material
            tokens.elevation.raised
                .nectaryGlass(.navigation, tokens: tokens)
                .ignoresSafeArea(edges: .top)

            HStack(spacing: tokens.spacing.spacing2) {
                // Leading button
                if let item = leading {
                    NectaryButton(
                        item.label,
                        variant: item.isDestructive ? .navBarDestructive : .navBarGhost,
                        size: .s,
                        action: item.action
                    )
                } else {
                    Spacer(minLength: 0)
                        .frame(width: 80)
                }

                Spacer(minLength: 0)

                Text(title)
                    .font(tokens.typography.labelL)
                    .foregroundColor(tokens.color.textPrimary)
                    .lineLimit(1)

                Spacer(minLength: 0)

                // Trailing button
                if let item = trailing {
                    NectaryButton(
                        item.label,
                        variant: item.isDestructive ? .navBarDestructive : .navBarGhost,
                        size: .s,
                        action: item.action
                    )
                } else {
                    Spacer(minLength: 0)
                        .frame(width: 80)
                }
            }
            .padding(.horizontal, tokens.spacing.spacing4)
            .frame(height: 44)
        }
        .frame(height: 44)
    }
}

// MARK: - Preview

#if DEBUG
#Preview("NavigationBar Variants — Dark") {
    ZStack {
        Color.black.ignoresSafeArea()
        VStack(spacing: 24) {
            NectaryNavigationBar(title: "Inbox")

            NectaryNavigationBar(
                title: "New Message",
                leading: .init(label: "Cancel", action: {}),
                trailing: .init(label: "Submit", action: {})
            )

            NectaryNavigationBar(
                title: "Delete Contact",
                leading: .init(label: "Cancel", action: {}),
                trailing: .init(label: "Delete", isDestructive: true, action: {})
            )
        }
    }
    .nectaryTheme(.sinchDark)
}
#endif
