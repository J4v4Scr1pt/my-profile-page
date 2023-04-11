import {
	component$,
	useResource$,
	Resource,
	$,
	useSignal,
} from '@builder.io/qwik';
import { container } from './about-me.css';
import axios from 'axios';

interface QuoteData {
	quote: string;
}
interface QuoteNorrisData {
	quote: string;
}

interface Error {
	error: unknown;
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
		// @ts-ignore
		norrisQuote.value = nQuote.quote;
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

async function getNorrisQuote(): Promise<QuoteNorrisData | Error> {
	try {
		const url = import.meta.env.DEV
			? 'http://192.168.1.58:5173/api/quote'
			: 'https://thisisme.vercel.app/api/quote';
		const response = await axios.get(url);
		return response.data;
	} catch (error: unknown) {
		return {
			error: error,
		};
	}
}
