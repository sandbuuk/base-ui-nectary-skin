import SwiftUI

// MARK: - NectaryTabBar

/// A 3-item bottom tab bar styled with Nectary tokens and optional glass material.
///
/// The selected item uses `tokens.color.actionPrimary` for its icon and label;
/// unselected items use `tokens.color.iconSecondary`.
///
/// ```swift
/// @State private var selectedTab = 0
///
/// NectaryTabBar(
///     selection: $selectedTab,
///     items: [
///         .init(label: "Inbox", systemName: "tray.fill"),
///         .init(label: "Contacts", systemName: "person.2.fill"),
///         .init(label: "Settings", systemName: "gearshape.fill")
///     ]
/// )
/// ```
public struct NectaryTabBar: View {
    @Environment(\.nectaryTokens) private var tokens

    /// Describes a single tab bar item.
    public struct Item {
        public let label: String
        public let systemName: String
        public let badgeCount: Int

        /// - Parameters:
        ///   - label: Text label displayed below the icon.
        ///   - systemName: SF Symbol identifier for the tab icon.
        ///   - badgeCount: When > 0, shows a count badge on the icon.
        public init(label: String, systemName: String, badgeCount: Int = 0) {
            self.label = label
            self.systemName = systemName
            self.badgeCount = badgeCount
        }
    }

    @Binding private var selection: Int
    private let items: [Item]

    /// - Parameters:
    ///   - selection: Index of the currently selected tab.
    ///   - items: Tab bar item descriptors.
    public init(selection: Binding<Int>, items: [Item]) {
        self._selection = selection
        self.items = items
    }

    public var body: some View {
        HStack(spacing: 0) {
            ForEach(items.indices, id: \.self) { index in
                tabItem(items[index], index: index)
            }
        }
        .padding(.horizontal, tokens.spacing.spacing4)
        .padding(.top, tokens.spacing.spacing2)
        .padding(.bottom, tokens.spacing.spacing3)
        .nectaryGlass(.navigation, tokens: tokens)
        .overlay(
            tokens.elevation.separator
                .frame(height: 0.5),
            alignment: .top
        )
    }

    private func tabItem(_ item: Item, index: Int) -> some View {
        let isSelected = selection == index

        return Button {
            withAnimation(.easeInOut(duration: 0.15)) {
                selection = index
            }
        } label: {
            VStack(spacing: tokens.spacing.spacing1) {
                ZStack(alignment: .topTrailing) {
                    Image(systemName: item.systemName)
                        .font(.system(size: 22))
                        .foregroundColor(
                            isSelected ? tokens.color.actionPrimary : tokens.color.iconSecondary
                        )

                    if item.badgeCount > 0 {
                        Text(item.badgeCount > 99 ? "99+" : "\(item.badgeCount)")
                            .font(.system(size: 9, weight: .bold))
                            .foregroundColor(.white)
                            .padding(.horizontal, 4)
                            .padding(.vertical, 2)
                            .background(Capsule().fill(tokens.color.statusError))
                            .offset(x: 10, y: -6)
                    }
                }

                Text(item.label)
                    .font(tokens.typography.labelXs)
                    .foregroundColor(
                        isSelected ? tokens.color.actionPrimary : tokens.color.iconSecondary
                    )
            }
            .frame(maxWidth: .infinity)
            .contentShape(Rectangle())
        }
        .buttonStyle(.plain)
    }
}

// MARK: - Preview

#if DEBUG
#Preview("TabBar — Dark") {
    ZStack {
        Color.black.ignoresSafeArea()
        VStack {
            Spacer()
            NectaryTabBar(
                selection: .constant(0),
                items: [
                    .init(label: "Inbox", systemName: "tray.fill", badgeCount: 3),
                    .init(label: "Contacts", systemName: "person.2.fill"),
                    .init(label: "Settings", systemName: "gearshape.fill")
                ]
            )
        }
    }
    .nectaryTheme(.sinchDark)
}
#endif
