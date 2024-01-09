import type { Message } from '@line/bot-sdk';

const LINE_API_BASE_URL = 'https://api.line.me';

export const reply = async ({ replyToken, messages, accessToken }: { replyToken: string; messages: Message[]; accessToken: string }) => {
	const url = `${LINE_API_BASE_URL}/v2/bot/message/reply`;

	try {
		const response = await fetch(url, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
				'Content-Type': 'application/json',
			},
			method: 'POST',
			body: JSON.stringify({
				replyToken,
				messages,
			}),
		}).then((res) => res.json());
		return response;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
