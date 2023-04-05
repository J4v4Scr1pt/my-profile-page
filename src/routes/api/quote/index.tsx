import type { RequestHandler } from '@builder.io/qwik-city';

export const onGet: RequestHandler = async ({ json, send }) => {
	try {
		const response = await fetch('https://api.chucknorris.io/jokes/random');
		send(response);
	} catch (error) {
		json(500, {
			reason: error,
		});
	}
};
