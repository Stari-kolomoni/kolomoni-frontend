import * as childProcess from "node:child_process";
import * as fs from "node:fs/promises";

export async function pathExists(path: string): Promise<boolean> {
    try {
        await fs.access(path, fs.constants.F_OK);
        return true;
    } catch {
        return false;
    }
}

export async function executeWithStdoutCapture(
    command: string,
    args: string[],
    cwd: string,
    logTitle: string,
) {
    const process = childProcess.spawn(
        command,
        args,
        {
            cwd,
            shell: true,
        }
    );
    
    process.stdout.setEncoding("utf-8");
    process.stdout.on("data", (data) => {
        const dataWithoutNewline = (new String(data)).trimEnd();
        console.log(`[${logTitle}|stdout] ${dataWithoutNewline}`);
    });
    
    process.stderr.setEncoding("utf-8");
    process.stderr.on("data", (data) => {
        const dataWithoutNewline = (new String(data)).trimEnd();
        console.log(`[${logTitle}|stderr] ${dataWithoutNewline}`);
    });
    
    
    return new Promise<void>((resolve, reject) => {
        process.on("close", () => {
            resolve();
        });
    
        process.on("error", (reason) => {
            console.error("Failed to execute with stdout capture: " + reason);
            reject();
        });
    });
}
