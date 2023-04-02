import type { RequestHandler } from '@builder.io/qwik-city';

export const onGet: RequestHandler = async ({ json, params }) => {
	// put your DB access here, we are hard coding a response for simplicity.
	json(200, {
		skuId: params.skuId,
		price: 123.45,
		description: `Description for ${params.skuId}`,
	});
};
