import SwiftUI

// MARK: - NectarySearchBar

/// A rounded pill search field with a leading magnifier icon.
///
/// Binds to an external `@State` or `@Binding<String>`. Shows a clear button
/// when the field contains text.
///
/// ```swift
/// @State private var query = ""
///
/// NectarySearchBar(text: $query, placeholder: "Search contacts")
/// ```
public struct NectarySearchBar: View {
    @Environment(\.nectaryTokens) private var tokens
    @FocusState private var isFocused: Bool

    @Binding private var text: String
    private let placeholder: String
    private let onSubmit: (() -> Void)?

    /// - Parameters:
    ///   - text: Binding to the current search string.
    ///   - placeholder: Placeholder text (default "Search").
    ///   - onSubmit: Optional closure called when the user taps the Search key.
    public init(
        text: Binding<String>,
        placeholder: String = "Search",
        onSubmit: (() -> Void)? = nil
    ) {
        self._text = text
        self.placeholder = placeholder
        self.onSubmit = onSubmit
    }

    public var body: some View {
        HStack(spacing: tokens.spacing.spacing2) {
            Image(systemName: "magnifyingglass")
                .foregroundColor(tokens.color.iconSecondary)
                .font(.system(size: 16, weight: .regular))

            TextField(placeholder, text: $text)
                .font(tokens.typography.bodyM)
                .foregroundColor(tokens.color.textPrimary)
                .focused($isFocused)
                .submitLabel(.search)
                .onSubmit { onSubmit?() }

            if !text.isEmpty {
                Button {
                    text = ""
                } label: {
                    Image(systemName: "xmark.circle.fill")
                        .foregroundColor(tokens.color.iconSecondary)
                        .font(.system(size: 16))
                }
                .buttonStyle(.plain)
            }
        }
        .padding(.horizontal, tokens.spacing.spacing3)
        .frame(height: 36)
        .background(
            Capsule()
                .fill(tokens.elevation.grouped)
        )
        .animation(.easeInOut(duration: 0.15), value: text.isEmpty)
    }
}

// MARK: - Preview

#if DEBUG
#Preview("SearchBar States — Dark") {
    ZStack {
        Color.black.ignoresSafeArea()
        VStack(spacing: 16) {
            NectarySearchBar(text: .constant(""), placeholder: "Search contacts")
            NectarySearchBar(text: .constant("Anna"), placeholder: "Search contacts")
        }
        .padding(.horizontal, 16)
    }
    .nectaryTheme(.sinchDark)
}
#endif
