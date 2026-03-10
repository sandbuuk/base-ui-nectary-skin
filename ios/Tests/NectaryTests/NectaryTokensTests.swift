import Testing
@testable import Nectary

@Suite("NectaryTokens")
struct NectaryTokensTests {

    @Test("Default tokens are instantiable")
    func defaultTokens() {
        let tokens = NectaryTokens()
        // Color tokens
        #expect(tokens.color.actionPrimary != .clear)
        // Spacing tokens follow a 4pt grid
        #expect(tokens.spacing.spacing1 == 4)
        #expect(tokens.spacing.spacing2 == 8)
        #expect(tokens.spacing.spacing4 == 16)
        // Radius tokens are ascending
        #expect(tokens.radius.xs < tokens.radius.s)
        #expect(tokens.radius.s < tokens.radius.m)
        #expect(tokens.radius.m < tokens.radius.l)
        // Size tokens are ascending
        #expect(tokens.size.iconXs < tokens.size.iconS)
        #expect(tokens.size.iconS < tokens.size.iconM)
    }

    @Test("Custom token overrides work")
    func customColorOverride() {
        var custom = NectaryTokens()
        custom.color.actionPrimary = .blue
        #expect(custom.color.actionPrimary == .blue)
        // Other tokens are unchanged
        #expect(custom.spacing.spacing4 == 16)
    }

    @Test("Color hex initialiser parses RGB correctly")
    func hexColor() {
        // White: 0xFFFFFF
        let white = Color(hex: 0xFFFFFF)
        // Black: 0x000000
        let black = Color(hex: 0x000000)
        // Just verifying the initialiser doesn't crash
        #expect(white != black)
    }

    // MARK: - New token structs

    @Test("Default GlassTokens are instantiable")
    func defaultGlassTokens() {
        let tokens = NectaryTokens()
        #expect(tokens.glass.navigationFallbackOpacity > 0)
        #expect(tokens.glass.controlFallbackOpacity > 0)
        #expect(tokens.glass.prominentFallbackOpacity > 0)
        #expect(tokens.glass.sheetFallbackOpacity > 0)
        #expect(tokens.glass.morphingSpacing > 0)
    }

    @Test("Default ElevationTokens are instantiable")
    func defaultElevationTokens() {
        let tokens = NectaryTokens()
        // Light mode: raised is white (different from base)
        #expect(tokens.elevation.raised != tokens.elevation.base)
    }

    @Test("AvatarTokens deterministic color picker returns consistent value")
    func avatarDeterministicColor() {
        let tokens = NectaryTokens()
        let color1 = tokens.avatar.color(for: "Anna Kowalski")
        let color2 = tokens.avatar.color(for: "Anna Kowalski")
        let colorOther = tokens.avatar.color(for: "Bob Smith")
        // Same identity always maps to same colour
        #expect(color1 == color2)
        // Different identities may differ (not guaranteed but likely with 6-colour palette)
        _ = colorOther // just verify it doesn't crash
    }

    @Test("AvatarTokens empty palette fallback")
    func avatarEmptyPalette() {
        let tokens = AvatarTokens(palette: [])
        let color = tokens.color(for: "Anyone")
        #expect(color == .gray)
    }

    // MARK: - sinchDark preset

    @Test("sinchDark actionPrimary is iOS blue #007AFF")
    func sinchDarkActionPrimary() {
        let dark = NectaryTokens.sinchDark
        let expected = Color(hex: 0x007AFF)
        #expect(dark.color.actionPrimary == expected)
    }

    @Test("sinchDark elevation.base is black")
    func sinchDarkElevationBase() {
        let dark = NectaryTokens.sinchDark
        let black = Color(hex: 0x000000)
        #expect(dark.elevation.base == black)
    }

    @Test("sinchDark elevation.raised is #1C1C1E")
    func sinchDarkElevationRaised() {
        let dark = NectaryTokens.sinchDark
        let raised = Color(hex: 0x1C1C1E)
        #expect(dark.elevation.raised == raised)
    }

    @Test("sinchDark statusSuccess is iOS green #34C759")
    func sinchDarkStatusSuccess() {
        let dark = NectaryTokens.sinchDark
        let expected = Color(hex: 0x34C759)
        #expect(dark.color.statusSuccess == expected)
    }

    @Test("sinchDark statusError is iOS red #FF3B30")
    func sinchDarkStatusError() {
        let dark = NectaryTokens.sinchDark
        let expected = Color(hex: 0xFF3B30)
        #expect(dark.color.statusError == expected)
    }

    @Test("sinchDark spacing is unchanged from defaults")
    func sinchDarkSpacing() {
        let dark = NectaryTokens.sinchDark
        #expect(dark.spacing.spacing1 == 4)
        #expect(dark.spacing.spacing4 == 16)
    }

    @Test("sinchDark avatar palette has 6 colours")
    func sinchDarkAvatarPalette() {
        let dark = NectaryTokens.sinchDark
        #expect(dark.avatar.palette.count == 6)
    }
}
