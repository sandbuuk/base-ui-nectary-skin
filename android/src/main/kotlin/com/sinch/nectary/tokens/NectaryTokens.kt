package com.sinch.nectary.tokens

import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

/**
 * NectaryTokens
 *
 * Platform-local representation of the Nectary / Sinch design tokens.
 * These values mirror the CSS custom properties defined in @nectary/theme-base:
 *
 *   --sinch-color-*    → [ColorTokens]
 *   --sinch-spacing-*  → [SpacingTokens]
 *   --sinch-radius-*   → [RadiusTokens]
 *   --sinch-font-*     → [TypographyTokens]
 *   --sinch-size-*     → [SizeTokens]
 *
 * Override by supplying a custom [NectaryTokens] instance to [NectaryTheme].
 */
data class NectaryTokens(
    val color: ColorTokens = ColorTokens(),
    val spacing: SpacingTokens = SpacingTokens(),
    val radius: RadiusTokens = RadiusTokens(),
    val typography: TypographyTokens = TypographyTokens(),
    val size: SizeTokens = SizeTokens(),
)

// ---------------------------------------------------------------------------
// Color tokens  (--sinch-color-* and --sinch-sys-color-*)
// ---------------------------------------------------------------------------

data class ColorTokens(
    // Action
    val actionPrimary: Color = Color(0xFFE87722),          // --sinch-color-action-primary
    val actionPrimaryHover: Color = Color(0xFFC86015),     // --sinch-color-action-primary-hover
    val actionPrimaryActive: Color = Color(0xFFA64E10),    // --sinch-color-action-primary-active
    val actionSecondary: Color = Color.Transparent,        // --sinch-color-action-secondary
    val actionDestructive: Color = Color(0xFFD32F2F),      // --sinch-color-action-destructive

    // On-action
    val onActionPrimary: Color = Color.White,              // --sinch-color-on-action-primary
    val onActionSecondary: Color = Color(0xFF1A1A2E),      // --sinch-color-on-action-secondary

    // Surface
    val surfacePrimaryDefault: Color = Color.White,        // --sinch-sys-color-surface-primary-default
    val surfaceSecondary: Color = Color(0xFFF8F9FA),       // --sinch-sys-color-surface-secondary
    val surfaceOverlay: Color = Color(0x80000000),         // --sinch-sys-color-surface-overlay

    // Text
    val textPrimary: Color = Color(0xFF1A1A2E),            // --sinch-sys-color-text-primary
    val textSecondary: Color = Color(0xFF6B7280),          // --sinch-sys-color-text-secondary
    val textDisabled: Color = Color(0xFF9CA3AF),           // --sinch-sys-color-text-disabled
    val textOnColor: Color = Color.White,                  // --sinch-sys-color-text-on-color

    // Icon
    val iconPrimary: Color = Color(0xFF1A1A2E),            // --sinch-sys-color-icon-primary
    val iconSecondary: Color = Color(0xFF6B7280),          // --sinch-sys-color-icon-secondary
    val iconDisabled: Color = Color(0xFF9CA3AF),           // --sinch-sys-color-icon-disabled

    // Border
    val borderDefault: Color = Color(0xFFD1D5DB),          // --sinch-sys-color-border-default
    val borderFocus: Color = Color(0xFFE87722),            // --sinch-sys-color-border-focus
    val borderInvalid: Color = Color(0xFFD32F2F),          // --sinch-sys-color-border-invalid

    // Status
    val statusSuccess: Color = Color(0xFF16A34A),          // --sinch-sys-color-status-success
    val statusWarning: Color = Color(0xFFD97706),          // --sinch-sys-color-status-warning
    val statusError: Color = Color(0xFFD32F2F),            // --sinch-sys-color-status-error
    val statusInfo: Color = Color(0xFF2563EB),             // --sinch-sys-color-status-info
)

// ---------------------------------------------------------------------------
// Spacing tokens  (--sinch-spacing-*)
// ---------------------------------------------------------------------------

data class SpacingTokens(
    val spacing0: Dp = 0.dp,    // --sinch-spacing-0
    val spacing1: Dp = 4.dp,    // --sinch-spacing-1
    val spacing2: Dp = 8.dp,    // --sinch-spacing-2
    val spacing3: Dp = 12.dp,   // --sinch-spacing-3
    val spacing4: Dp = 16.dp,   // --sinch-spacing-4
    val spacing5: Dp = 20.dp,   // --sinch-spacing-5
    val spacing6: Dp = 24.dp,   // --sinch-spacing-6
    val spacing7: Dp = 32.dp,   // --sinch-spacing-7
    val spacing8: Dp = 48.dp,   // --sinch-spacing-8
)

// ---------------------------------------------------------------------------
// Border-radius tokens  (--sinch-radius-*)
// ---------------------------------------------------------------------------

data class RadiusTokens(
    val xs: Dp = 2.dp,          // --sinch-radius-xs
    val s: Dp = 4.dp,           // --sinch-radius-s
    val m: Dp = 8.dp,           // --sinch-radius-m
    val l: Dp = 12.dp,          // --sinch-radius-l
    val xl: Dp = 16.dp,         // --sinch-radius-xl
    val full: Dp = 9999.dp,     // --sinch-radius-full
)

// ---------------------------------------------------------------------------
// Typography tokens  (--sinch-font-*)
// ---------------------------------------------------------------------------

data class TypographyTokens(
    // Labels
    val labelXs: TextStyle = TextStyle(fontSize = 10.sp, fontWeight = FontWeight.Medium, lineHeight = 14.sp),
    val labelS: TextStyle = TextStyle(fontSize = 12.sp, fontWeight = FontWeight.Medium, lineHeight = 16.sp),
    val labelM: TextStyle = TextStyle(fontSize = 14.sp, fontWeight = FontWeight.Medium, lineHeight = 20.sp),
    val labelL: TextStyle = TextStyle(fontSize = 16.sp, fontWeight = FontWeight.Medium, lineHeight = 24.sp),

    // Body
    val bodyS: TextStyle = TextStyle(fontSize = 12.sp, fontWeight = FontWeight.Normal, lineHeight = 18.sp),
    val bodyM: TextStyle = TextStyle(fontSize = 14.sp, fontWeight = FontWeight.Normal, lineHeight = 22.sp),
    val bodyL: TextStyle = TextStyle(fontSize = 16.sp, fontWeight = FontWeight.Normal, lineHeight = 24.sp),

    // Headings
    val headingS: TextStyle = TextStyle(fontSize = 18.sp, fontWeight = FontWeight.SemiBold, lineHeight = 26.sp),
    val headingM: TextStyle = TextStyle(fontSize = 22.sp, fontWeight = FontWeight.SemiBold, lineHeight = 30.sp),
    val headingL: TextStyle = TextStyle(fontSize = 28.sp, fontWeight = FontWeight.Bold, lineHeight = 36.sp),
    val headingXl: TextStyle = TextStyle(fontSize = 36.sp, fontWeight = FontWeight.Bold, lineHeight = 44.sp),
)

// ---------------------------------------------------------------------------
// Size tokens  (--sinch-size-*)
// ---------------------------------------------------------------------------

data class SizeTokens(
    val iconXs: Dp = 16.dp,     // --sinch-size-icon-xs
    val iconS: Dp = 20.dp,      // --sinch-size-icon-s
    val iconM: Dp = 24.dp,      // --sinch-size-icon-m
    val iconL: Dp = 32.dp,      // --sinch-size-icon-l
    val iconXl: Dp = 40.dp,     // --sinch-size-icon-xl
)
