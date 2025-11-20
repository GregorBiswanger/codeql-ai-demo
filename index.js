import express from 'express';
import { ChatOpenAI } from '@langchain/openai';
import { createOllamaApiFacade, createLMStudioConfig } from 'ollama-api-facade-js';
import { SYSTEM_PROMPT } from "./system-prompt.js";
import singleton from './singleton.json' with { type: 'json' };

const chatOpenAI = new ChatOpenAI({
    model: 'qwen2.5-7b-instruct',
    streaming: true,
    temperature: 0.1,
    ...createLMStudioConfig()
});

const app = express();
const ollamaApi = createOllamaApiFacade(app, chatOpenAI, 'ArchaiTekt');

ollamaApi.postApiChat(async (chatRequest, chatModel, chatResponse) => {
  chatRequest.addSystemMessage(
    `${SYSTEM_PROMPT} 
    
    ###

    Aktuelle Source-Code Analyseergebnisse:

    ${JSON.stringify(singleton)}`
  );

  const result = await chatModel.stream(chatRequest.messages);
  chatResponse.asStream(result);
});

ollamaApi.listen();