package com.sinch.nectary.components

import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.width
import androidx.compose.material3.Switch
import androidx.compose.material3.SwitchDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import com.sinch.nectary.theme.NectaryTheme

/**
 * A Nectary-styled switch (toggle) composable.
 *
 * @param checked       Whether the switch is on.
 * @param onCheckedChange Callback invoked when the state changes.
 * @param modifier      Compose modifier.
 * @param label         Optional label rendered to the right of the switch.
 * @param enabled       Whether the switch is interactive.
 * @param thumbContent  Optional composable rendered inside the switch thumb.
 *
 * Usage:
 * ```kotlin
 * var notifications by remember { mutableStateOf(true) }
 * NectarySwitch(
 *     checked = notifications,
 *     onCheckedChange = { notifications = it },
 *     label = "Enable notifications",
 * )
 * ```
 */
@Composable
fun NectarySwitch(
    checked: Boolean,
    onCheckedChange: ((Boolean) -> Unit)?,
    modifier: Modifier = Modifier,
    label: String? = null,
    enabled: Boolean = true,
    thumbContent: (@Composable () -> Unit)? = null,
) {
    val tokens = NectaryTheme.tokens
    val c = tokens.color

    Row(verticalAlignment = Alignment.CenterVertically, modifier = modifier) {
        Switch(
            checked = checked,
            onCheckedChange = onCheckedChange,
            enabled = enabled,
            thumbContent = thumbContent,
            colors = SwitchDefaults.colors(
                checkedThumbColor = c.onActionPrimary,
                checkedTrackColor = c.actionPrimary,
                checkedBorderColor = c.actionPrimary,
                uncheckedThumbColor = c.onActionPrimary,
                uncheckedTrackColor = c.borderDefault,
                uncheckedBorderColor = c.borderDefault,
                disabledCheckedTrackColor = c.actionPrimary.copy(alpha = 0.38f),
                disabledUncheckedTrackColor = c.borderDefault.copy(alpha = 0.38f),
            ),
        )

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
