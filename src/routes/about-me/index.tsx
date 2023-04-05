import {
	component$,
	useResource$,
	Resource,
	$,
	useSignal,
} from '@builder.io/qwik';
import { container } from './about-me.css';

interface QuoteData {
	quote: string;
}
interface QuoteNorrisData {
	value: string;
}

export default component$(() => {
	const norrisQuote = useSignal('No norrisQuote');
	const resourceToRender = useResource$<QuoteData>(async ({ cleanup }) => {
		const controller = new AbortController();
		cleanup(() => controller.abort());

		return await getQuote(controller);
	});
	const onGetNorrisQuote = $(async () => {
		const nQuote = await getNorrisQuote();
		norrisQuote.value = nQuote.value;
	});
	return (
		<div class={container}>
			<div>This is me! 😎</div>
			<Resource
				value={resourceToRender}
				onPending={() => <div>Loading...</div>}
				onRejected={(reason) => <div>Error: {reason.toString()}</div>}
				onResolved={(data) => <div>{data.quote}</div>}
			/>

			<button onClick$={() => onGetNorrisQuote()}>
				Click me for Norris quotes
			</button>
			<span>{norrisQuote}</span>
		</div>
	);
});

async function getQuote(controller?: AbortController): Promise<QuoteData> {
	const resp = await fetch(`https://api.kanye.rest`, {
		signal: controller?.signal,
	});
	const json = await resp.json();
	return json;
}

async function getNorrisQuote(): Promise<QuoteNorrisData> {
	try {
		const resp = await fetch(`https://thisisme.vercel.app/api/quote`);
		console.log('🚀 ~ file: index.tsx:58 ~ getNorrisQuote ~ resp:', resp);
		const json = await resp.json();
		console.log('🚀 ~ file: index.tsx:59 ~ getNorrisQuote ~ json:', json);
		return json;
	} catch (error) {
		console.log('🚀 ~ file: index.tsx:63 ~ getNorrisQuote ~ error:', error);
		return {
			value: 'error',
		} as QuoteNorrisData;
	}
}
