import { component$, useResource$, Resource } from '@builder.io/qwik';
import { container } from './about-me.css';

interface ProductData {
	skuId: string;
	price: number;
	description: string;
}

export default component$(() => {
	const resourceToRender = useResource$<ProductData>(({ cleanup }) => {
		// We need a way to re-run fetching data whenever the `github.org` changes.
		// Use `track` to trigger re-running of the this data fetching function.

		// A good practice is to use `AbortController` to abort the fetching of data if
		// new request comes in. We create a new `AbortController` and register a `cleanup`
		// function which is called when this function re-runs.
		const controller = new AbortController();
		cleanup(() => controller.abort());

		// Fetch the data and return the promises.
		return getRepositories(controller);
	});
	return (
		<div class={container}>
			<div>This is me! 😎</div>
			<Resource
				value={resourceToRender}
				onPending={() => <div>Loading...</div>}
				onRejected={(reason) => <div>Error: {reason}</div>}
				onResolved={(data) => <div>{data.description}</div>}
			/>
		</div>
	);
});

async function getRepositories(
	// skuId: string,
	controller?: AbortController
): Promise<ProductData> {
	const resp = await fetch(`https://thisisme.vercel.app/names`, {
		signal: controller?.signal,
	});
	console.log('FETCH resolved');
	const json = await resp.json();
	return json;
}
