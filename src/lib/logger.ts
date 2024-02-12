/* eslint-disable no-console */

/**
 * Enhanced logging module
 */

import {
    Color,
    CommonColors,
    getClosestContrastingBWColor,
} from "./colour";
import { isObject } from "./utilities";

type LoggedObject = unknown;

/*
 * HELPER FUNCTIONS
 */

/**
 * Pick a random colour out of the Common enum (see colour.ts).
 *
 * @returns A random colour.
 */
const generateRandomColor = (): Color => {
    const list = Object.values(CommonColors);
    const randomIndex = Math.floor(Math.random() * list.length);

    return list[randomIndex];
};




interface LoggerHeaderInfo {
    name: string;
    backgroundColour: Color;
    textColour: Color;
}

/**
 * Logger class - a beautified logging facility.
 */
class Logger {
    public readonly name: string;

    private readonly parentLogger: Logger | null;

    private readonly headerBackgroundColour: Color;

    private readonly headerTextColour: Color;

    /**
     * Construct a new Logger.
     *
     * @constructor
     * @param name Name for the Logger.
     * @param colour Optionally, a background `Color` for this Logger.
     * @param parent Optionally, a parent Logger.
     */
    constructor(name: string, colour?: Color, parent?: Logger) {
        this.name = name;

        if (colour) {
            this.headerBackgroundColour = colour;
        } else {
            this.headerBackgroundColour = generateRandomColor();
        }

        this.headerTextColour = getClosestContrastingBWColor(
            this.headerBackgroundColour,
        );
        this.parentLogger = typeof parent === "undefined" ? null : parent;
    }

    /**
     * Initialize a new Logger as a child of the current Logger.
     *
     * @param name Name of the child logger.
     * @param colour CommonColors of the child logger.
     */
    public childLogger(name: string, colour?: Color): Logger {
        return new Logger(name, colour, this);
    }

    private headerForConsolePrint = (): LoggerHeaderInfo[] => {
        if (this.parentLogger === null) {
            return [
                {
                    name: this.name,
                    backgroundColour: this.headerBackgroundColour,
                    textColour: this.headerTextColour,
                },
            ];
        }
        return [
            ...this.parentLogger.headerForConsolePrint(),
            {
                name: this.name,
                backgroundColour: this.headerBackgroundColour,
                textColour: this.headerTextColour,
            },
        ];
    };

    /**
     * Formats the content for console output.
     *
     * @param content - Content to prepare for output to console.
     * @returns A list of argument to pass to `console.info/error/...`.
     */
    private formatForConsole = (content: LoggedObject): (string | null)[] => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const additionalArguments: any[] = [];
        let formattedMessage;

        if (isObject(content)) {
            formattedMessage = "%O";
            additionalArguments.push(content);
        } else {
            formattedMessage = content;
        }

        const headerInfo = this.headerForConsolePrint();

        const headerTextParts: string[] = [];
        const headerFormatParts: string[] = [];
        for (const header of headerInfo) {
            headerTextParts.push(`%c${header.name}%c:`);
            headerFormatParts.push(
                `background-color: ${header.backgroundColour.toCssCompatibleString()};`
                    + `color: ${header.textColour.toCssCompatibleString()};`
                    + "font-weight: light",
            );
            headerFormatParts.push(
                "background-color: rgba(200, 200, 200, 0.15); color: rgba(200, 200, 200, 1); font-weight: light;",
            );
        }

        const finalHeaderText = headerTextParts.join("");

        return [
            `${finalHeaderText}%c ${formattedMessage}`,
            ...headerFormatParts,
            null,
            ...additionalArguments,
        ];
    };

    /**
     * Formats the content for console output, more specifically for group labels.
     *
     * @param label - Group label to use.
     * @returns A list of argument to pass to `console.group`/`console.groupCollapsed`.
     */
    formatForConsoleGroup = (label: LoggedObject): (string | null)[] => {
        const mainStyles = `
            background-color: ${this.headerBackgroundColour};
            color: ${this.headerTextColour};
        `;
        const labelStyles = `${mainStyles} text-decoration: underline; font-weight: bold`;

        return [
            `%c [${this.name.toUpperCase()}] %c${label}%c %c`,
            mainStyles,
            labelStyles,
            mainStyles,
            null,
        ];
    };

    
    /*
     * Beautified logging functions
     */

    /**
     * Log some content to console.
     *
     * @param content - Content to output, can be an Object.
     */
    log = (content: LoggedObject): void => {
        console.log(...this.formatForConsole(content));
    };

    /**
     * Log some content to console with severity `debug`.
     *
     * @param content - Content to output, can be an Object.
     */
    debug = (content: LoggedObject): void => {
        console.debug(...this.formatForConsole(content));
    };

    /**
     * Log some content to console with severity `INFO`.
     *
     * @param content - Content to output, can be an Object.
     */
    info = (content: LoggedObject): void => {
        console.info(...this.formatForConsole(content));
    };

    /**
     * Log some content to console with severity `WARN`.
     *
     * @param content - Content to output, can be an Object.
     */
    warn = (content: LoggedObject): void => {
        console.warn(...this.formatForConsole(content));
    };

    /**
     * Log some content to console with severity `ERROR`.
     *
     * @param content - Content to output, can be an Object.
     */
    error = (content: LoggedObject): void => {
        console.error(...this.formatForConsole(content));
    };

    /**
     * Creates a new group in the console. This indents messages by
     * an additional level, until `console.groupEnd()` is called.
     *
     * @param label - Group label to use.
     */
    group = (label: LoggedObject): void => {
        console.group(...this.formatForConsoleGroup(label));
    };

    /**
     * Creates a new group in the console. However, the group is initially collapsed.
     * This indents messages by an additional level, until `console.groupEnd()` is called.
     *
     * @param label - Group label to use.
     */
    groupCollapsed = (label: LoggedObject): void => {
        console.groupCollapsed(...this.formatForConsoleGroup(label));
    };

    /*
     * Other console functions pass-through
     */
    static assert = (condition?: boolean, ...data: never[]): void => {
        console.assert(condition, ...data);
    };

    static clear = (): void => {
        console.clear();
    };

    static count = (label?: string): void => {
        console.count(label);
    };

    static countReset = (label?: string): void => {
        console.countReset(label);
    };

    static dir = (item?: never, options?: never): void => {
        console.dir(item, options);
    };

    static dirxml = (...data: never[]): void => {
        console.dirxml(...data);
    };

    /**
     * Exit the current group in the console
     * (created by `console.group` or `console.groupCollapsed`).
     */
    static groupEnd = (): void => {
        console.groupEnd();
    };

    static table = (tabularData?: never, properties?: string[]): void => {
        console.table(tabularData, properties);
    };

    static time = (label?: string): void => {
        console.time(label);
    };

    static timeEnd = (label?: string): void => {
        console.timeEnd(label);
    };

    static timeLog = (label?: string, ...data: never[]): void => {
        console.timeLog(label, ...data);
    };

    static timeStamp = (label?: string): void => {
        console.timeStamp(label);
    };

    static trace = (...data: never[]): void => {
        console.trace(...data);
    };
}

// Re-export CommonColors so the user doesn't need to import two modules
export { CommonColors };
export default Logger;
