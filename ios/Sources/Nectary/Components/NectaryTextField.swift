import SwiftUI

// MARK: - NectaryTextFieldStatus

/// Visual status for `NectaryTextField`.
public enum NectaryTextFieldStatus {
    case `default`
    case invalid
}

// MARK: - NectaryTextField

/// A Nectary-styled text field for SwiftUI.
///
/// Reads design tokens from `\.nectaryTokens` in the SwiftUI environment.
///
/// ```swift
/// @State private var email = ""
///
/// NectaryTextField(
///     text: $email,
///     label: "Email address",
///     placeholder: "you@example.com",
///     keyboardType: .emailAddress
/// )
///
/// // With validation
/// NectaryTextField(
///     text: $email,
///     label: "Email address",
///     helperText: "Please enter a valid email",
///     status: emailIsValid ? .default : .invalid
/// )
/// ```
public struct NectaryTextField: View {
    @Environment(\.nectaryTokens) private var tokens
    @FocusState private var isFocused: Bool

    @Binding private var text: String
    private let label: String?
    private let placeholder: String
    private let helperText: String?
    private let status: NectaryTextFieldStatus
    private let isSecure: Bool
    private let keyboardType: UIKeyboardType
    private let returnKeyType: UIReturnKeyType
    private let onSubmit: (() -> Void)?
    private let leadingIcon: AnyView?
    private let trailingIcon: AnyView?

    public init(
        text: Binding<String>,
        label: String? = nil,
        placeholder: String = "",
        helperText: String? = nil,
        status: NectaryTextFieldStatus = .default,
        isSecure: Bool = false,
        keyboardType: UIKeyboardType = .default,
        returnKeyType: UIReturnKeyType = .default,
        onSubmit: (() -> Void)? = nil,
        leadingIcon: (some View)? = nil,
        trailingIcon: (some View)? = nil
    ) {
        self._text = text
        self.label = label
        self.placeholder = placeholder
        self.helperText = helperText
        self.status = status
        self.isSecure = isSecure
        self.keyboardType = keyboardType
        self.returnKeyType = returnKeyType
        self.onSubmit = onSubmit
        self.leadingIcon = leadingIcon.map { AnyView($0) }
        self.trailingIcon = trailingIcon.map { AnyView($0) }
    }

    private var isInvalid: Bool { status == .invalid }

    private var borderColor: Color {
        let c = tokens.color
        if isInvalid { return c.borderInvalid }
        if isFocused { return c.borderFocus }
        return c.borderDefault
    }

    private var shadowColor: Color {
        let c = tokens.color
        if isInvalid { return c.borderInvalid.opacity(0.25) }
        if isFocused { return c.borderFocus.opacity(0.2) }
        return .clear
    }

    public var body: some View {
        VStack(alignment: .leading, spacing: tokens.spacing.spacing1) {
            // Label
            if let label {
                Text(label)
                    .font(tokens.typography.labelS)
                    .foregroundColor(tokens.color.textPrimary)
            }

            // Input wrapper
            HStack(spacing: tokens.spacing.spacing2) {
                if let leadingIcon {
                    leadingIcon
                        .foregroundColor(tokens.color.iconSecondary)
                        .frame(width: tokens.size.iconS, height: tokens.size.iconS)
                }

                Group {
                    if isSecure {
                        SecureField(placeholder, text: $text)
                    } else {
                        TextField(placeholder, text: $text)
                            .keyboardType(keyboardType)
                    }
                }
                .font(tokens.typography.bodyM)
                .foregroundColor(tokens.color.textPrimary)
                .focused($isFocused)
                .submitLabel(returnKeyType.submitLabel)
                .onSubmit { onSubmit?() }

                if let trailingIcon {
                    trailingIcon
                        .foregroundColor(tokens.color.iconSecondary)
                        .frame(width: tokens.size.iconS, height: tokens.size.iconS)
                }
            }
            .padding(.horizontal, tokens.spacing.spacing3)
            .frame(height: 44)
            .background(
                RoundedRectangle(cornerRadius: tokens.radius.m, style: .continuous)
                    .fill(tokens.color.surfacePrimaryDefault)
            )
            .overlay(
                RoundedRectangle(cornerRadius: tokens.radius.m, style: .continuous)
                    .stroke(borderColor, lineWidth: 1)
            )
            .shadow(color: shadowColor, radius: 3, x: 0, y: 0)
            .animation(.easeInOut(duration: 0.15), value: isFocused)
            .animation(.easeInOut(duration: 0.15), value: isInvalid)

            // Helper / error text
            if let helperText {
                Text(helperText)
                    .font(tokens.typography.labelXs)
                    .foregroundColor(isInvalid ? tokens.color.statusError : tokens.color.textSecondary)
            }
        }
    }
}

// MARK: - UIReturnKeyType → SubmitLabel

private extension UIReturnKeyType {
    var submitLabel: SubmitLabel {
        switch self {
        case .go:       return .go
        case .next:     return .next
        case .search:   return .search
        case .send:     return .send
        case .done:     return .done
        default:        return .return
        }
    }
}

// MARK: - Preview

#if DEBUG
#Preview {
    VStack(spacing: 20) {
        NectaryTextField(text: .constant(""), label: "Email", placeholder: "you@example.com")
        NectaryTextField(text: .constant("bad@"), label: "Email", helperText: "Invalid email address", status: .invalid)
        NectaryTextField(text: .constant("secret"), label: "Password", isSecure: true)
    }
    .padding()
    .nectaryTheme()
}
#endif
