import SwiftUI

// MARK: - NectaryToggle (Switch)

/// A Nectary-styled toggle (switch) for SwiftUI.
///
/// Backed by the native SwiftUI `Toggle` with Nectary token colours applied
/// via `toggleStyle`.
///
/// ```swift
/// @State private var notifications = true
///
/// NectaryToggle("Enable notifications", isOn: $notifications)
///
/// // Without a label
/// NectaryToggle(isOn: $notifications)
/// ```
public struct NectaryToggle: View {
    @Environment(\.nectaryTokens) private var tokens

    @Binding private var isOn: Bool
    private let label: String?

    public init(_ label: String? = nil, isOn: Binding<Bool>) {
        self.label = label
        self._isOn = isOn
    }

    public var body: some View {
        Toggle(isOn: $isOn) {
            if let label {
                Text(label)
                    .font(tokens.typography.bodyM)
                    .foregroundColor(tokens.color.textPrimary)
            }
        }
        .toggleStyle(NectarySwitchToggleStyle(tokens: tokens))
    }
}

// MARK: - NectarySwitchToggleStyle

/// A `ToggleStyle` that renders a Nectary-branded switch track and thumb.
struct NectarySwitchToggleStyle: ToggleStyle {
    let tokens: NectaryTokens

    private let trackWidth: CGFloat = 44
    private let trackHeight: CGFloat = 24
    private let thumbDiameter: CGFloat = 20
    private let padding: CGFloat = 2

    func makeBody(configuration: Configuration) -> some View {
        HStack(spacing: tokens.spacing.spacing2) {
            configuration.label

            Spacer(minLength: 0)

            ZStack(alignment: configuration.isOn ? .trailing : .leading) {
                // Track
                RoundedRectangle(cornerRadius: tokens.radius.full, style: .continuous)
                    .fill(configuration.isOn ? tokens.color.actionPrimary : tokens.color.borderDefault)
                    .frame(width: trackWidth, height: trackHeight)

                // Thumb
                Circle()
                    .fill(Color.white)
                    .shadow(color: .black.opacity(0.3), radius: 1.5, x: 0, y: 1)
                    .frame(width: thumbDiameter, height: thumbDiameter)
                    .padding(padding)
            }
            .frame(width: trackWidth, height: trackHeight)
            .animation(.easeInOut(duration: 0.15), value: configuration.isOn)
            .onTapGesture { configuration.isOn.toggle() }
        }
    }
}

// MARK: - NectaryCheckbox

/// A Nectary-styled checkbox for SwiftUI.
///
/// ```swift
/// @State private var agreed = false
///
/// NectaryCheckbox("I agree to the terms", isOn: $agreed)
/// ```
public struct NectaryCheckbox: View {
    @Environment(\.nectaryTokens) private var tokens
    @Environment(\.isEnabled) private var isEnabled

    @Binding private var isOn: Bool
    private let label: String?
    private let isIndeterminate: Bool

    public init(_ label: String? = nil, isOn: Binding<Bool>, indeterminate: Bool = false) {
        self.label = label
        self._isOn = isOn
        self.isIndeterminate = indeterminate
    }

    private var boxColor: Color {
        guard isEnabled else {
            return (isOn || isIndeterminate)
                ? tokens.color.actionPrimary.opacity(0.38)
                : tokens.color.borderDefault.opacity(0.38)
        }
        return (isOn || isIndeterminate) ? tokens.color.actionPrimary : .clear
    }

    private var borderColor: Color {
        guard isEnabled else { return tokens.color.borderDefault.opacity(0.38) }
        return (isOn || isIndeterminate) ? tokens.color.actionPrimary : tokens.color.borderDefault
    }

    public var body: some View {
        Button {
            if isEnabled { isOn.toggle() }
        } label: {
            HStack(spacing: tokens.spacing.spacing2) {
                // Box
                ZStack {
                    RoundedRectangle(cornerRadius: tokens.radius.xs, style: .continuous)
                        .fill(boxColor)
                        .overlay(
                            RoundedRectangle(cornerRadius: tokens.radius.xs, style: .continuous)
                                .stroke(borderColor, lineWidth: 1.5)
                        )
                        .frame(width: 20, height: 20)

                    if isIndeterminate {
                        Rectangle()
                            .fill(tokens.color.onActionPrimary)
                            .frame(width: 10, height: 1.75)
                            .cornerRadius(1)
                    } else if isOn {
                        Image(systemName: "checkmark")
                            .font(.system(size: 11, weight: .bold))
                            .foregroundColor(tokens.color.onActionPrimary)
                    }
                }

                if let label {
                    Text(label)
                        .font(tokens.typography.bodyM)
                        .foregroundColor(isEnabled ? tokens.color.textPrimary : tokens.color.textDisabled)
                }
            }
        }
        .buttonStyle(.plain)
        .animation(.easeInOut(duration: 0.1), value: isOn)
    }
}

// MARK: - Preview

#if DEBUG
#Preview {
    VStack(alignment: .leading, spacing: 20) {
        NectaryToggle("Enable notifications", isOn: .constant(true))
        NectaryToggle("Marketing emails", isOn: .constant(false))
        NectaryCheckbox("Accept terms and conditions", isOn: .constant(false))
        NectaryCheckbox("Some items selected", isOn: .constant(false), indeterminate: true)
        NectaryCheckbox("Agreed", isOn: .constant(true))
    }
    .padding()
    .nectaryTheme()
}
#endif
