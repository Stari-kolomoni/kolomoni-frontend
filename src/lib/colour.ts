/* eslint-disable max-classes-per-file */

/**
 * A set of useful console colours and associated conversion functions.
 */

import {
    clamp, isInRange, stripStringSuffix,
} from "./utilities";

export class ColorError extends Error {
    constructor(message: string = "") {
        super(message);
    }
}

export class InvalidColorError extends ColorError {
    constructor(invalidValue: string) {
        super(`Invalid color value: ${invalidValue}!`);
    }
}

/**
 * Converts an 8-bit numeric (0 - 255) color value to its
 * lower case two-character hexadecimal representation
 * (e.g. "ff").
 *
 * @param value Value to convert to hex.
 */
function eightBitColorValueToHex(value: number): string {
    const hexValue = value.toString(16).toLowerCase();
    return hexValue.padStart(2, "0");
}

/**
 * MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb#formal_syntax
 *
 * @param content String to convert into an 8-bit color.
 */
function convertRgbSyntaxComponentInto8BitColor(content: string): number {
    if (content === "none") {
        return 0;
    }

    if (content.endsWith("%")) {
        const contentWithoutPercent = stripStringSuffix(content, "%");
        const parsedPercent = parseFloat(contentWithoutPercent);
        if (!isInRange(parsedPercent, 0, 100)) {
            throw new InvalidColorError(content);
        }

        return parsedPercent * 256;
    }

    const parsedValue = parseInt(content, 10);
    if (!isInRange(parsedValue, 0, 255)) {
        throw new InvalidColorError(content);
    }

    return parsedValue;
}

function convertAlphaSyntaxComponentIntoNormalizedFloat(alpha: string): number {
    // See also: https://developer.mozilla.org/en-US/docs/Web/CSS/alpha-value

    if (alpha === "none") {
        return 0;
    }

    if (alpha.endsWith("%")) {
        const alphaPercent = parseFloat(stripStringSuffix(alpha, "%"));
        if (!isInRange(alphaPercent, 0, 100)) {
            throw new InvalidColorError(alpha);
        }

        return alphaPercent / 100.0;
    }

    const alphaRatio = parseFloat(alpha);
    if (!isInRange(alphaRatio, 0, 1)) {
        throw new InvalidColorError(alpha);
    }

    return alphaRatio;
}


function convertHueSyntaxComponentIntoCircleRatio(content: string): number {
    // See also: https://developer.mozilla.org/en-US/docs/Web/CSS/hue

    if (content === "none") {
        return 0;
    }

    if (content.endsWith("deg")) {
        let rawDegrees: number = parseFloat(stripStringSuffix(content, "deg"));
        while (rawDegrees >= 360) {
            rawDegrees -= 360;
        }

        return rawDegrees / 360;
    }

    if (content.endsWith("grad")) {
        let rawGradians: number = parseFloat(stripStringSuffix(content, "grad"));
        while (rawGradians >= 400) {
            rawGradians -= 400;
        }

        return rawGradians / 400;
    }

    if (content.endsWith("rad")) {
        let rawRadians: number = parseFloat(stripStringSuffix(content, "rad"));
        while (rawRadians >= (2 * Math.PI)) {
            rawRadians -= (2 * Math.PI);
        }

        return rawRadians / (2 * Math.PI);
    }

    if (content.endsWith("turn")) {
        const rawTurns: number = parseFloat(stripStringSuffix(content, "turn"));
        return rawTurns - Math.floor(rawTurns);
    }


    let rawDegrees = parseFloat(content);
    while (rawDegrees >= 360) {
        rawDegrees -= 360;
    }

    return rawDegrees / 360;
}

function convertSaturationOrLightnessSyntaxComponentToNormalizedValue(content: string): number {
    if (content === "none") {
        return 0;
    }

    if (!content.endsWith("%")) {
        throw new InvalidColorError(content);
    }

    const percentage = parseFloat(stripStringSuffix(content, "%"));
    if (!isInRange(percentage, 0, 100)) {
        throw new InvalidColorError(content);
    }

    return percentage;
}

export abstract class Color {
    public abstract toCssCompatibleString(): string;
    public abstract toRGB(): RGBAColor;
    public abstract toHSL(): HSLAColor;
}


export class RGBAColor extends Color {
    private static RGB_FORMAT_MASTER_REGEX
        = /rgba?\((\d+\.?\d+%?)\s*,?\s*(\d+\.?\d+%?)\s*,?\s*(\d+\.?\d+%?)(?:\s*[,/]\s*(\d+\.?\d+%?))?\)/is;


    // Type: 8-bit color value (0 to 255 integer).
    public red: number;

    // Type: 8-bit color value (0 to 255 integer).
    public green: number;

    // Type: 8-bit color value (0 to 255 integer).
    public blue: number;

    // Type: 0.0 to 1.0 float.
    public alpha: number;

    constructor(red: number, green: number, blue: number, alpha: number) {
        super();

        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
    }

    /**
     * Converts the `rgb(red, green, blue)` or `rgb(red green blue)` CSS notation to a `RGBAColor`.
     *
     * MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb
     *
     * @param rgbString CSS `rgb` string to parse.
     */
    public static fromRgbNotation(rgbString: string): RGBAColor {
        const rgbRegexMatches = rgbString.match(this.RGB_FORMAT_MASTER_REGEX);
        if (
            rgbRegexMatches === null
          || rgbRegexMatches.length !== 5
        ) {
            throw new InvalidColorError(rgbString);
        }

        let rawRed: string;
        let rawGreen: string;
        let rawBlue: string;
        let rawAlpha: string;

        /* eslint-disable prefer-destructuring */
        if (typeof rgbRegexMatches[4] === "undefined") {
            // RGB format (no alpha - default to fully opaque).
            rawRed = rgbRegexMatches[1];
            rawGreen = rgbRegexMatches[2];
            rawBlue = rgbRegexMatches[3];
            rawAlpha = "100%";
        } else {
            // RGBA format.
            rawRed = rgbRegexMatches[1];
            rawGreen = rgbRegexMatches[2];
            rawBlue = rgbRegexMatches[3];
            rawAlpha = rgbRegexMatches[4];
        }
        /* eslint-enable prefer-destructuring */


        return new RGBAColor(
            convertRgbSyntaxComponentInto8BitColor(rawRed),
            convertRgbSyntaxComponentInto8BitColor(rawGreen),
            convertRgbSyntaxComponentInto8BitColor(rawBlue),
            convertAlphaSyntaxComponentIntoNormalizedFloat(rawAlpha),
        );
    }

    /**
     * Converts a hexadecimal `#rrggbb` to a `RGBAColor`.
     *
     * @param hexColor - hexadecimal representation of the color.
     *        Recognized formats: `#rgb`, `#rrggbb`, `#rrggbbaa`, `rgb`, `rrggbb`, `rrggbbaa`.
     * @throws InvalidColorError when the provided `hexColor` is not a valid color.
     */
    public static fromHexCode(hexColor: string): RGBAColor {
        // Remove the leading "#" if present
        let fullHex = hexColor;
        if (fullHex.startsWith("#")) {
            fullHex = fullHex.slice(1);
        }

        if (fullHex.length === 3) {
            // The format is `rgb`.

            const redChar = fullHex.charAt(0);
            const greenChar = fullHex.charAt(1);
            const blueChar = fullHex.charAt(2);

            const red = parseInt(redChar.repeat(2), 16);
            const green = parseInt(greenChar.repeat(2), 16);
            const blue = parseInt(blueChar.repeat(2), 16);

            return new RGBAColor(red, green, blue, 255);
        }

        if (fullHex.length === 4) {
            // The format is `rgba`.

            const redChar = fullHex.charAt(0);
            const greenChar = fullHex.charAt(1);
            const blueChar = fullHex.charAt(2);
            const alphaChar = fullHex.charAt(3);

            const red = parseInt(redChar.repeat(2), 16);
            const green = parseInt(greenChar.repeat(2), 16);
            const blue = parseInt(blueChar.repeat(2), 16);
            const alpha = parseInt(alphaChar.repeat(2), 16);

            return new RGBAColor(red, green, blue, alpha);
        }

        if (fullHex.length === 6) {
            // The format is `rrggbb`.

            const red = parseInt(fullHex.substring(0, 2), 16);
            const green = parseInt(fullHex.substring(2, 4), 16);
            const blue = parseInt(fullHex.substring(4, 6), 16);

            return new RGBAColor(red, green, blue, 255);
        }

        if (fullHex.length === 8) {
            // The format is `rrggbbaa`.

            const red = parseInt(fullHex.substring(0, 2), 16);
            const green = parseInt(fullHex.substring(2, 4), 16);
            const blue = parseInt(fullHex.substring(4, 6), 16);
            const alpha = parseInt(fullHex.substring(6, 8), 16);

            return new RGBAColor(red, green, blue, alpha);
        }

        throw new InvalidColorError(hexColor);
    }

    /**
     * Converts an RGB color into HSL space (`HSLAColor`).
     *
     * Wikipedia: https://en.wikipedia.org/wiki/HSL_and_HSV#From_RGB
     * MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl
     */
    public toHSLA(): HSLAColor {
        const redNormalized = this.red / 256;
        const greenNormalized = this.green / 256;
        const blueNormalized = this.blue / 256;

        const colorMax = Math.max(redNormalized, greenNormalized, blueNormalized);
        const colorMin = Math.min(redNormalized, greenNormalized, blueNormalized);

        const delta = colorMax - colorMin;

        let hue: number;
        if (delta === 0) {
            hue = 0;
        } else if (colorMax === redNormalized) {
            hue = ((greenNormalized - blueNormalized) / delta) % 6;
        } else if (colorMax === greenNormalized) {
            hue = ((blueNormalized - redNormalized) / delta) + 2;
        } else {
            hue = ((redNormalized - greenNormalized) / delta) + 4;
        }

        hue = Math.round(hue * 60);
        if (hue < 0) {
            hue += 360;
        }

        let lightness: number = (colorMin + colorMax) / 2;

        let saturation: number;
        if (delta === 0) {
            saturation = 0;
        } else {
            saturation = delta / (1 - Math.abs(2 * lightness - 1));
        }

        saturation = Math.round(saturation * 100);
        lightness = Math.round(lightness * 100);

        return new HSLAColor(hue, saturation, lightness, this.alpha / 256);
    }

    /**
     * Converts this color into its CSS-supported hexadecimal representation,
     * i.e. the `#rrggbb` string.
     */
    public hexNotation(): string {
        const redAsHex = eightBitColorValueToHex(this.red);
        const greenAsHex = eightBitColorValueToHex(this.green);
        const blueAsHex = eightBitColorValueToHex(this.blue);

        return `#${redAsHex}${greenAsHex}${blueAsHex}`;
    }

    public rgbNotation(preferLegacyNotation: boolean = false): string {
        if (this.alpha === 1) {
            if (preferLegacyNotation) {
                return `rgb(${this.red}, ${this.green}, ${this.blue})`;
            }

            return `rgb(${this.red} ${this.green} ${this.blue})`;
        }


        if (preferLegacyNotation) {
            return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
        }

        return `rgb(${this.red} ${this.green} ${this.blue} / ${this.alpha})`;
    }

    public copy(): RGBAColor {
        return new RGBAColor(
            this.red,
            this.green,
            this.blue,
            this.alpha,
        );
    }

    public toCssCompatibleString(): string {
        return this.hexNotation();
    }

    public toHSL(): HSLAColor {
        return this.toHSLA();
    }

    public toRGB(): RGBAColor {
        return this.copy();
    }
}

export class HSLAColor extends Color {
    private static HSL_FORMAT_MASTER_REGEX
        = /hsla?\((\d+\.?\d+%?)\s*,?\s*(\d+\.?\d+%?)\s*,?\s*(\d+\.?\d+%?)(?:\s*[,/]\s*(\d+\.?\d+%?))?\)/is;

    // Range: 0 to 1 (float), representing the entire circle.
    public hue: number;

    // Range: 0 to 1 (float).
    public saturation: number;

    // Range: 0 to 1 (float).
    public lightness: number;

    // Range: 0 to 1 (float).
    public alpha: number;

    constructor(hue: number, saturation: number, lightness: number, alpha: number) {
        super();

        this.hue = clamp(hue, 0, 360);
        this.saturation = clamp(saturation, 0, 1);
        this.lightness = clamp(lightness, 0, 1);
        this.alpha = clamp(alpha, 0, 1);
    }

    public static fromHslNotation(hslString: string): HSLAColor {
        const hslRegexMatches = hslString.match(this.HSL_FORMAT_MASTER_REGEX);
        if (
            hslRegexMatches === null
          || hslRegexMatches.length !== 5
        ) {
            throw new InvalidColorError(hslString);
        }

        let rawHue: string;
        let rawSaturation: string;
        let rawLightness: string;
        let rawAlpha: string;

        /* eslint-disable prefer-destructuring */
        if (typeof hslRegexMatches[4] === "undefined") {
            // HSL format (no alpha - default to fully opaque).
            rawHue = hslRegexMatches[1];
            rawSaturation = hslRegexMatches[2];
            rawLightness = hslRegexMatches[3];
            rawAlpha = "100%";
        } else {
            // HSLA format.
            rawHue = hslRegexMatches[1];
            rawSaturation = hslRegexMatches[2];
            rawLightness = hslRegexMatches[3];
            rawAlpha = hslRegexMatches[4];
        }
        /* eslint-enable prefer-destructuring */

        const hue
          = convertHueSyntaxComponentIntoCircleRatio(rawHue);
        const saturation
          = convertSaturationOrLightnessSyntaxComponentToNormalizedValue(rawSaturation);
        const lightness
          = convertSaturationOrLightnessSyntaxComponentToNormalizedValue(rawLightness);
        const alpha
          = convertAlphaSyntaxComponentIntoNormalizedFloat(rawAlpha);

        return new HSLAColor(hue, saturation, lightness, alpha);
    }

    /**
     * Converts `HSLAColor` to `RGBAColor`.
     * Note that some loss due to float precision is to be expected.
     *
     * Wiki: https://en.wikipedia.org/wiki/HSL_and_HSV#To_RGB
     */
    public toRGBA(): RGBAColor {
        const chroma: number = this.lightness * (1 - Math.abs(2 * this.lightness - 1));
        const hueScaled: number = this.hue / (1 / 6);
        const intermediateX: number = chroma * (1 - Math.abs((hueScaled % 2) - 1));

        let intermediateRed: number;
        let intermediateGreen: number;
        let intermediateBlue: number;

        if (hueScaled >= 5) {
            intermediateRed = chroma;
            intermediateGreen = 0;
            intermediateBlue = intermediateX;
        } else if (hueScaled >= 4) {
            intermediateRed = intermediateX;
            intermediateGreen = 0;
            intermediateBlue = chroma;
        } else if (hueScaled >= 3) {
            intermediateRed = 0;
            intermediateGreen = intermediateX;
            intermediateBlue = chroma;
        } else if (hueScaled >= 2) {
            intermediateRed = 0;
            intermediateGreen = chroma;
            intermediateBlue = intermediateX;
        } else if (hueScaled >= 1) {
            intermediateRed = intermediateX;
            intermediateGreen = chroma;
            intermediateBlue = 0;
        } else {
            intermediateRed = chroma;
            intermediateGreen = intermediateX;
            intermediateBlue = 0;
        }

        const lightnessMatcher = this.lightness - (chroma / 2);

        const normalizedRed = intermediateRed + lightnessMatcher;
        const normalizedGreen = intermediateGreen + lightnessMatcher;
        const normalizedBlue = intermediateBlue + lightnessMatcher;

        return new RGBAColor(
            Math.round(normalizedRed * 256),
            Math.round(normalizedGreen * 256),
            Math.round(normalizedBlue * 256),
            Math.round(this.alpha * 256),
        );
    }

    public hslNotation(preferLegacyNotation: boolean = false): string {
        const hueDegrees = Math.round((this.hue * 2 * Math.PI) * 100) / 100;
        const saturationPercentage = this.saturation * 100;
        const lightnessPercentage = this.lightness * 100;

        if (this.alpha === 1) {
            if (preferLegacyNotation) {
                return `hsl(${hueDegrees}deg, ${saturationPercentage}%, ${lightnessPercentage}%)`;
            }

            return `hsl(${hueDegrees}deg ${saturationPercentage}% ${lightnessPercentage}%)`;
        }


        const alphaPercentage = this.alpha * 100;

        if (preferLegacyNotation) {
            return `hsl(${hueDegrees}deg, ${saturationPercentage}%, ${lightnessPercentage}%, ${alphaPercentage}%)`;
        }

        return `hsl(${hueDegrees}deg ${saturationPercentage}% ${lightnessPercentage}% / ${alphaPercentage}%)`;
    }

    public copy(): HSLAColor {
        return new HSLAColor(
            this.hue,
            this.saturation,
            this.lightness,
            this.alpha,
        );
    }

    public toCssCompatibleString(): string {
        return this.hslNotation();
    }

    public toHSL(): HSLAColor {
        return this.copy();
    }

    public toRGB(): RGBAColor {
        return this.toRGBA();
    }
}

/**
 * Compute a well-contrasted colour to the specified one.
 *
 * @param color - Base `Color` to calculate a contrasting color for.
 * @returns White or black `Color` depending on which one contrasts better on the provided `color`.
 */
export function getClosestContrastingBWColor(color: Color): RGBAColor {
    let rgbColor: RGBAColor;

    if (!(color instanceof RGBAColor)) {
        rgbColor = color.toRGB();
    } else {
        rgbColor = color;
    }

    // Source: https://www.nbdtech.com/Blog/archive/2008/04/27/Calculating-the-Perceived-Brightness-of-a-Color.aspx
    const brightness = Math.sqrt(
        0.241 * Math.pow(rgbColor.red, 2)
        + 0.691 * Math.pow(rgbColor.green, 2)
        + 0.068 * Math.pow(rgbColor.blue, 2)
    );

    if (brightness > 130) {
        return new RGBAColor(0, 0, 0, 255);
    } else {
        return new RGBAColor(255, 255, 255, 255);
    }
}

export function parseColor(color: string): Color {
    if (color.startsWith("rgb")) {
        return RGBAColor.fromRgbNotation(color) as Color;
    }

    if (color.startsWith("#")) {
        return RGBAColor.fromHexCode(color);
    }

    if (color.startsWith("hsl")) {
        return HSLAColor.fromHslNotation(color);
    }

    return RGBAColor.fromHexCode(color);
}

/**
 * A selection of pleasant console colours (generated using https://coolors.co).
 */
export const CommonColors = {
    // noinspection JSUnusedGlobalSymbols
    LIGHT_GRAY: RGBAColor.fromHexCode("#CCDBDC"),
    OPAL: RGBAColor.fromHexCode("#9DC0BC"),
    POWDER_BLUE: RGBAColor.fromHexCode("#9AD1D4"),
    CG_BLUE: RGBAColor.fromHexCode("#007EA7"),
    FRENCH_BLUE: RGBAColor.fromHexCode("#0072BB"),
    BDAZZLED_BLUE: RGBAColor.fromHexCode("#345995"),
    YELLOW_GREEN_CRAYOLA: RGBAColor.fromHexCode("#CEEC97"),
    STRAW: RGBAColor.fromHexCode("#D0CE7C"),
    BITTER_LIME: RGBAColor.fromHexCode("#C3F73A"),
    SAFFRON: RGBAColor.fromHexCode("#EAC435"),
    CAMEL: RGBAColor.fromHexCode("#CF995F"),
    TUMBLEWEED: RGBAColor.fromHexCode("#F4B393"),
    CADMIUM_ORANGE: RGBAColor.fromHexCode("#E18335"),
    OCHRE: RGBAColor.fromHexCode("#D17A22"),
    BEAVER: RGBAColor.fromHexCode("#938274"),
    GOLD_FUSION: RGBAColor.fromHexCode("#736F4E"),
    SHINY_SHAMROCK: RGBAColor.fromHexCode("#68B684"),
    MYRTLE_GREEN: RGBAColor.fromHexCode("#1D7874"),
    SLATE_GRAY: RGBAColor.fromHexCode("#628395"),
    DARK_LIVER: RGBAColor.fromHexCode("#595358"),
    PINE_TREE: RGBAColor.fromHexCode("#313628"),
    LAUREL_GREEN: RGBAColor.fromHexCode("#A4AC96"),
    RHYTHM: RGBAColor.fromHexCode("#7C7287"),
    PURPLE_NAVY: RGBAColor.fromHexCode("#4F517D"),
    DARK_PURPLE: RGBAColor.fromHexCode("#372549"),
    XIKETIC: RGBAColor.fromHexCode("#1A1423"),
    OLD_ROSE: RGBAColor.fromHexCode("#AC7B7D"),
    MOUNTBATTEN_PINK: RGBAColor.fromHexCode("#977390"),
    MAROON_X11: RGBAColor.fromHexCode("#BF1363"),
};
