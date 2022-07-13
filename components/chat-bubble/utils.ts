import type { TSinchChatBubbleStatus, TSinchChatBubbleType } from './types'

export const typeValues: readonly TSinchChatBubbleType[] = ['customer', 'agent', 'agent-prev']
export const statusValues: readonly TSinchChatBubbleStatus[] = ['sending', 'sent', 'received', 'seen', 'error'] as const
