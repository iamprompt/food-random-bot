import type { Message, WebhookRequestBody } from '@line/bot-sdk';
import { createFoodFlexMessage, getRandomFood } from './utils';
import { reply } from './line';

export interface Env {
	LINE_MESSAGING_ACCESS_TOKEN: string;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const { method } = request;

		if (method !== 'POST') {
			return Response.json({ message: 'Method not allowed' }, { status: 405 });
		}

		const body = await request.json<WebhookRequestBody>();

		for (const event of body.events) {
			if (event.type !== 'message' || event.message.type !== 'text') {
				continue;
			}

			const replyToken = event.replyToken;

			if (!replyToken) continue;

			const triggerText = ['กินอะไรดี'];
			if (!triggerText.includes(event.message.text)) continue;

			const randomFood = getRandomFood();

			const messages: Message[] = [
				{
					type: 'flex',
					altText: `เมนูที่ได้คือ${randomFood.name}`,
					contents: createFoodFlexMessage(randomFood),
				},
			];

			await reply({ replyToken, messages, accessToken: env.LINE_MESSAGING_ACCESS_TOKEN });
		}

		return Response.json({ message: 'Success' });
	},
};
