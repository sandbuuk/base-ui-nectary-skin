import SwiftUI

// MARK: - NectarySegmentedPicker

/// A pill-shaped segmented control for switching between two options.
///
/// Visually equivalent to iOS's native `Picker(.segmented)` but styled with
/// Nectary tokens and the glass material from `GlassTheme`.
///
/// ```swift
/// @State private var selected = 0
///
/// NectarySegmentedPicker(
///     selection: $selected,
///     segments: ["Open", "Closed"]
/// )
/// ```
public struct NectarySegmentedPicker: View {
    @Environment(\.nectaryTokens) private var tokens

    @Binding private var selection: Int
    private let segments: [String]

    /// - Parameters:
    ///   - selection: Index of the currently selected segment.
    ///   - segments: Labels for each segment (2–4 recommended).
    public init(selection: Binding<Int>, segments: [String]) {
        self._selection = selection
        self.segments = segments
    }

    public var body: some View {
        HStack(spacing: 0) {
            ForEach(segments.indices, id: \.self) { index in
                segmentButton(at: index)

                if index < segments.count - 1 {
                    Divider()
                        .frame(height: 16)
                        .background(tokens.color.borderDefault)
                }
            }
        }
        .frame(height: 36)
        .nectaryGlass(.control, tokens: tokens)
        .clipShape(Capsule())
        .overlay(Capsule().stroke(tokens.color.borderDefault, lineWidth: 0.5))
    }

    @ViewBuilder
    private func segmentButton(at index: Int) -> some View {
        let isSelected = selection == index

        Button {
            withAnimation(.easeInOut(duration: 0.15)) {
                selection = index
            }
        } label: {
            Text(segments[index])
                .font(tokens.typography.labelM)
                .foregroundColor(isSelected ? tokens.color.actionPrimary : tokens.color.textSecondary)
                .frame(maxWidth: .infinity)
                .frame(height: 36)
                .background(
                    Group {
                        if isSelected {
                            Capsule()
                                .fill(tokens.color.actionPrimary.opacity(0.15))
                        }
                    }
                )
        }
        .buttonStyle(.plain)
    }
}

// MARK: - Preview

#if DEBUG
#Preview("SegmentedPicker — Dark") {
    ZStack {
        Color.black.ignoresSafeArea()
        VStack(spacing: 24) {
            NectarySegmentedPicker(selection: .constant(0), segments: ["Open", "Closed"])
            NectarySegmentedPicker(selection: .constant(1), segments: ["Open", "Closed"])
            NectarySegmentedPicker(
                selection: .constant(1),
                segments: ["All", "Subscribed", "Unsubscribed"]
            )
        }
        .padding(.horizontal, 24)
    }
    .nectaryTheme(.sinchDark)
}
#endif
