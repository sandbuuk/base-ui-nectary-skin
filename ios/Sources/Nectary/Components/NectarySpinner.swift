import SwiftUI

// MARK: - NectarySpinnerSize

/// Size variants for `NectarySpinner`.
public enum NectarySpinnerSize {
    /// 20pt — inline/compact contexts.
    case s
    /// 32pt — default.
    case m
    /// 48pt — full-screen loading states.
    case l
}

// MARK: - NectarySpinner

/// A Nectary-styled circular activity indicator.
///
/// Wraps `ProgressView` with Nectary token colours. Use for loading states.
///
/// ```swift
/// NectarySpinner()
///
/// NectarySpinner(size: .l)
/// ```
public struct NectarySpinner: View {
    @Environment(\.nectaryTokens) private var tokens

    private let size: NectarySpinnerSize

    public init(size: NectarySpinnerSize = .m) {
        self.size = size
    }

    private var dimension: CGFloat {
        switch size {
        case .s: return 20
        case .m: return 32
        case .l: return 48
        }
    }

    public var body: some View {
        ProgressView()
            .progressViewStyle(.circular)
            .tint(tokens.color.actionPrimary)
            .scaleEffect(scaleFactor)
    }

    private var scaleFactor: CGFloat {
        // ProgressView's default circular size is ~20pt; scale to match token sizes
        switch size {
        case .s: return 1.0
        case .m: return 1.6
        case .l: return 2.4
        }
    }
}

// MARK: - Preview

#if DEBUG
#Preview("Spinner Sizes — Dark") {
    ZStack {
        Color.black.ignoresSafeArea()
        HStack(spacing: 32) {
            NectarySpinner(size: .s)
            NectarySpinner(size: .m)
            NectarySpinner(size: .l)
        }
    }
    .nectaryTheme(.sinchDark)
}
#endif
