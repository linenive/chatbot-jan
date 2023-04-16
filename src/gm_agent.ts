import { Configuration, OpenAIApi } from 'openai';

export class GmAgent {
    private openai: OpenAIApi;

    public constructor() {
        var config = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });
        
        this.openai = new OpenAIApi(config);
    }

    public async chat(): Promise<string> {
        var response = await this.openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [
                {"role": "system", "content": "You are TRPG player."},
            ],
            max_tokens: 100,
            temperature: 0.5,
        })
        
        if (response.status == 200) {
            return response.data.choices[0].message.content;
        }
        else {
            return 'error';
        }
    }
}
