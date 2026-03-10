import SwiftUI

// MARK: - NectaryAvatarSize

/// Avatar size variants.
public enum NectaryAvatarSize {
    /// 32pt — compact list rows.
    case s
    /// 44pt — standard list rows (default).
    case m
    /// 64pt — profile headers.
    case l
    /// 80pt — large profile displays.
    case xl

    var dimension: CGFloat {
        switch self {
        case .s:  return 32
        case .m:  return 44
        case .l:  return 64
        case .xl: return 80
        }
    }

    var fontSize: CGFloat {
        switch self {
        case .s:  return 13
        case .m:  return 17
        case .l:  return 26
        case .xl: return 32
        }
    }
}

// MARK: - NectaryAvatar

/// A circular avatar component for contact / user representation.
///
/// Renders in order of priority:
/// 1. **Image** — when `imageURL` is provided (placeholder shown if loading fails)
/// 2. **Initials** — up to 2 characters from `displayName`, on a deterministic palette colour
/// 3. **Silhouette** — generic `person.fill` icon if no name or image
///
/// Optionally overlays a `NectaryStatusBadge` in the bottom-trailing corner.
///
/// ```swift
/// NectaryAvatar(displayName: "Anna Kowalski")
///
/// NectaryAvatar(displayName: "Bob", statusBadge: .unread, size: .l)
/// ```
public struct NectaryAvatar: View {
    @Environment(\.nectaryTokens) private var tokens

    private let displayName: String?
    private let statusBadge: NectaryStatusBadgeVariant?
    private let size: NectaryAvatarSize

    /// - Parameters:
    ///   - displayName: Contact's full name. Used to derive initials and background colour.
    ///   - statusBadge: Optional status dot overlaid at the bottom-trailing corner.
    ///   - size: Avatar diameter preset (default `.m`).
    public init(
        displayName: String? = nil,
        statusBadge: NectaryStatusBadgeVariant? = nil,
        size: NectaryAvatarSize = .m
    ) {
        self.displayName = displayName
        self.statusBadge = statusBadge
        self.size = size
    }

    private var initials: String? {
        guard let name = displayName, !name.isEmpty else { return nil }
        let parts = name.components(separatedBy: .whitespaces).filter { !$0.isEmpty }
        switch parts.count {
        case 0:  return nil
        case 1:  return String(parts[0].prefix(2)).uppercased()
        default: return (String(parts[0].prefix(1)) + String(parts[1].prefix(1))).uppercased()
        }
    }

    private var backgroundColor: Color {
        guard let name = displayName, !name.isEmpty else {
            return tokens.color.surfaceSecondary
        }
        return tokens.avatar.color(for: name)
    }

    public var body: some View {
        ZStack(alignment: .bottomTrailing) {
            Circle()
                .fill(backgroundColor)
                .frame(width: size.dimension, height: size.dimension)
                .overlay(avatarContent)

            if let badge = statusBadge {
                NectaryStatusBadge(badge, size: badgeSize)
                    .offset(x: 2, y: 2)
            }
        }
    }

    @ViewBuilder
    private var avatarContent: some View {
        if let text = initials {
            Text(text)
                .font(.system(size: size.fontSize, weight: .semibold))
                .foregroundColor(.white)
        } else {
            Image(systemName: "person.fill")
                .font(.system(size: size.fontSize))
                .foregroundColor(.white.opacity(0.8))
        }
    }

    private var badgeSize: CGFloat {
        switch size {
        case .s:  return 10
        case .m:  return 12
        case .l:  return 16
        case .xl: return 20
        }
    }
}

// MARK: - Preview

#if DEBUG
#Preview("Avatar Variants — Dark") {
    ZStack {
        Color.black.ignoresSafeArea()
        VStack(spacing: 24) {
            HStack(spacing: 16) {
                NectaryAvatar(displayName: "Anna Kowalski", size: .m)
                NectaryAvatar(displayName: "Bob Smith", statusBadge: .unread, size: .m)
                NectaryAvatar(displayName: "Carlos M", statusBadge: .alert, size: .m)
                NectaryAvatar(displayName: "Diana Prince", statusBadge: .optOut, size: .m)
                NectaryAvatar(size: .m)
            }
            HStack(spacing: 16) {
                NectaryAvatar(displayName: "Anna Kowalski", size: .l)
                NectaryAvatar(displayName: "Bob Smith", statusBadge: .unread, size: .l)
            }
        }
    }
    .nectaryTheme(.sinchDark)
}
#endif
