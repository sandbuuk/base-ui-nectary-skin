import SwiftUI

// MARK: - NectaryInboxRow

/// A composite inbox list item that combines avatar, status badge, sender, message preview,
/// timestamp, and optional assigned-agent avatar.
///
/// Matches the conversation row pattern from the Sinch Conversations inbox screen.
///
/// ```swift
/// NectaryInboxRow(
///     senderName: "Anna Kowalski",
///     messagePreview: "Thanks for getting back to me!",
///     timestamp: "10:42",
///     isUnread: true,
///     statusBadge: .unread
/// )
/// ```
public struct NectaryInboxRow: View {
    @Environment(\.nectaryTokens) private var tokens

    private let senderName: String
    private let messagePreview: String
    private let timestamp: String
    private let isUnread: Bool
    private let statusBadge: NectaryStatusBadgeVariant?
    private let assignedAgentName: String?
    private let action: (() -> Void)?

    /// - Parameters:
    ///   - senderName: Contact's display name.
    ///   - messagePreview: Truncated preview of the latest message.
    ///   - timestamp: Formatted time/date string (e.g., "10:42", "Yesterday").
    ///   - isUnread: Whether the conversation has unread messages. Bold sender name when `true`.
    ///   - statusBadge: Optional status badge overlaid on the avatar.
    ///   - assignedAgentName: Optional name for the assigned agent avatar on the trailing edge.
    ///   - action: Tap handler for navigating into the conversation.
    public init(
        senderName: String,
        messagePreview: String,
        timestamp: String,
        isUnread: Bool = false,
        statusBadge: NectaryStatusBadgeVariant? = nil,
        assignedAgentName: String? = nil,
        action: (() -> Void)? = nil
    ) {
        self.senderName = senderName
        self.messagePreview = messagePreview
        self.timestamp = timestamp
        self.isUnread = isUnread
        self.statusBadge = statusBadge
        self.assignedAgentName = assignedAgentName
        self.action = action
    }

    public var body: some View {
        Button {
            action?()
        } label: {
            HStack(spacing: tokens.spacing.spacing3) {
                // Avatar + status badge
                NectaryAvatar(
                    displayName: senderName,
                    statusBadge: statusBadge,
                    size: .m
                )

                // Main content
                VStack(alignment: .leading, spacing: 3) {
                    HStack {
                        Text(senderName)
                            .font(isUnread ? tokens.typography.labelM : tokens.typography.bodyM)
                            .foregroundColor(tokens.color.textPrimary)
                            .lineLimit(1)

                        Spacer(minLength: tokens.spacing.spacing2)

                        Text(timestamp)
                            .font(tokens.typography.labelXs)
                            .foregroundColor(
                                isUnread ? tokens.color.actionPrimary : tokens.color.textSecondary
                            )
                    }

                    HStack {
                        Text(messagePreview)
                            .font(tokens.typography.bodyS)
                            .foregroundColor(tokens.color.textSecondary)
                            .lineLimit(2)

                        Spacer(minLength: 0)

                        if let agentName = assignedAgentName {
                            NectaryAvatar(displayName: agentName, size: .s)
                        }
                    }
                }
            }
            .padding(.horizontal, tokens.spacing.spacing4)
            .padding(.vertical, tokens.spacing.spacing3)
            .contentShape(Rectangle())
        }
        .buttonStyle(.plain)
    }
}

// MARK: - Preview

#if DEBUG
#Preview("InboxRow Variants — Dark") {
    let separator = Color.white.opacity(0.15)
    return ZStack {
        Color.black.ignoresSafeArea()
        VStack(spacing: 0) {
            NectaryInboxRow(
                senderName: "Anna Kowalski",
                messagePreview: "Thanks for getting back to me so quickly!",
                timestamp: "10:42",
                isUnread: true,
                statusBadge: .unread,
                assignedAgentName: "Sam Agent"
            )
            separator.frame(height: 0.5).padding(.leading, 72)

            NectaryInboxRow(
                senderName: "Bob Smith",
                messagePreview: "Please let me know when you have a chance.",
                timestamp: "Yesterday",
                isUnread: false,
                statusBadge: .optOut
            )
            separator.frame(height: 0.5).padding(.leading, 72)

            NectaryInboxRow(
                senderName: "Carlos Martinez",
                messagePreview: "I need help with my order #12345",
                timestamp: "Mon",
                isUnread: true,
                statusBadge: .alert
            )
        }
        .background(Color(hex: 0x1C1C1E))
    }
    .nectaryTheme(.sinchDark)
}
#endif
