import SwiftUI

// MARK: - Environment key

private struct NectaryTokensKey: EnvironmentKey {
    static let defaultValue = NectaryTokens()
}

extension EnvironmentValues {
    /// The active Nectary design tokens for the current subtree.
    ///
    /// Access tokens anywhere inside a `NectaryTheme { … }` block:
    /// ```swift
    /// struct MyView: View {
    ///     @Environment(\.nectaryTokens) var tokens
    ///
    ///     var body: some View {
    ///         Text("Hello")
    ///             .foregroundColor(tokens.color.textPrimary)
    ///     }
    /// }
    /// ```
    public var nectaryTokens: NectaryTokens {
        get { self[NectaryTokensKey.self] }
        set { self[NectaryTokensKey.self] = newValue }
    }
}

// MARK: - NectaryTheme view modifier / container

/// Root container that injects Nectary design tokens into the SwiftUI environment.
///
/// Wrap your root view (or any subtree that should use Nectary tokens) inside `NectaryTheme`:
///
/// ```swift
/// @main
/// struct MyApp: App {
///     var body: some Scene {
///         WindowGroup {
///             NectaryTheme {
///                 ContentView()
///             }
///         }
///     }
/// }
/// ```
///
/// Use the Sinch dark theme (recommended for Sinch Conversations):
/// ```swift
/// NectaryTheme(colorScheme: .dark) {
///     ContentView()
/// }
/// ```
///
/// Override specific tokens to white-label or brand the system:
/// ```swift
/// var customTokens = NectaryTokens()
/// customTokens.color.actionPrimary = Color(hex: 0x007AFF)
///
/// NectaryTheme(tokens: customTokens) {
///     ContentView()
/// }
/// ```
public struct NectaryTheme<Content: View>: View {
    private let tokens: NectaryTokens
    private let colorScheme: ColorScheme?
    private let content: Content

    /// - Parameters:
    ///   - tokens: Token set to inject. Ignored when `colorScheme` is provided (the preset
    ///     for that scheme is used instead). Defaults to the light token defaults.
    ///   - colorScheme: When `.dark`, automatically selects `NectaryTokens.sinchDark` and
    ///     pins the view tree to dark mode. When `nil` the supplied `tokens` are used as-is.
    public init(
        tokens: NectaryTokens = NectaryTokens(),
        colorScheme: ColorScheme? = nil,
        @ViewBuilder content: () -> Content
    ) {
        self.colorScheme = colorScheme
        self.tokens = colorScheme == .dark ? .sinchDark : tokens
        self.content = content()
    }

    public var body: some View {
        content
            .environment(\.nectaryTokens, tokens)
            .preferredColorScheme(colorScheme)
    }
}

// MARK: - Convenience modifier

extension View {
    /// Apply Nectary tokens to any view subtree without wrapping in `NectaryTheme { }`.
    ///
    /// ```swift
    /// MyView()
    ///     .nectaryTheme(customTokens)
    ///
    /// // Apply the Sinch dark preset:
    /// MyView()
    ///     .nectaryTheme(.sinchDark)
    /// ```
    public func nectaryTheme(_ tokens: NectaryTokens = NectaryTokens()) -> some View {
        environment(\.nectaryTokens, tokens)
    }
}
