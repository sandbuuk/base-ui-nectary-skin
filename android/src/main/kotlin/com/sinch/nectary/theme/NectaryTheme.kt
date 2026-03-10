package com.sinch.nectary.theme

import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.ReadOnlyComposable
import androidx.compose.runtime.staticCompositionLocalOf
import com.sinch.nectary.tokens.NectaryTokens

// ---------------------------------------------------------------------------
// CompositionLocal — gives any child composable access to raw Nectary tokens
// ---------------------------------------------------------------------------

val LocalNectaryTokens = staticCompositionLocalOf { NectaryTokens() }

/**
 * Accessor for the current [NectaryTokens] within a [NectaryTheme] subtree.
 *
 * Usage:
 * ```kotlin
 * val tokens = NectaryTheme.tokens
 * Box(Modifier.background(tokens.color.surfaceSecondary)) { … }
 * ```
 */
object NectaryTheme {
    val tokens: NectaryTokens
        @Composable
        @ReadOnlyComposable
        get() = LocalNectaryTokens.current
}

// ---------------------------------------------------------------------------
// NectaryTheme composable
// ---------------------------------------------------------------------------

/**
 * Root theme composable for the Nectary Android design system.
 *
 * Wraps Material 3 [MaterialTheme] with Sinch / Nectary token values and
 * exposes the full raw token set via [NectaryTheme.tokens].
 *
 * @param tokens    Custom token overrides. Defaults to [NectaryTokens] with
 *                  standard Sinch brand values.
 * @param darkTheme Whether to apply the dark colour scheme.
 *                  Defaults to the system setting.
 * @param content   Composable content rendered inside the theme.
 *
 * Example:
 * ```kotlin
 * NectaryTheme {
 *     NectaryButton(text = "Send message", onClick = { … })
 * }
 * ```
 */
@Composable
fun NectaryTheme(
    tokens: NectaryTokens = NectaryTokens(),
    darkTheme: Boolean = isSystemInDarkTheme(),
    content: @Composable () -> Unit,
) {
    val colorScheme = if (darkTheme) {
        colorTokensToDarkScheme(tokens.color)
    } else {
        colorTokensToLightScheme(tokens.color)
    }

    val typography = typographyTokensToM3Typography(tokens.typography)

    CompositionLocalProvider(LocalNectaryTokens provides tokens) {
        MaterialTheme(
            colorScheme = colorScheme,
            typography = typography,
            content = content,
        )
    }
}
