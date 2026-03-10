package com.sinch.nectary.components

import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.KeyboardActions
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.OutlinedTextFieldDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.input.VisualTransformation
import com.sinch.nectary.theme.NectaryTheme

/**
 * Nectary text field sizes (maps to --sinch-comp-text-field-size-container-*).
 */
enum class NectaryTextFieldSize { S, M, L }

/**
 * Nectary text field status, mirroring the web `status` prop.
 */
enum class NectaryTextFieldStatus { Default, Invalid }

/**
 * A Nectary-styled text field composable backed by Material 3 [OutlinedTextField].
 *
 * @param value         Current text value.
 * @param onValueChange Value change callback.
 * @param modifier      Compose modifier.
 * @param label         Floating label text.
 * @param placeholder   Placeholder text shown when empty.
 * @param helperText    Supporting text below the field (shown as error text when invalid).
 * @param status        Field status. Use [NectaryTextFieldStatus.Invalid] to show the error state.
 * @param size          Size variant. Defaults to [NectaryTextFieldSize.M].
 * @param enabled       Whether the field is interactive.
 * @param readOnly      Whether the field is read-only.
 * @param leadingIcon   Optional composable rendered at the start of the field.
 * @param trailingIcon  Optional composable rendered at the end of the field.
 * @param keyboardType  Keyboard type for the soft keyboard.
 * @param imeAction     IME action button on the soft keyboard.
 * @param keyboardActions Callbacks for IME actions.
 * @param isPassword    Whether to obscure the input as a password field.
 *
 * Usage:
 * ```kotlin
 * var name by remember { mutableStateOf("") }
 * NectaryTextField(
 *     value = name,
 *     onValueChange = { name = it },
 *     label = "Display name",
 *     placeholder = "Enter your name",
 * )
 * ```
 */
@Composable
fun NectaryTextField(
    value: String,
    onValueChange: (String) -> Unit,
    modifier: Modifier = Modifier,
    label: String? = null,
    placeholder: String? = null,
    helperText: String? = null,
    status: NectaryTextFieldStatus = NectaryTextFieldStatus.Default,
    size: NectaryTextFieldSize = NectaryTextFieldSize.M,
    enabled: Boolean = true,
    readOnly: Boolean = false,
    leadingIcon: (@Composable () -> Unit)? = null,
    trailingIcon: (@Composable () -> Unit)? = null,
    keyboardType: KeyboardType = KeyboardType.Text,
    imeAction: ImeAction = ImeAction.Default,
    keyboardActions: KeyboardActions = KeyboardActions.Default,
    isPassword: Boolean = false,
) {
    val tokens = NectaryTheme.tokens
    val c = tokens.color
    val r = tokens.radius

    val isInvalid = status == NectaryTextFieldStatus.Invalid
    val shape = RoundedCornerShape(r.m)

    val textStyle = when (size) {
        NectaryTextFieldSize.S -> tokens.typography.bodyS
        NectaryTextFieldSize.M -> tokens.typography.bodyM
        NectaryTextFieldSize.L -> tokens.typography.bodyL
    }

    OutlinedTextField(
        value = value,
        onValueChange = onValueChange,
        modifier = modifier,
        enabled = enabled,
        readOnly = readOnly,
        textStyle = textStyle,
        label = label?.let { { Text(it, style = tokens.typography.labelS) } },
        placeholder = placeholder?.let { { Text(it, style = textStyle) } },
        supportingText = helperText?.let {
            {
                Text(
                    it,
                    style = tokens.typography.labelXs,
                    color = if (isInvalid) c.statusError else c.textSecondary,
                )
            }
        },
        isError = isInvalid,
        leadingIcon = leadingIcon,
        trailingIcon = trailingIcon,
        visualTransformation = if (isPassword) PasswordVisualTransformation() else VisualTransformation.None,
        keyboardOptions = KeyboardOptions(
            keyboardType = keyboardType,
            imeAction = imeAction,
        ),
        keyboardActions = keyboardActions,
        singleLine = true,
        shape = shape,
        colors = OutlinedTextFieldDefaults.colors(
            focusedBorderColor = c.borderFocus,
            unfocusedBorderColor = c.borderDefault,
            errorBorderColor = c.borderInvalid,
            focusedLabelColor = c.actionPrimary,
            unfocusedLabelColor = c.textSecondary,
            errorLabelColor = c.statusError,
            cursorColor = c.actionPrimary,
            errorCursorColor = c.statusError,
            focusedTextColor = c.textPrimary,
            unfocusedTextColor = c.textPrimary,
            disabledTextColor = c.textDisabled,
        ),
    )
}
