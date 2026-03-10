package com.sinch.nectary.components

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.sinch.nectary.theme.NectaryTheme

/**
 * Nectary button variants, mirroring the web design system.
 *
 * Maps to CSS classes on the React side:
 *   primary         → filled button using actionPrimary
 *   secondary       → outlined button using borderDefault
 *   subtle-primary  → text button tinted with actionPrimary
 *   subtle-secondary→ text button using textPrimary
 *   cta-primary     → same as primary (CTA emphasis is contextual)
 *   cta-secondary   → outlined with actionPrimary border
 *   destructive     → filled button using statusError
 */
enum class NectaryButtonVariant {
    Primary,
    Secondary,
    SubtlePrimary,
    SubtleSecondary,
    CtaPrimary,
    CtaSecondary,
    Destructive,
}

/**
 * Nectary button sizes.
 *
 * Touch targets respect the 48dp minimum recommended by Material / WCAG:
 *   xs → 32dp (use in compact/dense layouts only)
 *   s  → 36dp
 *   m  → 44dp  (default)
 *   l  → 52dp
 */
enum class NectaryButtonSize { Xs, S, M, L }

/**
 * A Nectary-styled button composable.
 *
 * @param text      Button label.
 * @param onClick   Click callback.
 * @param modifier  Compose modifier.
 * @param variant   Visual variant. Defaults to [NectaryButtonVariant.Primary].
 * @param size      Size variant. Defaults to [NectaryButtonSize.M].
 * @param enabled   Whether the button is interactive.
 *
 * Usage:
 * ```kotlin
 * NectaryButton(
 *     text = "Send message",
 *     onClick = { viewModel.send() },
 *     variant = NectaryButtonVariant.Primary,
 * )
 * ```
 */
@Composable
fun NectaryButton(
    text: String,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    variant: NectaryButtonVariant = NectaryButtonVariant.Primary,
    size: NectaryButtonSize = NectaryButtonSize.M,
    enabled: Boolean = true,
) {
    val tokens = NectaryTheme.tokens
    val c = tokens.color
    val r = tokens.radius
    val sp = tokens.spacing

    val heightDp = when (size) {
        NectaryButtonSize.Xs -> 32.dp
        NectaryButtonSize.S -> 36.dp
        NectaryButtonSize.M -> 44.dp
        NectaryButtonSize.L -> 52.dp
    }

    val horizontalPadding = when (size) {
        NectaryButtonSize.Xs -> sp.spacing2
        NectaryButtonSize.S -> sp.spacing3
        NectaryButtonSize.M -> sp.spacing4
        NectaryButtonSize.L -> sp.spacing5
    }

    val textStyle = when (size) {
        NectaryButtonSize.Xs, NectaryButtonSize.S -> tokens.typography.labelS
        NectaryButtonSize.M -> tokens.typography.labelM
        NectaryButtonSize.L -> tokens.typography.labelL
    }

    val shape = RoundedCornerShape(r.m)
    val contentPadding = PaddingValues(horizontal = horizontalPadding, vertical = 0.dp)
    val modifierWithHeight = modifier.height(heightDp)

    when (variant) {
        NectaryButtonVariant.Primary, NectaryButtonVariant.CtaPrimary -> Button(
            onClick = onClick,
            modifier = modifierWithHeight,
            enabled = enabled,
            shape = shape,
            contentPadding = contentPadding,
            colors = ButtonDefaults.buttonColors(
                containerColor = c.actionPrimary,
                contentColor = c.onActionPrimary,
                disabledContainerColor = c.actionPrimary.copy(alpha = 0.5f),
                disabledContentColor = c.onActionPrimary.copy(alpha = 0.5f),
            ),
        ) {
            Text(text = text, style = textStyle)
        }

        NectaryButtonVariant.Secondary, NectaryButtonVariant.CtaSecondary -> OutlinedButton(
            onClick = onClick,
            modifier = modifierWithHeight,
            enabled = enabled,
            shape = shape,
            contentPadding = contentPadding,
            border = BorderStroke(
                width = 1.dp,
                color = if (variant == NectaryButtonVariant.CtaSecondary) c.actionPrimary else c.borderDefault,
            ),
            colors = ButtonDefaults.outlinedButtonColors(
                contentColor = if (variant == NectaryButtonVariant.CtaSecondary) c.actionPrimary else c.textPrimary,
                disabledContentColor = c.textDisabled,
            ),
        ) {
            Text(text = text, style = textStyle)
        }

        NectaryButtonVariant.SubtlePrimary -> TextButton(
            onClick = onClick,
            modifier = modifierWithHeight,
            enabled = enabled,
            shape = shape,
            contentPadding = contentPadding,
            colors = ButtonDefaults.textButtonColors(
                contentColor = c.actionPrimary,
                disabledContentColor = c.textDisabled,
            ),
        ) {
            Text(text = text, style = textStyle)
        }

        NectaryButtonVariant.SubtleSecondary -> TextButton(
            onClick = onClick,
            modifier = modifierWithHeight,
            enabled = enabled,
            shape = shape,
            contentPadding = contentPadding,
            colors = ButtonDefaults.textButtonColors(
                contentColor = c.textPrimary,
                disabledContentColor = c.textDisabled,
            ),
        ) {
            Text(text = text, style = textStyle)
        }

        NectaryButtonVariant.Destructive -> Button(
            onClick = onClick,
            modifier = modifierWithHeight,
            enabled = enabled,
            shape = shape,
            contentPadding = contentPadding,
            colors = ButtonDefaults.buttonColors(
                containerColor = c.statusError,
                contentColor = Color.White,
                disabledContainerColor = c.statusError.copy(alpha = 0.5f),
                disabledContentColor = Color.White.copy(alpha = 0.5f),
            ),
        ) {
            Text(text = text, style = textStyle)
        }
    }
}
