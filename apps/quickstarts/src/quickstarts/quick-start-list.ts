import { quickAbandonedCartRecovery } from './quick-abandoned-cart-recovery'
import { quickCustomerSupport } from './quick-customer-support'
import { quickFAQChatbot } from './quick-faq-chatbot'
import { quickLeadsConverter } from './quick-leads-converter'
import { quickOrderStatus } from './quick-order-status'
import { quickProductFeedback } from './quick-product-feedback'
import type { QuickStart } from './types'

// New quick starts should be added here.
export const quickStartList: Record<string, QuickStart> = {
  'quick-leads-converter': quickLeadsConverter,
  'quick-customer-support': quickCustomerSupport,
  'quick-faq-chatbot': quickFAQChatbot,
  'quick-abandoned-cart-recovery': quickAbandonedCartRecovery,
  'quick-product-feedback': quickProductFeedback,
  'quick-order-status': quickOrderStatus,
}
