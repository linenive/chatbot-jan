import { GmAgent } from './gm_agent';

enum GAME_STATE {
    READY,
    PLAYING,
    END
}

export class PlayTrpg {
    private static _instance: PlayTrpg;
    private _game_state: GAME_STATE;
    private _gm_agent: GmAgent;

    private constructor() {
        this._game_state = GAME_STATE.READY;
        this._gm_agent = new GmAgent();
    }

    public static get instance(): PlayTrpg {
        if (!this._instance) {
            this._instance = new PlayTrpg();
        }

        return this._instance;
    }

    public async start(): Promise<void> {
        while(this._game_state != GAME_STATE.END){
            await this.game_loop();
        }
    }

    private async game_loop(): Promise<void> {
        var answer = await this._gm_agent.chat();

        console.log(answer);

        this._game_state = GAME_STATE.END;

        return;
    }
}