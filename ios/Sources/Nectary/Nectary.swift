/// Nectary iOS SDK
///
/// A Swift / SwiftUI implementation of the Sinch Nectary design system.
/// Mirrors the token structure and component API of the web design system
/// (Base UI + @nectary/theme-base CSS custom properties).
///
/// ## Quick start
///
/// 1. Add the package via Swift Package Manager:
///    ```
///    https://github.com/sinch/nectary-ios
///    ```
///
/// 2. Wrap your root view in `NectaryTheme`. Use `colorScheme: .dark` for the
///    Sinch Conversations dark preset:
///    ```swift
///    import Nectary
///
///    @main
///    struct MyApp: App {
///        var body: some Scene {
///            WindowGroup {
///                NectaryTheme(colorScheme: .dark) {
///                    ContentView()
///                }
///            }
///        }
///    }
///    ```
///
/// 3. Use Nectary components:
///    ```swift
///    // Primitives
///    NectaryButton("Send") { }
///    NectaryTextField(text: $name, label: "Name")
///    NectaryToggle("Enable push", isOn: $pushEnabled)
///    NectaryCheckbox("Accept terms", isOn: $accepted)
///    NectarySpinner()
///
///    // Media / identity
///    NectaryAvatar(displayName: "Anna Kowalski", statusBadge: .unread)
///    NectaryStatusBadge(.alert)
///    NectaryIconBadge(systemName: "bell.fill", backgroundColor: .red)
///
///    // Input
///    NectarySearchBar(text: $query)
///    NectarySegmentedPicker(selection: $tab, segments: ["Open", "Closed"])
///
///    // Navigation chrome
///    NectaryNavigationBar(
///        title: "New Message",
///        leading: .init(label: "Cancel", action: { dismiss() }),
///        trailing: .init(label: "Submit", action: { send() })
///    )
///    NectaryTabBar(selection: $tab, items: [
///        .init(label: "Inbox", systemName: "tray.fill"),
///        .init(label: "Contacts", systemName: "person.2.fill"),
///        .init(label: "Settings", systemName: "gearshape.fill")
///    ])
///
///    // Lists
///    NectaryGroupedList {
///        NectaryListRow(label: "Notifications", trailing: .disclosure, action: {})
///        NectaryListDivider()
///        NectaryListRow(label: "Privacy", trailing: .disclosure, action: {})
///    }
///    NectaryStatCard(stats: [
///        .init(label: "All", value: "1,284"),
///        .init(label: "Subscribed", value: "943")
///    ])
///
///    // Inbox
///    NectaryInboxRow(
///        senderName: "Anna Kowalski",
///        messagePreview: "Thanks for your help!",
///        timestamp: "10:42",
///        isUnread: true,
///        statusBadge: .unread
///    )
///    ```
///
/// 4. Access raw tokens anywhere in the hierarchy:
///    ```swift
///    @Environment(\.nectaryTokens) var tokens
///    ```
///
/// ## iOS 26 Liquid Glass
///
/// Navigation bars, tab bars, and segmented pickers automatically use the
/// `.glassEffect()` material on iOS 26+. On iOS 16–25 they fall back to an
/// opaque `tokens.elevation.raised` background. Use `nectaryGlass(_:tokens:)` /
/// `nectaryGlassCapsule(_:tokens:)` / `nectaryGlassRounded(_:tokens:cornerRadius:)`
/// on any view to apply the same treatment to custom surfaces.

// Re-export all public types for single-import convenience.
@_exported import struct Foundation.URL
