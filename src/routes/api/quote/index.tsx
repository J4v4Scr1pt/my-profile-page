import type { RequestHandler } from '@builder.io/qwik-city';

interface QuoteNorrisData {
	quote: string;
}

export const onGet: RequestHandler = async ({ json }) => {
	try {
		const response = await fetch('https://api.chucknorris.io/jokes/random');
		const jsonResponse = await response.json();
		json(200, {
			quote: jsonResponse.value,
		} as QuoteNorrisData);
	} catch (error) {
		json(500, {
			reason: error,
		});
	}
};
