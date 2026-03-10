package com.sinch.nectary.theme

import androidx.compose.material3.Typography
import com.sinch.nectary.tokens.TypographyTokens

/**
 * Maps Nectary [TypographyTokens] onto a Material 3 [Typography].
 */
fun typographyTokensToM3Typography(tokens: TypographyTokens): Typography = Typography(
    // Display — not in Nectary scale, map to headingXl
    displayLarge = tokens.headingXl,
    displayMedium = tokens.headingL,
    displaySmall = tokens.headingM,

    // Headline
    headlineLarge = tokens.headingL,
    headlineMedium = tokens.headingM,
    headlineSmall = tokens.headingS,

    // Title (label-weight headings)
    titleLarge = tokens.labelL,
    titleMedium = tokens.labelM,
    titleSmall = tokens.labelS,

    // Body
    bodyLarge = tokens.bodyL,
    bodyMedium = tokens.bodyM,
    bodySmall = tokens.bodyS,

    // Label
    labelLarge = tokens.labelL,
    labelMedium = tokens.labelM,
    labelSmall = tokens.labelS,
)
