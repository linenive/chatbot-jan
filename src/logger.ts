import mkdirp from 'mkdirp';
import winston from 'winston';

const enum log_type {
    system = 'system',
    error = 'error',
    gm = 'gm',
    player = 'player',
}

export class logger {
    private static _instance: logger;
    private _log_file: string;
    private readonly writer: winston.Logger;

    private constructor() {
        this._log_file = 'log.txt';
        this.makeLogFolder();
    }

    public static get instance(): logger {
        if (!this._instance) {
            this._instance = new logger();
        }

        return this._instance;
    }

    public log(type: log_type, message: string): void {
        console.log(`[${type}] ${message}`);
    }

    private makeLogFolder(): void {
        try{
            mkdirp.mkdirpSync('logs');
        }
        catch(ex) {
            if (ex.code !== 'EEXIST') {
                throw ex;
            }
        }
    }
}