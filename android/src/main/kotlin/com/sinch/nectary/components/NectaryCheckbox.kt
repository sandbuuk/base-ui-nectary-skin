package com.sinch.nectary.components

import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.width
import androidx.compose.material3.Checkbox
import androidx.compose.material3.CheckboxDefaults
import androidx.compose.material3.Text
import androidx.compose.material3.TriStateCheckbox
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.state.ToggleableState
import com.sinch.nectary.theme.NectaryTheme

/**
 * A Nectary-styled checkbox composable.
 *
 * Supports two-state and three-state (indeterminate) modes.
 *
 * @param checked       Whether the checkbox is checked.
 * @param onCheckedChange Callback invoked when the state changes.
 * @param modifier      Compose modifier.
 * @param label         Optional label rendered to the right of the checkbox.
 * @param enabled       Whether the checkbox is interactive.
 * @param indeterminate Show indeterminate (mixed) state instead of checked/unchecked.
 *
 * Usage:
 * ```kotlin
 * var checked by remember { mutableStateOf(false) }
 * NectaryCheckbox(
 *     checked = checked,
 *     onCheckedChange = { checked = it },
 *     label = "Accept terms",
 * )
 * ```
 */
@Composable
fun NectaryCheckbox(
    checked: Boolean,
    onCheckedChange: ((Boolean) -> Unit)?,
    modifier: Modifier = Modifier,
    label: String? = null,
    enabled: Boolean = true,
    indeterminate: Boolean = false,
) {
    val tokens = NectaryTheme.tokens
    val c = tokens.color

    val colors = CheckboxDefaults.colors(
        checkedColor = c.actionPrimary,
        uncheckedColor = c.borderDefault,
        checkmarkColor = c.onActionPrimary,
        disabledCheckedColor = c.actionPrimary.copy(alpha = 0.38f),
        disabledUncheckedColor = c.borderDefault.copy(alpha = 0.38f),
        disabledIndeterminateColor = c.actionPrimary.copy(alpha = 0.38f),
    )

    Row(verticalAlignment = Alignment.CenterVertically, modifier = modifier) {
        if (indeterminate) {
            TriStateCheckbox(
                state = ToggleableState.Indeterminate,
                onClick = { onCheckedChange?.invoke(false) },
                enabled = enabled,
                colors = colors,
            )
        } else {
            Checkbox(
                checked = checked,
                onCheckedChange = onCheckedChange,
                enabled = enabled,
                colors = colors,
            )
        }

        if (label != null) {
            Spacer(Modifier.width(tokens.spacing.spacing2))
            Text(
                text = label,
                style = tokens.typography.bodyM,
                color = if (enabled) c.textPrimary else c.textDisabled,
            )
        }
    }
}
