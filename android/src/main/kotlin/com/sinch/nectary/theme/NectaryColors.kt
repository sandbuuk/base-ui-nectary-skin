package com.sinch.nectary.theme

import androidx.compose.material3.ColorScheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.ui.graphics.Color
import com.sinch.nectary.tokens.ColorTokens

/**
 * Maps Nectary [ColorTokens] onto a Material 3 [ColorScheme].
 *
 * The mapping prioritises semantic token equivalence:
 *   primary          ← actionPrimary
 *   onPrimary        ← onActionPrimary
 *   surface          ← surfacePrimaryDefault
 *   background       ← surfacePrimaryDefault
 *   error            ← statusError / actionDestructive
 */
fun colorTokensToLightScheme(tokens: ColorTokens): ColorScheme = lightColorScheme(
    primary = tokens.actionPrimary,
    onPrimary = tokens.onActionPrimary,
    primaryContainer = tokens.actionPrimaryHover,
    onPrimaryContainer = tokens.onActionPrimary,

    secondary = tokens.textSecondary,
    onSecondary = tokens.textOnColor,

    surface = tokens.surfacePrimaryDefault,
    onSurface = tokens.textPrimary,
    surfaceVariant = tokens.surfaceSecondary,
    onSurfaceVariant = tokens.textSecondary,

    background = tokens.surfacePrimaryDefault,
    onBackground = tokens.textPrimary,

    error = tokens.statusError,
    onError = Color.White,

    outline = tokens.borderDefault,
    outlineVariant = tokens.borderFocus,
)

fun colorTokensToDarkScheme(tokens: ColorTokens): ColorScheme = darkColorScheme(
    primary = tokens.actionPrimary,
    onPrimary = tokens.onActionPrimary,
    primaryContainer = tokens.actionPrimaryActive,
    onPrimaryContainer = tokens.onActionPrimary,

    secondary = tokens.textSecondary,
    onSecondary = tokens.textOnColor,

    surface = Color(0xFF1A1A2E),
    onSurface = Color.White,
    surfaceVariant = Color(0xFF2A2A3E),
    onSurfaceVariant = tokens.textSecondary,

    background = Color(0xFF111122),
    onBackground = Color.White,

    error = tokens.statusError,
    onError = Color.White,

    outline = Color(0xFF374151),
    outlineVariant = tokens.borderFocus,
)
